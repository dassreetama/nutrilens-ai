export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-extrabold text-green-600 transition hover:scale-105"
        >
          🥗 NutriLens AI
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="font-medium text-gray-600 transition hover:text-green-600"
          >
            Home
          </a>

          <a
            href="#features"
            className="font-medium text-gray-600 transition hover:text-green-600"
          >
            Features
          </a>

          <a
            href="#how"
            className="font-medium text-gray-600 transition hover:text-green-600"
          >
            How It Works
          </a>

          <a
            href="#about"
            className="font-medium text-gray-600 transition hover:text-green-600"
          >
            About
          </a>
        </div>

        {/* CTA Button */}
        <button className="rounded-xl bg-green-600 px-6 py-2.5 font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-lg">
          Get Started
        </button>

      </div>
    </nav>
  );
}