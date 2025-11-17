export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-emerald-50 to-sky-50 border-t-4 border-primary-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-3">
              🏝️ FlipFlap
            </div>
            <p className="text-gray-700 text-sm font-medium">
              🌳 Build your island, 🎮 earn rewards on Sui Blockchain
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-semibold text-gray-900 mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="font-semibold text-gray-900 mb-3">Community</h3>
            <div className="flex items-center justify-center md:justify-end gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 hover:from-primary-500 hover:to-primary-700 rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-lg"
                aria-label="Discord"
              >
                <span className="text-2xl">💬</span>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-secondary-400 to-secondary-600 hover:from-secondary-500 hover:to-secondary-700 rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-lg"
                aria-label="Twitter"
              >
                <span className="text-2xl">🐦</span>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 hover:from-accent-500 hover:to-accent-700 rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-lg"
                aria-label="Telegram"
              >
                <span className="text-2xl">✈️</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-primary-200 pt-6 text-center">
          <p className="text-gray-700 text-sm font-medium">
            © 2025 🏝️ <span className="font-bold text-primary-600">FlipFlap</span>. All Rights Reserved. Built with 💚
          </p>
        </div>
      </div>
    </footer>
  );
}


