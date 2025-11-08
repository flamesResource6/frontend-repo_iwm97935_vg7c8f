import { motion } from 'framer-motion';

const features = [
  {
    title: 'Smart Detection',
    desc: 'Vision models identify ingredients, quantities and freshness with ambient 3D cues.',
  },
  {
    title: 'AI-Generated Recipes',
    desc: 'Turn pantry chaos into tailored recipes that fit your taste, time and tools.',
  },
  {
    title: 'Healthy Choices',
    desc: 'Nutrition-forward suggestions keep macros balanced and flavor forward.',
  },
  {
    title: 'Zero Waste Cooking',
    desc: 'Use what you have. Save money, reduce waste, and cook smarter every day.',
  },
];

const Card = ({ f, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ delay: i * 0.05, duration: 0.6 }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl shadow-[0_10px_60px_rgba(99,102,241,0.15)]"
  >
    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
      <div className="absolute -inset-20 bg-[conic-gradient(from_0deg,transparent,rgba(6,182,212,0.2),rgba(59,130,246,0.2),rgba(168,85,247,0.2),transparent)] animate-[spin_8s_linear_infinite]" />
    </div>
    <div className="relative">
      <h3 className="text-xl font-semibold text-white">{f.title}</h3>
      <p className="mt-2 text-slate-300">{f.desc}</p>
    </div>
    <div className="pointer-events-none absolute right-4 top-4 h-16 w-16 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.25),transparent_60%)] blur-xl" />
  </motion.div>
);

export default function Features() {
  return (
    <section className="relative w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Features</h2>
          <p className="mt-3 text-slate-300">Designed with a premium, minimal aesthetic inspired by spatial computing.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Card key={f.title} f={f} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
