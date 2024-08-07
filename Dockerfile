# Stage 1: Dependency Installation
FROM node:20-alpine AS deps

# Install compatibility package for libc6, required by some dependencies
RUN apk add --no-cache libc6-compat

# Set the working directory for subsequent commands to /app
WORKDIR /app

# Copy lock files to the working directory to ensure consistent dependencies
COPY yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Install dependencies using yarn with a mounted cache to speed up the process
RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn install --frozen-lockfile

# Stage 2: Build Application
FROM node:20-alpine AS builder

# Set the working directory for subsequent commands to /app
WORKDIR /app

# Copy the installed node_modules from the deps stage to the current working directory
COPY --from=deps /app/node_modules ./node_modules

# Copy the entire source code to the working directory
COPY . .

# Ensure next is in PATH and available
RUN ls -la node_modules/.bin && ls -la node_modules/next && yarn build

# Stage 3: Create Runtime Image
FROM node:20-alpine AS runner

# Set the working directory for subsequent commands to /app
WORKDIR /app

# Set the environment variable NODE_ENV to production
ENV NODE_ENV=production

# Create a system group with gid 1001 named nodejs
RUN addgroup --system --gid 1001 nodejs

# Create a system user with uid 1001 named nextjs and add it to the nodejs group
RUN adduser --system --uid 1001 nextjs

# Copy the public directory from the builder stage to the current working directory
COPY --from=builder /app/public ./public

# Copy the built application files from the builder stage to the current working directory
# and set the ownership to the nextjs user and nodejs group
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to the nextjs user for running the application
USER nextjs

# Expose port 3000 for the application
EXPOSE 3000

# Set the environment variable PORT to 3000
ENV PORT=3000

# Command to run the application
CMD ["node", "server.js"]
