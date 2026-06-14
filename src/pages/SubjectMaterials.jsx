import React from 'react'
import Materials from '../components/Materials'

export default function SubjectMaterials() {
  return (
    <div className='bg-cream min-h-screen'>
      <Materials />
      <span className="block text-sm text-brown-light text-center pb-8">
        © 2023 <a href="#" className="hover:text-terracotta transition-colors">Dansuram Koirala™</a>. All Rights Reserved.
      </span>
    </div>
  )
}

