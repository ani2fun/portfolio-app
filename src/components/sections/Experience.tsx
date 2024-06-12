"use client";

import Link from "next/link";
import {useState} from "react";
import experienceData from "../../content/experienceData.json";

// Define the type for experience items
type ExperienceItem = {
    position: string;
    company: {
        short: string;
        name: string;
        url: string;
    };
    time: string;
    description: string;
    items: string[];
    leveragedKnowledgeIn: string[];
};

type ListItem = {
    id: number;
    companyShort: string;
    details: ExperienceItem;
};

const Experience = () => {
    // Transform experience data into list items
    const items: ListItem[] = experienceData.map((exp, index) => ({
        id: index + 1,
        companyShort: exp.company.short,
        details: exp,
    }));

    // State to track the selected item
    const [selectedItem, setSelectedItem] = useState<ListItem | null>(items.length > 0 ? items[0] : null);

    return (
        <section id="experience" className="px-8 py-16 rounded-lg shadow-md font-sans">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-blue-700 mb-12">Experience</h2>
            <div className="flex flex-col md:flex-row md:h-[calc(70vh-8rem)] gap-8">
                {/* Left side - Company List */}
                <div
                    className="md:flex-none md:w-1/4 lg:w-1/5 rounded-md space-y-5 border-2 border-blue-600 dark:border-gray-50 overflow-y-auto">
                    <ul className="flex flex-row md:flex-col">
                        {items.map((item) => (
                            <li
                                key={item.id}
                                className={`cursor-pointer 
                                flex flex-col items-center justify-center 
                                md:text-2xl text-center py-5 px-4 font-semibold 
                                hover:bg-blue-400 hover:text-gray-50 
                                dark:hover:bg-blue-600 dark:hover:text-gray-50 
                                ${selectedItem && selectedItem.id === item.id
                                    ? `bg-blue-700 text-gray-50 
                                       dark:bg-blue-600 dark:text-gray-50`
                                    : `text-blue-900 dark:text-gray-50`
                                }`}
                                onClick={() => setSelectedItem(item)}
                            >
                                {item.companyShort}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right side - Experience Details */}
                <div className="flex-1 rounded-md border-2 border-blue-500 dark:border-gray-50 p-4 overflow-y-auto">
                    {selectedItem ? (
                        <div>
                            <h2 className="text-2sm md:text-3xl font-bold pb-2">{selectedItem.details.position}</h2>
                            <Link href={selectedItem.details.company.url}
                                  className="text-sm md:text-2xl text-blue-600 font-semibold hover:text-gray-600">
                                {selectedItem.details.company.name}
                            </Link>

                            <p className="text-sm md:text-xl text-rose-500 font-sans font-semibold pt-2">{selectedItem.details.time} </p>

                            <p className="pt-4 pb-4 text-sm md:text-2xl">{selectedItem.details.description}</p>

                            <ul className="list-disc pl-8 text-sm md:text-xl">
                                {selectedItem.details.items.map((desc, index) => (
                                    <li className="p-2" key={index}>{desc}</li>
                                ))}
                            </ul>
                            <p className="p-2 font-bold">Leveraged knowledge in:</p>
                            <div className="flex flex-wrap">
                                {selectedItem.details.leveragedKnowledgeIn.map((tech, index) => (
                                    <span key={index}
                                          className="m-1 px-2 rounded text-blue-900 bg-blue-200 dark:text-gray-50 dark:bg-blue-600">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <p>Select a company to see the experience details.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Experience;
