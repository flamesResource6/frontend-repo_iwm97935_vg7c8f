import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950 py-24">
      {/* Day to night gradient sweep */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ x: '-50%' }}
          whileInView={{ x: '50%' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 6, ease: 'easeInOut' }}
          className="absolute inset-y-0 left-0 w-[140%] bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-fuchsia-500/10 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-10 text-center backdrop-blur-xl shadow-[0_20px_100px_rgba(99,102,241,0.25)]">
          <h3 className="text-3xl md:text-4xl font-semibold text-white">Experience the Future of Cooking.</h3>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">An ambient, intelligent companion that transforms what you have into what you crave.</p>
          <button
            className="relative mx-auto mt-8 inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.35)]"
          >
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 blur-md opacity-70"></span>
            <span className="relative rounded-xl border border-white/10 bg-slate-950/80 px-6 py-3">Get Early Access</span>
          </button>
        </div>
      </div>
    </section>
  );
}
