import React, { useState } from 'react';
import ResourceCard from './ResourceCard';
import { Link } from 'react-router-dom';

const gradeXIResources = [
  {
    title: "Orientation Slide",
    desc: "Introduction and orientation slides for Class 11 Chemistry. Covers course overview, objectives, and key topics you'll explore throughout the year.",
    link: "https://docs.google.com/presentation/d/1Dqlc0g8qEDFF4NiA2Rf4dkEOehO0iLMg/edit?slide=id.p1#slide=id.p1",
    type: "slides"
  },
];

const gradeXIIResources = [];

export default function SubjectMaterialsPreview() {
  const [selectedGrade, setSelectedGrade] = useState('XI');
  const resources = selectedGrade === 'XI' ? gradeXIResources : gradeXIIResources;

  return (
    <section id="subjectmaterials" className="bg-cream py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-terracotta font-semibold tracking-widest uppercase text-sm mb-2">Learning Resources</p>
            <h2 className="text-4xl font-bold text-brown-warm">Subject Materials</h2>
            <div className="w-16 h-1 bg-terracotta rounded-full mt-3" />
          </div>
          <Link
            to="/subjectmaterials"
            className="inline-flex items-center gap-2 text-terracotta font-semibold hover:text-terracotta-dark transition-colors text-sm"
          >
            View all materials
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Grade Selector */}
        <div className="inline-flex bg-warm-100 rounded-full p-1 mb-10">
          {['XI', 'XII'].map((grade) => (
            <button
              key={grade}
              onClick={() => setSelectedGrade(grade)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
                selectedGrade === grade
                  ? 'bg-terracotta text-white shadow-sm'
                  : 'text-brown-light hover:text-brown-warm'
              }`}
            >
              Class {grade}
            </button>
          ))}
        </div>

        {/* Cards */}
        {resources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <ResourceCard
                key={index}
                title={resource.title}
                desc={resource.desc}
                link={resource.link}
                type={resource.type}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-brown-light">
            <div className="w-16 h-16 bg-warm-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 text-warm-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
            </div>
            <p className="font-medium">No materials yet for Class {selectedGrade}</p>
            <p className="text-sm mt-1">Check back soon.</p>
          </div>
        )}
      </div>
    </section>
  );
}
