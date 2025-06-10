"use client"
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path) => {
    return pathname === path
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="w-full px-4 sm:px-6 py-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          <div className="text-white text-xl sm:text-2xl font-bold">
            <span className="inline-block">∞</span>
          </div>
          <div className="text-white">
            <div className="text-sm sm:text-lg font-bold tracking-wide">CREATORS</div>
            <div className="text-sm sm:text-lg font-bold tracking-wide">UNITED</div>
            <div className="text-xs italic font-light mt-1 hidden sm:block">It all starts with you</div>
          </div>
        </div>

        {/* Desktop Navigation and Search Section */}
        <div className="hidden lg:flex items-center space-x-8">
          {/* Search Bar */}
          <div className="relative">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 w-80">
              <svg 
                className="w-5 h-5 text-gray-300 mr-3" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-white placeholder-gray-300 outline-none flex-1"
              />
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex items-center space-x-8">
            <a 
              href="/" 
              className={`font-medium hover:text-white transition-colors pb-1 ${
                isActive('/') 
                  ? 'text-red-400 border-b-2 border-red-400' 
                  : 'text-gray-300'
              }`}
            >
              Home
            </a>
            <a 
              href="/news" 
              className={`font-medium hover:text-white transition-colors pb-1 ${
                isActive('/news') 
                  ? 'text-red-400 border-b-2 border-red-400' 
                  : 'text-gray-300'
              }`}
            >
              News
            </a>
            <a 
              href="/entertainment" 
              className={`font-medium hover:text-white transition-colors pb-1 ${
                isActive('/entertainment') 
                  ? 'text-red-400 border-b-2 border-red-400' 
                  : 'text-gray-300'
              }`}
            >
              Entertainment
            </a>
            <a 
              href="/influencer" 
              className={`font-medium hover:text-white transition-colors pb-1 ${
                isActive('/influencer') 
                  ? 'text-red-400 border-b-2 border-red-400' 
                  : 'text-gray-300'
              }`}
            >
              Influencer
            </a>
            <a 
              href="/whatshot" 
              className={`font-medium hover:text-white transition-colors pb-1 ${
                isActive('/whatshot') 
                  ? 'text-red-400 border-b-2 border-red-400' 
                  : 'text-gray-300'
              }`}
            >
              What's Hot
            </a>
            <a 
              href="/cu-fest" 
              className={`font-bold hover:text-red-300 transition-colors ${
                isActive('/cu-fest') 
                  ? 'text-red-400' 
                  : 'text-red-400'
              }`}
            >
              CU FEST
            </a>
          </nav>
        </div>

        {/* Tablet Search Bar */}
        <div className="hidden md:flex lg:hidden items-center">
          <div className="relative">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 w-48">
              <svg 
                className="w-4 h-4 text-gray-300 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-white placeholder-gray-300 outline-none flex-1 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={closeMobileMenu}
          ></div>
          
          {/* Mobile Menu */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-gray-900/95 backdrop-blur-md z-50 lg:hidden transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="text-white text-xl font-bold">
                    <span className="inline-block">∞</span>
                  </div>
                  <div className="text-white">
                    <div className="text-sm font-bold tracking-wide">CREATORS UNITED</div>
                  </div>
                </div>
                <button
                  onClick={closeMobileMenu}
                  className="text-white p-2 rounded-md hover:bg-white/10 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Mobile Search Bar */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                  <svg 
                    className="w-5 h-5 text-gray-300 mr-3" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent text-white placeholder-gray-300 outline-none flex-1"
                  />
                </div>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1 px-6 py-4">
                <div className="space-y-4">
                  <a 
                    href="/" 
                    onClick={closeMobileMenu}
                    className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                      isActive('/') 
                        ? 'text-red-400 bg-red-400/10' 
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    Home
                  </a>
                  <a 
                    href="/news" 
                    onClick={closeMobileMenu}
                    className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                      isActive('/news') 
                        ? 'text-red-400 bg-red-400/10' 
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    News
                  </a>
                  <a 
                    href="/entertainment" 
                    onClick={closeMobileMenu}
                    className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                      isActive('/entertainment') 
                        ? 'text-red-400 bg-red-400/10' 
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    Entertainment
                  </a>
                  <a 
                    href="/influencer" 
                    onClick={closeMobileMenu}
                    className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                      isActive('/influencer') 
                        ? 'text-red-400 bg-red-400/10' 
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    Influencer
                  </a>
                  <a 
                    href="/whatshot" 
                    onClick={closeMobileMenu}
                    className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                      isActive('/whatshot') 
                        ? 'text-red-400 bg-red-400/10' 
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    What's Hot
                  </a>
                  <a 
                    href="/cu-fest" 
                    onClick={closeMobileMenu}
                    className={`block py-3 px-4 rounded-lg font-bold transition-colors ${
                      isActive('/cu-fest') 
                        ? 'text-red-400 bg-red-400/10' 
                        : 'text-red-400 hover:text-red-300 hover:bg-red-400/10'
                    }`}
                  >
                    CU FEST
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  )
}

export default Header