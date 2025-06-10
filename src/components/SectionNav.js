"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const SectionNav = () => {
  const [hoveredItem, setHoveredItem] = useState(null)

  const sections = [
    { id: 'hero', name: 'Never Miss Out' },
    { id: 'trending', name: 'Hot Trending' },
    { id: 'creators', name: 'Popular Creators' }
  ]

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col items-center space-y-4">
        {sections.map((section, index) => (
          <Link 
            key={section.id}
            href={`#${section.id}`}
            className="relative group"
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {/* Increased line width and hover width */}
            <div className="w-8 h-1.5 bg-gray-400 transition-all duration-300 group-hover:bg-white group-hover:w-12" />
            
            {hoveredItem === index && (
              <div className="absolute left-full ml-4 px-3 py-2 bg-black/80 backdrop-blur-sm rounded-md">
                <span className="text-sm font-medium whitespace-nowrap bg-gradient-to-r from-red-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                  {section.name}
                </span>
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SectionNav