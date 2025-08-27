export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-500 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-yellow-400 rounded-full blur-xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative group">
              <img
                src="/images/at-logo.jpg"
                alt="AT Jewellers Logo - Symbol of Trust Since 1957"
                className="w-16 h-16 rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="text-left">
              <h3 className="text-white font-bold text-xl tracking-wide">Akshay Bardia</h3>
              <p className="text-orange-400 font-medium text-sm">Building Legacy Through Innovation</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-gray-300 text-lg font-light leading-relaxed">
              Continuing the grand legacy of <span className="text-orange-400 font-medium">AT Jewellers</span> with
              <span className="text-white font-medium"> innovation, trust, and excellence</span> since 1957.
            </p>
          </div>

          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent w-64"></div>
          </div>

          <div className="space-y-2">
            <p className="text-gray-400 text-sm font-medium">© 2024 Akshay Bardia. All rights reserved.</p>
            <p className="text-gray-500 text-xs">
              Third Generation Entrepreneur • Chartered Accountant • Jewellery Innovator
            </p>
            <p className="text-gray-500 text-xs mt-3">
              Powered By{" "}
              <a
                href="https://www.botivate.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 transition-colors duration-200 font-medium"
              >
                Botivate
              </a>
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></div>
        </div>
      </div>
    </footer>
  )
}
