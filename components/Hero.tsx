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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-sky-400 via-sky-300 to-emerald-200">
      {/* Sky Background with Clouds */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Clouds */}
        <div className="absolute top-10 left-10 w-32 h-16 bg-white/40 rounded-full blur-sm animate-float"></div>
        <div className="absolute top-20 right-20 w-40 h-20 bg-white/30 rounded-full blur-sm animate-float-slow"></div>
        <div className="absolute top-32 left-1/3 w-36 h-18 bg-white/35 rounded-full blur-sm animate-float-medium"></div>
        <div className="absolute top-40 right-1/4 w-28 h-14 bg-white/40 rounded-full blur-sm animate-float"></div>
        
        {/* Green Island Base */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-emerald-400 via-emerald-300 to-transparent"></div>
        
        {/* Island Details */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-500/20"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
              <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 bg-clip-text text-transparent animate-pulse">
                🏝️ FlipFlap
              </span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-xl">
                Build Your Island
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white drop-shadow-lg max-w-2xl mx-auto lg:mx-0 font-medium">
              🌳 Chop trees, 🪵 gather wood, 🏝️ expand your island and earn Web3 rewards
              on the Sui Blockchain!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-4">
              <button
                onClick={scrollToTop}
                className="w-full sm:w-auto bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-bubble font-bold text-lg sm:text-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-2xl hover:shadow-primary-500/50 transform hover:scale-110 animate-bounce"
              >
                🎮 Play Now
              </button>

              <button className="w-full sm:w-auto border-4 border-white bg-white/20 backdrop-blur-sm text-white px-8 sm:px-10 py-4 sm:py-5 rounded-bubble font-bold text-lg sm:text-xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-xl">
                📚 Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-8">
              <div className="text-center lg:text-left bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg">
                <div className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
                  🎮 1000+
                </div>
                <div className="text-sm sm:text-base text-white/90 font-medium">
                  Players
                </div>
              </div>
              <div className="text-center lg:text-left bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg">
                <div className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
                  🏝️ 500+
                </div>
                <div className="text-sm sm:text-base text-white/90 font-medium">
                  Islands Built
                </div>
              </div>
              <div className="text-center lg:text-left bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg">
                <div className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
                  🌳 50K+
                </div>
                <div className="text-sm sm:text-base text-white/90 font-medium">
                  Trees Chopped
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Chick Model */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-md lg:max-w-lg aspect-square">
              {/* Circular Background - Oyun temalı */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/40 to-sky-300/40 rounded-full opacity-50 blur-3xl animate-pulse"></div>

              {/* 3D Model Container */}
              <div className="relative z-10 w-full h-full bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl border-4 border-white/30">
                <ChickModel />
              </div>

              {/* Floating Game Elements */}
              <div className="absolute -top-5 -left-5 text-5xl sm:text-6xl animate-bounce z-20 drop-shadow-2xl">
                🌳
              </div>
              <div className="absolute -top-5 -right-5 text-4xl sm:text-5xl animate-bounce delay-500 z-20 drop-shadow-2xl">
                🪵
              </div>
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-4xl sm:text-5xl animate-bounce delay-700 z-20 drop-shadow-2xl">
                🏝️
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <div className="w-6 h-10 border-2 border-white/80 rounded-full flex items-start justify-center p-2 bg-white/10 backdrop-blur-sm shadow-xl">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

