"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <img 
              src="/FlipFlap-logo.png" 
              alt="FlipFlap Logo" 
              className="h-14 sm:h-16 w-14 sm:w-16 rounded-full object-cover shadow-xl"
            />
            <div className="text-4xl sm:text-5xl font-lilita drop-shadow-lg">
              <span className="text-yellow-400">Flip</span>
              <span className="text-green-600">Flap</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#howtoplay"
              className="text-gray-700 hover:text-primary-600 transition-colors font-semibold text-base"
            >
              How to Play
            </a>
            <a
              href="#features"
              className="text-gray-700 hover:text-primary-600 transition-colors font-semibold text-base"
            >
              Features
            </a>
            <a
              href="#roadmap"
              className="text-gray-700 hover:text-primary-600 transition-colors font-semibold text-base"
            >
              Roadmap
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-700 hover:text-primary-600 transition-colors ml-4"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Play Button - Desktop */}
          <div className="hidden md:block">
            <button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-bubble font-bold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-base"
            >
              🎮 Play
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 mt-2 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <a
                href="#howtoplay"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-primary-600 transition-colors font-semibold py-2 text-base"
              >
                How to Play
              </a>
              <a
                href="#features"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-primary-600 transition-colors font-semibold py-2 text-base"
              >
                Features
              </a>
              <a
                href="#roadmap"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-primary-600 transition-colors font-semibold py-2 text-base"
              >
                Roadmap
              </a>
              <button
                onClick={scrollToTop}
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-bubble font-bold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg text-center"
              >
                🎮 Play
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

