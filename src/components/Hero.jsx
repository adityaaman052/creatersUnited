"use client"
import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Sample data for carousel cards
  const carouselCards = [
    {
      id: 1,
      image: "/pic01.webp",
      title: "Travis Scott Is Coming to India for His Historic Debut Concert"
    },
    {
      id: 2,
      image: "/samay.webp",
      title: "In just 3 days, Samay Raina's India's Got Latent App hit the top list"
    },
    {
      id: 3,
      image: "/ranveer.webp",
      title: "Fandom or Obsession: The curious case of Ranveer Allahbadia's stalker"
    },
    {
      id: 4,
      image: "/held.webp",
      title: "Held hostage online: Ankush Bahuguna's 40-hour cyber nightmare"
    },
    {
      id: 5,
      image: "/tools.webp",
      title: "Top 5 tools every creator needs for better content creation in 2025"
    },
    {
      id: 6,
      image: "/masoom.webp",
      title: "Masoom Minawala goes beyond fashion: Everything you need to know about her new talk show"
    },
    {
      id: 7,
      image: "/pic07.webp",
      title: "The Rise of Indian Gaming Content Creators in 2024"
    },
    {
      id: 8,
      image: "/pic31.webp",
      title: "Breaking: New Social Media Platform Challenges Instagram"
    },
    {
      id: 9,
      image: "/ranveer.webp",
      title: "Influencer Marketing Trends That Will Dominate 2025"
    },
    {
      id: 10,
      image: "/pic10.webp",
      title: "Creator Economy Reaches New Heights with Latest Funding"
    }
  ]

  // Calculate total slides (showing 3 cards at a time)
  const totalSlides = Math.max(1, carouselCards.length - 2)

  // Auto-scroll carousel every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 2000)

    return () => clearInterval(interval)
  }, [totalSlides])

  return (
    <div className="px-4 md:px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
       <div className="text-center mb-8 md:mb-12">
  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
    THINGS NOT TO
  </h1>
  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent leading-tight">
    MISS OUT
  </h1>
</div>


        {/* Featured Content Cards - Always Visible */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 mb-12 lg:mb-16">
          {/* Card 1 - Travis Scott */}
          <div className="group cursor-pointer">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-orange-500 to-orange-700 h-64 lg:h-80">
              <img 
                src="/pic01.webp" 
                alt="Travis Scott" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                <h3 className="text-white font-bold text-sm lg:text-lg leading-tight">
                  Travis Scott Is Coming to India for His Historic Debut Concert
                </h3>
              </div>
            </div>
          </div>

          {/* Card 2 - Creator-Verse */}
          <div className="group cursor-pointer">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-teal-500 to-teal-700 h-64 lg:h-80">
              <img 
                src="/pic02.webp" 
                alt="Creator Verse" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                <h3 className="text-white font-bold text-sm lg:text-lg leading-tight">
                  Inside the Creator-Verse: A Week of Innovation and...
                </h3>
              </div>
            </div>
          </div>

          {/* Card 3 - Asia Lab CEO */}
          <div className="group cursor-pointer">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-amber-500 to-amber-700 h-64 lg:h-80">
              <img 
                src="/pic03.webp" 
                alt="Asia Lab CEO" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                <h3 className="text-white font-bold text-sm lg:text-lg leading-tight">
                  Uniting Cultures: Asia Lab CEO and Anushka Sen Connect...
                </h3>
              </div>
            </div>
          </div>

          {/* Card 4 - Comedy Creators */}
          <div className="group cursor-pointer">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-pink-500 to-pink-700 h-64 lg:h-80">
              <img 
                src="/pic04.webp" 
                alt="Comedy Creators" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                <h3 className="text-white font-bold text-sm lg:text-lg leading-tight">
                  The 4 Comedy Creators Who Made 2024 a Year to...
                </h3>
              </div>
            </div>
          </div>

          {/* Card 5 - Tanya Khanijow */}
          <div className="group cursor-pointer">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700 h-64 lg:h-80">
              <img 
                src="/pic05.webp" 
                alt="Tanya Khanijow" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                <h3 className="text-white font-bold text-sm lg:text-lg leading-tight">
                  Tanya Khanijow Shines on the Cover Page of Travel and...
                </h3>
              </div>
            </div>
          </div>
        </div>



        {/* Bottom Carousel Section - Shows 3 cards at a time */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentSlide * 33.333}%)`,
              }}
            >
              {carouselCards.map((card) => (
                <div 
                  key={card.id} 
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2 cursor-pointer group"
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-3 md:p-4 hover:bg-white/10 transition-all duration-300 border border-white/10">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-16 h-12 md:w-20 md:h-16 rounded-lg flex-shrink-0 overflow-hidden">
                        <img 
                          src={card.image} 
                          alt={card.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-medium text-xs md:text-sm leading-tight line-clamp-3 pr-2">
                          {card.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-gradient-to-r from-purple-400 to-pink-400 scale-110' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

       
      </div>
    </div>
  )
}

export default Hero