import React, { useState } from 'react';

function ResourceCard({ title, desc, link }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-white overflow-hidden shadow rounded-lg m-6 hover:scale-105 hover:shadow-lg transition-transform">
            <div className="p-6">
                <div className="text-xl font-bold text-gray-800">{title}</div>
                <div className={`desc text-gray-600 mt-2 ${isExpanded ? '' : 'line-clamp-1'}`}>
                    {desc}
                </div>
                <button
                    onClick={toggleExpand}
                    className="text-blue-500 mt-2 focus:outline-none "
                >
                    {isExpanded ? 'Show Less' : 'Read More'}
                </button>
                <div className="mt-4 flex items-center">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 flex items-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                        </svg>
                        Download 
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ResourceCard;
