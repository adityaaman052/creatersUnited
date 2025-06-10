import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full px-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo and Tagline */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 mr-3">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                    <path d="M20 50C20 30 35 20 50 20C65 20 80 30 80 50C80 70 65 80 50 80C35 80 20 70 20 50Z" />
                    <path d="M50 20C70 20 80 35 80 50C80 65 70 80 50 80C30 80 20 65 20 50C20 35 30 20 50 20Z" fill="none" stroke="white" strokeWidth="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold">CREATORS</h3>
                  <h3 className="text-white text-xl font-bold">UNITED</h3>
                </div>
              </div>
              <p className="text-white text-lg italic font-script">It all starts with you</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-1">
            <nav className="space-y-6">
              <a href="/" className="block text-gray-300 hover:text-white transition-colors text-lg">
                Home
              </a>
              <a href="/news" className="block text-gray-300 hover:text-white transition-colors text-lg">
                News
              </a>
              <a href="/entertainment" className="block text-gray-300 hover:text-white transition-colors text-lg">
                Entertainment
              </a>
              <a href="/influencer" className="block text-gray-300 hover:text-white transition-colors text-lg">
                Influencer
              </a>
              <a href="/whatshot" className="block text-gray-300 hover:text-white transition-colors text-lg">
                What's Hot
              </a>
            </nav>
          </div>

          {/* CU Fest and Office Address */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <h4 className="text-gray-300 text-lg mb-4">CU Fest</h4>
            </div>
            <div>
              <h4 className="text-red-400 text-lg font-semibold mb-4">OFFICES</h4>
              <address className="text-gray-300 text-base not-italic leading-relaxed">
                B - 26/27, Ground Floor,<br />
                Sector 1, Noida,<br />
                201301.
              </address>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-1">
            <h4 className="text-red-400 text-lg font-semibold mb-6">CONTACT US</h4>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-400 to-pink-400 text-white py-3 px-6 rounded-md font-semibold hover:from-red-500 hover:to-pink-500 transition-all duration-200 transform hover:scale-105"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-end mb-8">
          <div className="flex space-x-4">
            <a href="#" className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 lg:mb-0">
              All Copyright and Reserve © Creators United
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              <span>&</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Image User Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;