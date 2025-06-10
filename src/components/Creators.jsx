import React from 'react';

const Creators = () => {
  const creators = [
    // First row - 5 cards
    {
      name: "Masoom Minawala",
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=80&h=80&fit=crop&crop=face",
      bgColor: "bg-pink-200"
    },
    {
      name: "Kusha Kapila",
      category: "Content Creator",
      image: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=80&h=80&fit=crop&crop=face",
      bgColor: "bg-blue-200"
    },
    {
      name: "Diipa Buller Khosla",
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=80&h=80&fit=crop&crop=face",
      bgColor: "bg-pink-200"
    },
    {
      name: "Dolly Singh",
      category: "Content Creator",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
      bgColor: "bg-blue-200"
    },
    {
      name: "Rahi Chadda",
      category: "Content Creator",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      bgColor: "bg-pink-200"
    },
    // Second row - 4 cards (offset)
    {
      name: "Ranveer Allahbadia",
      category: "Content Creator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      bgColor: "bg-pink-200"
    },
    {
      name: "Kritika Khurana",
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=80&h=80&fit=crop&crop=face",
      bgColor: "bg-blue-200"
    },
    {
      name: "Aashna Shroff",
      category: "Comedy",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      bgColor: "bg-pink-200"
    },
    {
      name: "Aashna Hegde",
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=80&h=80&fit=crop&crop=face",
      bgColor: "bg-blue-200"
    },
    // Third row - 5 cards
    {
      name: "Nagma Mirajkar",
      category: "Dancer",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=face",
      bgColor: "bg-pink-200"
    },
    {
      name: "Mrunal Panchal",
      category: "Beauty",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
      bgColor: "bg-blue-200"
    },
    {
      name: "Juhi Godambe",
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&fit=crop&crop=face",
      bgColor: "bg-pink-200"
    },
    {
      name: "Avneet Kaur",
      category: "Lifestyle",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
      bgColor: "bg-blue-200"
    },
    {
      name: "Jannat Zubair Rahmani",
      category: "Content Creator",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1e7?w=80&h=80&fit=crop&crop=face",
      bgColor: "bg-pink-200"
    }
  ];

  return (
<div className="min-h-screen bg-white px-4 py-4 sm:px-6 sm:py-4 lg:px-8 lg:py-4">      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">✨</span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Popular Creators</h1>
            <div className="h-1 w-16 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full ml-2"></div>
          </div>
          <p className="text-pink-500 font-medium text-sm sm:text-base ml-8">of this week</p>
        </div>

        {/* Creators Grid */}
        <div className="px-2 sm:px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-4 sm:space-y-6">

              {/* First row - 5 cards */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
                {creators.slice(0, 5).map((creator, index) => (
                  <div
                    key={index}
                    className={`${creator.bgColor} rounded-full px-4 py-3 sm:px-6 sm:py-4 hover:scale-105 transition-transform duration-300 cursor-pointer shadow-sm hover:shadow-md flex-shrink-0`}
                    style={{ minWidth: '180px', maxWidth: '240px', height: '90px' }}
                  >
                    <div className="flex items-center gap-3 h-full">
                      <div className="flex-shrink-0">
                        <img
                          src={creator.image}
                          alt={creator.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white shadow-sm"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-tight mb-0.5">
                          {creator.name}
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          {creator.category}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Second row - 4 cards (offset to the right) */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 pl-6 sm:pl-12 lg:pl-20">
                {creators.slice(5, 9).map((creator, index) => (
                  <div
                    key={index + 5}
                    className={`${creator.bgColor} rounded-full px-4 py-3 sm:px-6 sm:py-4 hover:scale-105 transition-transform duration-300 cursor-pointer shadow-sm hover:shadow-md flex-shrink-0`}
                    style={{ minWidth: '180px', maxWidth: '240px', height: '90px' }}
                  >
                    <div className="flex items-center gap-3 h-full">
                      <div className="flex-shrink-0">
                        <img
                          src={creator.image}
                          alt={creator.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white shadow-sm"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-tight mb-0.5">
                          {creator.name}
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          {creator.category}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Third row - 5 cards (back to center) */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
                {creators.slice(9, 14).map((creator, index) => (
                  <div
                    key={index + 9}
                    className={`${creator.bgColor} rounded-full px-4 py-3 sm:px-6 sm:py-4 hover:scale-105 transition-transform duration-300 cursor-pointer shadow-sm hover:shadow-md flex-shrink-0`}
                    style={{ minWidth: '180px', maxWidth: '240px', height: '90px' }}
                  >
                    <div className="flex items-center gap-3 h-full">
                      <div className="flex-shrink-0">
                        <img
                          src={creator.image}
                          alt={creator.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white shadow-sm"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-tight mb-0.5">
                          {creator.name}
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          {creator.category}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* Bottom spacing for mobile */}
      </div>
    </div>
  );
};

export default Creators;