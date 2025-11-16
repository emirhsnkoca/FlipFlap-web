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
          <div className="flex items-center">
            <div className="text-2xl sm:text-3xl font-bold text-primary-600 cursor-pointer hover:scale-105 transition-transform">
              🐣 FlipFlop
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#features"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Features
            </a>
            <a
              href="#roadmap"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Roadmap
            </a>
            <a
              href="#community"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Community
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

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-bubble font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
            >
              Play Now
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 mt-2 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
              >
                About
              </a>
              <a
                href="#features"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
              >
                Features
              </a>
              <a
                href="#roadmap"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
              >
                Roadmap
              </a>
              <a
                href="#community"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
              >
                Community
              </a>
              <button
                onClick={scrollToTop}
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-bubble font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg text-center"
              >
                Play Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

