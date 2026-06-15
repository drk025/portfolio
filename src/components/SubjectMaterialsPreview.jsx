import React, { useState } from 'react';
import ResourceCard from './ResourceCard';
import { Link } from 'react-router-dom';
import { useSheetResources } from '../hooks/useSheetResources';

export default function SubjectMaterialsPreview() {
  const [selectedGrade, setSelectedGrade] = useState('XI');
  const { forGrade, loading, error } = useSheetResources();
  const resources = forGrade(selectedGrade);

  return (
    <section id="subjectmaterials" className="bg-cream py-20">
      <div className="max-w-6xl mx-auto px-6">
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
                selectedGrade === grade ? 'bg-terracotta text-white shadow-sm' : 'text-brown-light hover:text-brown-warm'
              }`}
            >
              Class {grade}
            </button>
          ))}
        </div>

        {loading && <div className="text-brown-light py-12 text-center">Loading materials...</div>}
        {error && <div className="text-terracotta py-12 text-center">Failed to load materials.</div>}
        {!loading && !error && resources.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <ResourceCard key={index} title={resource.title} desc={resource.desc} link={resource.link} />
            ))}
          </div>
        )}
        {!loading && !error && resources.length === 0 && (
          <div className="text-center py-16 text-brown-light">
            <p className="font-medium">No materials yet for Class {selectedGrade}</p>
            <p className="text-sm mt-1">Check back soon.</p>
          </div>
        )}
      </div>
    </section>
  );
}
