import React, { useState } from 'react';
import ResourceCard from './ResourceCard';
import { Link } from 'react-router-dom';
import { useSheetResources } from '../hooks/useSheetResources';

export default function Materials() {
  const [selectedGrade, setSelectedGrade] = useState('XI');
  const { forGrade, loading, error } = useSheetResources();
  const resources = forGrade(selectedGrade);

  return (
    <div className="min-h-screen bg-cream">
      {/* Top bar */}
      <div className="bg-warm-100 border-b border-warm-200 px-6 py-4">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-brown-light hover:text-terracotta transition-colors text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>

      <section id="subjectmaterials" className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-terracotta font-semibold tracking-widest uppercase text-sm mb-2">Resources</p>
          <h1 className="text-4xl font-bold text-brown-warm">Chemistry Subject Materials</h1>
          <div className="w-16 h-1 bg-terracotta rounded-full mt-3" />
          <p className="text-brown-light mt-4">Select your class below to access study materials, slides, and resources.</p>
        </div>

        {/* Grade Selector */}
        <div className="inline-flex bg-warm-100 rounded-full p-1 mb-10">
          {['XI', 'XII'].map((grade) => (
            <button
              key={grade}
              onClick={() => setSelectedGrade(grade)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
                selectedGrade === grade ? 'bg-terracotta text-white shadow-sm' : 'text-brown-light hover:text-brown-warm'
              }`}
            >
              Class {grade}
            </button>
          ))}
        </div>

        {/* States */}
        {loading && (
          <div className="text-center py-24 text-brown-light">Loading materials...</div>
        )}
        {error && (
          <div className="text-center py-24 text-terracotta">Failed to load materials. Please try again later.</div>
        )}
        {!loading && !error && resources.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <ResourceCard key={index} title={resource.title} desc={resource.desc} link={resource.link} />
            ))}
          </div>
        )}
        {!loading && !error && resources.length === 0 && (
          <div className="text-center py-24 text-brown-light">
            <p className="font-medium">No materials yet for Class {selectedGrade}</p>
            <p className="text-sm mt-1">Check back soon — resources will be added here.</p>
          </div>
        )}
      </section>
    </div>
  );
}
