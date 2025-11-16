export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-primary-600 mb-3">
              🐣 FlipFlop
            </div>
            <p className="text-gray-600 text-sm">
              Build your island, earn rewards on Sui Blockchain
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
                className="w-10 h-10 bg-primary-100 hover:bg-primary-200 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                aria-label="Discord"
              >
                <span className="text-xl">💬</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary-100 hover:bg-secondary-200 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                aria-label="Twitter"
              >
                <span className="text-xl">🐦</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-100 hover:bg-primary-200 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                aria-label="Telegram"
              >
                <span className="text-xl">✈️</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="text-gray-600 text-sm">
            © 2025 FlipFlop. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


