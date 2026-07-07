import { Camera, Brain, BarChart3, Shield, Zap, Smartphone } from "lucide-react";

const features = [
  {
    icon: <Camera size={36} className="text-green-600" />,
    title: "Food Recognition",
    desc: "Upload any food image and detect meals instantly using AI."
  },
  {
    icon: <Brain size={36} className="text-green-600" />,
    title: "AI Analysis",
    desc: "Advanced AI analyzes nutrition, ingredients and health score."
  },
  {
    icon: <BarChart3 size={36} className="text-green-600" />,
    title: "Nutrition Report",
    desc: "Calories, protein, carbs, fats and vitamins in seconds."
  },
  {
    icon: <Shield size={36} className="text-green-600" />,
    title: "Healthy Suggestions",
    desc: "Receive personalized recommendations for healthier eating."
  },
  {
    icon: <Zap size={36} className="text-green-600" />,
    title: "Fast Processing",
    desc: "Get accurate results within a few seconds."
  },
  {
    icon: <Smartphone size={36} className="text-green-600" />,
    title: "Mobile Friendly",
    desc: "Works beautifully on desktop, tablet and mobile."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Powerful Features
        </h2>

        <p className="text-center text-gray-500 mb-16">
          Everything you need to analyze food intelligently.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border p-8 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >
              {feature.icon}

              <h3 className="text-xl font-semibold mt-6">
                {feature.title}
              </h3>

              <p className="text-gray-500 mt-3">
                {feature.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}