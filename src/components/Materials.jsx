import React, { useState } from 'react';
import ResourceCard from './ResourceCard';
import { Link } from 'react-router-dom';

// Grade XI resources
const gradeXIResources = [
    {
        title: "Chemistry Model Set",
        desc: "This is the question paper for Chemistry. It includes various topics such as organic chemistry, inorganic chemistry, and physical chemistry that you will need to study.",
        link: "https://drive.google.com/file/d/your-file-id/view"
    },
    {
        title: "Physics Model Set",
        desc: "This resource includes question papers covering classical mechanics, electromagnetism, and thermodynamics.",
        link: "https://drive.google.com/file/d/your-file-id/view"
    },
    {
        title: "Mathematics Model Set",
        desc: "This question paper contains problems from algebra, calculus, and statistics to help you practice.",
        link: "https://drive.google.com/file/d/your-file-id/view"
    },
    {
        title: "Biology Model Set",
        desc: "This includes various topics in biology such as cell biology, genetics, and ecology that are crucial for your studies.",
        link: "https://drive.google.com/file/d/your-file-id/view"
    }
];

// Grade XII resources
const gradeXIIResources = [
    {
        title: "Advanced Chemistry Set",
        desc: "This resource includes question papers on advanced topics such as organic synthesis and physical chemistry.",
        link: "https://drive.google.com/file/d/your-file-id/view"
    },
    {
        title: "Advanced Physics Set",
        desc: "Covers topics such as quantum mechanics, optics, and thermodynamics.",
        link: "https://drive.google.com/file/d/your-file-id/view"
    },
    {
        title: "Advanced Mathematics Set",
        desc: "This set includes problems from advanced calculus, linear algebra, and probability.",
        link: "https://drive.google.com/file/d/your-file-id/view"
    },
    {
        title: "Advanced Biology Set",
        desc: "This set covers advanced topics in biology such as biotechnology, microbiology, and genetics.",
        link: "https://drive.google.com/file/d/your-file-id/view"
    }
];

export default function Materials() {
    const [selectedGrade, setSelectedGrade] = useState('XI'); // Initial state is Grade XI

    // Determine which resources to display based on the selected grade
    const resources = selectedGrade === 'XI' ? gradeXIResources : gradeXIIResources;

    return (
        <section id='subjectmaterials' className="flex flex-col m-4  p-6 items-center md:items-end">
            <div className='flex items-end space-x-2 hover:text-green-600 cursor-pointer m-4 justify-center md:justify-end'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-8 8a1 1 0 001.414 1.414L4 10.414V19a2 2 0 002 2h3a1 1 0 001-1v-5a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 001 1h3a2 2 0 002-2v-8.586l1.293 1.293a1 1 0 001.414-1.414l-8-8z" />
                </svg>
                <Link to='/' >Home</Link>
            </div>

            <div className='items-center'>
                <div className='flex flex-row justify-around  space-x-4'>
                    <div>
                        <h1 className="text-2xl font-bold mb-6">Chemistry Subject Materials</h1>
                    </div>
                </div>
                {/* Grade Selector */}
                <div className="mb-6 items-center">
                    <button
                        className={`px-4 py-2 mr-2 hover:bg-gray-400 font-bold ${selectedGrade === 'XI' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => setSelectedGrade('XI')}
                    >
                        Grade XI
                    </button>
                    <button
                        className={`px-4 py-2 font-bold hover:bg-gray-400 ${selectedGrade === 'XII' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        onClick={() => setSelectedGrade('XII')}
                    >
                        Grade XII
                    </button>
                </div>
                {/* Resource Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resources.map((resource, index) => (
                        <ResourceCard
                            key={index}
                            title={resource.title}
                            desc={resource.desc}
                            link={resource.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
