import { motion } from 'framer-motion';
import { Camera, Brain, Utensils } from 'lucide-react';

const Step = ({ icon: Icon, title, desc, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ delay, duration: 0.6 }}
    className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl shadow-[0_20px_80px_rgba(59,130,246,0.15)]"
  >
    <div className="mb-4 flex items-center gap-3">
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-cyan-500/30 to-fuchsia-500/30 text-cyan-300 ring-1 ring-white/10 shadow-[0_0_20px_rgba(34,211,238,0.35)]">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <p className="text-slate-300">{desc}</p>

    {/* Animated embellishments */}
    <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),transparent_60%)] blur-2xl" />
  </motion.div>
);

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative w-full bg-slate-950 py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-24 w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent blur-2xl" />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">How it works</h2>
          <p className="mt-3 text-slate-300">A seamless flow from scan to supper with cinematic, 3D-inspired feedback.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Step
            icon={Camera}
            title="Scan fridge contents"
            desc="Use your camera to sweep across your shelves. Our depth-aware vision maps items with a luminous scan effect."
          />
          <Step
            delay={0.1}
            icon={Brain}
            title="AI analyzing"
            desc="A holographic brain springs to life, evaluating freshness, nutrition and flavor pairings in real time."
          />
          <Step
            delay={0.2}
            icon={Utensils}
            title="Recipes generated"
            desc="Watch ingredients morph into plated dishes as your personalized menus appear in seconds."
          />
        </div>
      </div>
    </section>
  );
}
