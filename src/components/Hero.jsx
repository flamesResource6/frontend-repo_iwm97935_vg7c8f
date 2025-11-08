import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

function NeonButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative group inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-semibold tracking-wide"
      style={{
        textShadow: '0 0 12px rgba(99, 102, 241, 0.45)',
      }}
    >
      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 blur-md opacity-70 group-hover:opacity-100 transition-opacity"></span>
      <span className="absolute inset-[2px] rounded-lg bg-slate-900/90 border border-white/10"></span>
      <span className="relative flex items-center gap-2">
        {children}
      </span>
    </button>
  );
}

export default function Hero() {
  const [doorOpen, setDoorOpen] = useState(false);
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // Parallax tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const mx = e.clientX - (rect.left + rect.width / 2);
      const my = e.clientY - (rect.top + rect.height / 2);
      x.set(Math.max(-50, Math.min(50, mx / 6)));
      y.set(Math.max(-50, Math.min(50, my / 6)));
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, [x, y]);

  // Futuristic particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let w, h;

    const particles = new Array(80).fill(0).map(() => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random(),
      vx: (Math.random() - 0.5) * 0.0008,
      vy: (Math.random() - 0.5) * 0.0008,
      vz: (Math.random() - 0.5) * 0.0003,
    }));

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.floor(w * ratio);
      canvas.height = Math.floor(h * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // energy waves
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, 'rgba(56,189,248,0.10)');
      grad.addColorStop(0.5, 'rgba(99,102,241,0.07)');
      grad.addColorStop(1, 'rgba(232,121,249,0.10)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy; p.z += p.vz;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;
        if (p.z < 0 || p.z > 1) p.vz *= -1;
        const px = p.x * w;
        const py = p.y * h;
        const size = 1.5 + p.z * 3;
        const glow = 0.6 + p.z * 0.8;
        ctx.shadowBlur = 12 * glow;
        ctx.shadowColor = 'rgba(59,130,246,0.9)';
        ctx.fillStyle = 'rgba(59,130,246,0.85)';
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-1/4 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-[-30%] left-[-20%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute top-1/3 right-[-10%] h-[35rem] w-[35rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),transparent_60%)] blur-3xl" />
      </div>

      {/* Particles Canvas */}
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0" />

      <div ref={containerRef} className="relative mx-auto flex max-w-7xl flex-col items-center justify-center gap-14 px-6 pt-28 pb-20 md:flex-row md:pt-32">
        {/* Left: Copy */}
        <div className="relative z-10 max-w-xl text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 drop-shadow-[0_0_25px_rgba(59,130,246,0.35)]"
          >
            Turn What’s in Your Fridge Into What’s on Your Plate.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-4 text-lg md:text-xl text-slate-300"
          >
            AI Fridge Gene — Your smart culinary companion.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-8"
          >
            <NeonButton onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
              Generate My Recipes
            </NeonButton>
          </motion.div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            {['Your Fridge Just Got Smarter.', 'From Ingredients to Inspiration — Instantly.', 'The AI That Cooks With You.'].map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300 backdrop-blur">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right: 3D Fridge */}
        <motion.div
          style={{ rotateX, rotateY }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          onMouseEnter={() => setDoorOpen(true)}
          onMouseLeave={() => setDoorOpen(false)}
          className="relative z-10 h-[440px] w-[320px] md:h-[520px] md:w-[380px] [perspective:1200px]"
        >
          {/* Fridge body */}
          <div className="relative h-full w-full rounded-[28px] bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-[inset_0_0_40px_rgba(255,255,255,0.06),0_25px_80px_rgba(59,130,246,0.25)] overflow-hidden">
            {/* Inner glow */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5" />

            {/* Holographic items */}
            <div className="absolute inset-0 grid place-items-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: doorOpen ? 1 : 0.6 }}
                className="relative h-40 w-40 rounded-full"
              >
                <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,rgba(6,182,212,0.25),rgba(59,130,246,0.35),rgba(168,85,247,0.35),rgba(6,182,212,0.25))] blur-xl" />
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, ease: 'linear', duration: 12 + i * 4 }}
                    className="absolute inset-0"
                  >
                    <div
                      className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.9)]"
                      style={{ transform: `translateX(-50%) translateY(${i * 10}px)` }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Door */}
            <motion.div
              animate={{ rotateY: doorOpen ? -55 : 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 16 }}
              className="absolute inset-0 origin-left rounded-[28px] border border-white/10 bg-slate-950/80 backdrop-blur-xl shadow-[0_15px_50px_rgba(0,0,0,0.45)]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Handle */}
              <div className="absolute right-4 top-1/2 h-24 w-1.5 -translate-y-1/2 rounded-full bg-gradient-to-b from-white/40 via-white/70 to-white/40 shadow-[inset_0_0_6px_rgba(255,255,255,0.4)]" />
              {/* Branding */}
              <div className="absolute bottom-4 left-0 right-0 mx-auto w-max select-none text-xs tracking-widest text-slate-400/80">
                AI Fridge Gene
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
