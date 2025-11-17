"use client";

import { useState, useEffect } from "react";
import PillNav from "./PillNav";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const updateHash = () => {
      setActiveHash(window.location.hash || "");
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", updateHash);

    // initial values
    handleScroll();
    updateHash();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { label: "How to Play", href: "#howtoplay" },
    { label: "Features", href: "#features" },
    { label: "Roadmap", href: "#roadmap" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          {/* Sol: Logo + FlipFlap Yazısı */}
          <div
            className="flex items-center gap-3 cursor-pointer z-50"
            onClick={scrollToTop}
          >
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

          {/* Orta: PillNav (Sadece Desktop) */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <PillNav
              logo="/nobg-logo.png"
              logoAlt="FlipFlap Logo"
              items={navItems}
              activeHref={activeHash}
              baseColor="#10b981"
              pillColor="#ffffff"
              hoveredPillTextColor="#ffffff"
              pillTextColor="#1f2937"
              ease="power2.easeOut"
              initialLoadAnimation={false}
              onLogoClick={scrollToTop}
            />
          </div>

          {/* Sağ: Play Butonu (Desktop) */}
          <div className="hidden md:block z-50">
            <button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-bubble font-bold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-base"
            >
              🎮 Play
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-primary-600 transition-colors z-50"
            aria-label="Toggle menu"
            onClick={() => {
              const menu = document.getElementById('mobile-menu');
              if (menu) {
                menu.classList.toggle('hidden');
              }
            }}
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
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden py-4 border-t border-gray-200 mt-2">
          <div className="flex flex-col space-y-4">
            <a
              href="#howtoplay"
              onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-semibold py-2 text-base"
            >
              How to Play
            </a>
            <a
              href="#features"
              onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}
              className="text-gray-700 hover:text-primary-600 transition-colors font-semibold py-2 text-base"
            >
              Features
            </a>
            <a
              href="#roadmap"
              onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}
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
      </nav>
    </header>
  );
}
