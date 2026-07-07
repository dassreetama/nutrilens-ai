"use client";

import { motion } from "framer-motion";
import { BarChart3, Brain, Camera, HeartPulse } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Upload Food Image",
    description: "Upload any meal photo from your phone or computer.",
    step: "01",
  },
  {
    icon: Brain,
    title: "AI Detects Food",
    description: "Our AI recognizes ingredients and serving size.",
    step: "02",
  },
  {
    icon: BarChart3,
    title: "Nutrition Analysis",
    description: "Calories, protein, carbs, fats and vitamins are calculated.",
    step: "03",
  },
  {
    icon: HeartPulse,
    title: "Health Suggestions",
    description: "Receive personalized healthy eating recommendations.",
    step: "04",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-white px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
            Simple Process
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How NutriLens Works
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Analyze your food in four simple steps.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-semibold text-slate-400">{step.step}</span>
                </div>

                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
