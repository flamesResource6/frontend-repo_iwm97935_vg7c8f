import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Maya',
    quote: 'Turned leftovers into a Michelin-level pasta. Unreal.',
  },
  {
    name: 'Ethan',
    quote: 'Finally cooking healthy without thinking. I just scan and go.',
  },
  {
    name: 'Ava',
    quote: 'It’s like the fridge is talking to my taste buds.',
  },
];

const TCard = ({ t, i }) => (
  <motion.div
    initial={{ opacity: 0, rotateY: -15 }}
    whileInView={{ opacity: 1, rotateY: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ delay: i * 0.05, duration: 0.6 }}
    className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl shadow-[0_10px_60px_rgba(34,211,238,0.2)]"
    style={{ transformStyle: 'preserve-3d' }}
  >
    <div className="text-lg text-white">“{t.quote}”</div>
    <div className="mt-3 text-sm text-slate-400">— {t.name}</div>
    <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),transparent_60%)] blur-2xl" />
  </motion.div>
);

export default function Testimonials() {
  return (
    <section className="relative w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Community</h2>
          <p className="mt-3 text-slate-300">Real kitchens. Real wins.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <TCard key={t.name} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
