import React, { useState } from 'react';

// Converts a Google Drive/Slides share URL to an embeddable URL
function toEmbedUrl(url) {
  // Google Slides: /presentation/d/{id}/edit or /present -> /embed
  const slidesMatch = url.match(/\/presentation\/d\/([a-zA-Z0-9_-]+)/);
  if (slidesMatch) {
    return `https://docs.google.com/presentation/d/${slidesMatch[1]}/embed?start=false&loop=false&delayms=3000`;
  }
  // Google Drive file: /file/d/{id}/view -> /preview
  const driveMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (driveMatch) {
    return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
  }
  return url;
}

function ResourceCard({ title, desc, link, type = 'file' }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showEmbed, setShowEmbed] = useState(false);
  const embedUrl = toEmbedUrl(link);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-warm-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="p-6">
        {/* Icon */}
        <div className="w-10 h-10 bg-warm-100 rounded-xl flex items-center justify-center text-terracotta mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
          </svg>
        </div>

        <div className="text-lg font-bold text-brown-warm mb-2">{title}</div>

        <div className={`text-brown-light text-sm leading-relaxed ${isExpanded ? '' : 'line-clamp-2'}`}>
          {desc}
        </div>
        {desc && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-terracotta text-sm mt-1 hover:underline focus:outline-none"
          >
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
        )}

        {/* Actions */}
        <div className="mt-5 pt-4 border-t border-warm-100 flex items-center gap-3">
          {/* <button
            onClick={() => setShowEmbed(!showEmbed)}
            className="inline-flex items-center gap-2 bg-terracotta text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-terracotta-dark transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            {showEmbed ? 'Close' : 'View'}
          </button> */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-warm-100 text-brown-warm text-sm font-medium px-4 py-2 rounded-full hover:bg-warm-200 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
            Open
          </a>
        </div>
      </div>

      {/* Embedded viewer */}
      {showEmbed && (
        <div className="border-t border-warm-100">
          <iframe
            src={embedUrl}
            title={title}
            className="w-full"
            style={{ height: '420px' }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
}

export default ResourceCard;
