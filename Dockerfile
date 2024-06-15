# Stage 1: Build the Next.js application
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn build

# Stage 2: Serve the application using a minimal image
FROM node:20-alpine AS runner

# Set the NODE_ENV to production
ENV NODE_ENV=production

# Set the working directory
WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./

# Install only production dependencies using Yarn
RUN yarn install --frozen-lockfile --production

# Expose the port the app runs on
EXPOSE 3000

# Set a non-root user for security purposes
RUN addgroup -S nodeuser && adduser -S nodeuser -G nodeuser
USER nodeuser

# Start the Next.js application
CMD ["yarn", "start"]
