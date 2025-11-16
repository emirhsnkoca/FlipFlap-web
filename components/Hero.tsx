"use client";

import dynamic from "next/dynamic";

// 3D model'i dynamic import ile yüklüyoruz (SSR'dan kaçınmak için)
const ChickModel = dynamic(() => import("./ChickModel"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-full min-h-[400px]">
      <div className="text-center space-y-4">
        <div className="text-8xl sm:text-9xl animate-bounce">🐣</div>
        <p className="text-base sm:text-lg font-semibold text-gray-700">
          Loading 3D Model...
        </p>
      </div>
    </div>
  ),
});

export default function Hero() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-secondary-50 via-primary-50 to-white">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 sm:w-48 sm:h-48 bg-primary-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 sm:w-56 sm:h-56 bg-secondary-200 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-36 h-36 sm:w-52 sm:h-52 bg-primary-100 rounded-full opacity-10 blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                FlipFlop
              </span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Build Your Island
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Chop trees, gather wood, expand your island and earn Web3 rewards
              on the Sui Blockchain!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-4">
              <button
                onClick={scrollToTop}
                className="w-full sm:w-auto bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-bubble font-bold text-lg sm:text-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-2xl hover:shadow-primary-500/50 transform hover:scale-105"
              >
                🎮 Play Now
              </button>

              <button className="w-full sm:w-auto border-2 border-primary-500 text-primary-600 px-8 sm:px-10 py-4 sm:py-5 rounded-bubble font-bold text-lg sm:text-xl hover:bg-primary-50 transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-primary-600">
                  1000+
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  Players
                </div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-secondary-600">
                  500+
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  Islands Built
                </div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-primary-600">
                  50K+
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  Trees Chopped
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Chick Model */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-md lg:max-w-lg aspect-square">
              {/* Circular Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full opacity-30 blur-2xl animate-pulse"></div>

              {/* 3D Model Container */}
              <div className="relative z-10 w-full h-full">
                <ChickModel />
              </div>

              {/* Floating Elements */}
              <div className="absolute top-10 left-0 text-4xl sm:text-5xl animate-bounce delay-300 z-20">
                🌳
              </div>
              <div className="absolute top-20 right-0 text-3xl sm:text-4xl animate-bounce delay-500 z-20">
                🪵
              </div>
              <div className="absolute bottom-10 left-10 text-3xl sm:text-4xl animate-bounce delay-700 z-20">
                🏝️
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

