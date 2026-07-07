export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-green-600">
          NutriLens AI
        </h1>

        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">How It Works</a>
          <a href="#">About</a>
        </div>

        <button className="bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 transition">
          Get Started
        </button>

      </div>
    </nav>
  );
}