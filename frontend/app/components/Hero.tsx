export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-50 pt-24"
    >
      <h1 className="text-6xl font-extrabold text-green-600">
        NutriLens AI
      </h1>

      <p className="mt-5 text-xl text-gray-600">
        AI Powered Food Nutrition Analyzer
      </p>

      <button className="mt-8 bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700 transition">
        Upload Food Image
      </button>
    </section>
  );
}