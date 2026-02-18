'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, BrainCircuit, Layers3, Orbit, Sparkles, WandSparkles } from 'lucide-react';

const navItems = ['Home', 'Services', 'Work', 'About', 'Contact'];

const services = [
  {
    title: 'Brand Orbit Systems',
    description: 'Identity frameworks that stay coherent across product, marketing, and investor narratives.',
    icon: Orbit
  },
  {
    title: 'Cinematic Web Platforms',
    description: 'Ultra-fast websites and launch platforms with storytelling calibrated for conversion.',
    icon: Layers3
  },
  {
    title: 'AI Experience Design',
    description: 'Agentic interfaces, decision workflows, and future-ready product layers for modern teams.',
    icon: BrainCircuit
  },
  {
    title: 'Immersive Product Films',
    description: '3D-rich motion systems that make intangible products feel tactile and irresistible.',
    icon: Sparkles
  },
  {
    title: 'Growth Architecture',
    description: 'Strategic conversion mapping and experimentation models built for premium offers.',
    icon: WandSparkles
  },
  {
    title: 'Launch War Rooms',
    description: 'Cross-functional sprint support for high-stakes releases and investor-facing moments.',
    icon: ArrowUpRight
  }
];

const workItems = [
  'Helios Quantum Infrastructure',
  'Vanta Health Intelligence',
  'Aria Autonomous Commerce'
];

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: 'blur(12px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
};

export default function HomePage() {
  return (
    <main className="relative overflow-x-clip bg-base text-white selection:bg-glowPurple/40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-280px] h-[660px] w-[660px] -translate-x-1/2 rounded-full bg-glowBlue/20 blur-[160px]" />
        <div className="absolute bottom-[12%] right-[-160px] h-[420px] w-[420px] rounded-full bg-glowPurple/30 blur-[140px]" />
      </div>

      <header className="sticky top-4 z-50 px-4">
        <div className="mx-auto flex h-[70px] w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 shadow-glass backdrop-blur-2xl">
          <p className="text-sm font-semibold tracking-[0.22em] text-white/95">NOIR ATELIER</p>
          <nav className="hidden gap-8 text-sm text-white/70 md:flex">
            {navItems.map((item) => (
              <a className="transition hover:text-white" href={`#${item.toLowerCase()}`} key={item}>
                {item}
              </a>
            ))}
          </nav>
          <button className="rounded-full bg-aurora px-5 py-2 text-sm font-medium shadow-glow transition hover:scale-[1.03] hover:shadow-[0_0_36px_rgba(139,92,246,.45)]">
            Start a Project
          </button>
        </div>
      </header>

      <section className="relative flex min-h-screen items-center px-4 pb-16 pt-28" id="home">
        <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            animate="visible"
            initial="hidden"
            transition={{ duration: 0.9, ease: 'easeOut' }}
            variants={fadeUp}
          >
            <p className="mb-6 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
              Elite Digital Studio
            </p>
            <h1 className="text-balance text-[clamp(2.6rem,6vw,5.8rem)] font-semibold leading-[0.94] tracking-tight">
              We engineer
              <span className="bg-aurora bg-clip-text text-transparent"> luminous</span>
              <br />
              digital worlds for
              <span className="bg-aurora bg-clip-text text-transparent"> category leaders</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg text-white/65">
              From strategic repositioning to cinematic product experiences, we build brand ecosystems that feel rare,
              deliberate, and undeniably premium.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-full bg-aurora px-7 py-3 font-medium shadow-glow transition hover:scale-[1.02]">
                Book Discovery
              </button>
              <button className="rounded-full border border-white/25 bg-white/5 px-7 py-3 font-medium text-white/90 backdrop-blur-xl transition hover:border-glowBlue/50 hover:bg-white/10">
                View Signature Work
              </button>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -14, 0], rotate: [0, 3, 0] }}
            className="relative mx-auto h-[420px] w-[min(92vw,420px)]"
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="absolute inset-0 rounded-full bg-aurora opacity-25 blur-3xl" />
            <div className="absolute inset-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-2xl" />
            <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-gradient-to-br from-glowBlue/70 via-[#1a1f3f] to-glowPurple/70 shadow-[0_0_70px_rgba(59,130,246,.45)]" />
            {[...Array(12)].map((_, i) => (
              <motion.span
                animate={{ opacity: [0.2, 0.9, 0.2], y: [0, -12, 0] }}
                className="absolute h-1.5 w-1.5 rounded-full bg-white/90"
                key={i}
                style={{
                  left: `${10 + i * 7}%`,
                  top: `${15 + ((i * 13) % 70)}%`
                }}
                transition={{ duration: 3 + i * 0.25, repeat: Infinity, ease: 'easeInOut' }}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-24" id="services">
        <motion.div
          className="mx-auto max-w-6xl"
          initial="hidden"
          transition={{ staggerChildren: 0.08 }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView="visible"
        >
          <motion.h2 className="mb-4 text-4xl font-semibold tracking-tight md:text-5xl" variants={fadeUp}>
            Signature Capabilities
          </motion.h2>
          <motion.p className="mb-12 max-w-2xl text-white/65" variants={fadeUp}>
            Precision-built services for founders and teams competing at the highest tier.
          </motion.p>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <motion.article
                className="group rounded-3xl border border-white/10 bg-white/[0.045] p-7 shadow-glass transition hover:-translate-y-1 hover:border-glowBlue/40 hover:bg-white/[0.075]"
                key={service.title}
                variants={fadeUp}
              >
                <service.icon className="mb-5 h-10 w-10 text-glowBlue" />
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-white/65">{service.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="px-4 py-24" id="work">
        <motion.div
          className="mx-auto max-w-6xl space-y-8"
          initial="hidden"
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView="visible"
        >
          <motion.h2 className="text-4xl font-semibold tracking-tight md:text-5xl" variants={fadeUp}>
            Selected Work
          </motion.h2>
          {workItems.map((work, idx) => (
            <motion.article
              className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-8 shadow-glass"
              key={work}
              variants={fadeUp}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,.24),transparent_50%)] opacity-60 transition group-hover:scale-110" />
              <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-white/60">Case Study {`0${idx + 1}`}</p>
                  <h3 className="mt-3 text-3xl font-semibold">{work}</h3>
                  <p className="mt-3 max-w-2xl text-white/65">
                    A full-stack brand and product narrative crafted for rapid category dominance.
                  </p>
                </div>
                <button className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2 text-sm font-medium text-white/95 transition hover:border-glowPurple/70 hover:bg-white/15">
                  Explore Project <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="px-4 py-24" id="about">
        <motion.div
          className="mx-auto grid max-w-6xl gap-12 rounded-[34px] border border-white/10 bg-white/[0.045] p-10 shadow-glass lg:grid-cols-2"
          initial="hidden"
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          whileInView="visible"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Built for ambitious eras</h2>
            <p className="mt-6 text-white/70">
              We partner with visionary teams to transform complex offerings into magnetic digital experiences.
              Strategy, design, and engineering move as one integrated studio.
            </p>
          </motion.div>
          <motion.div className="grid grid-cols-3 gap-4" variants={fadeUp}>
            {[
              ['42', 'Global Launches'],
              ['11', 'Industry Awards'],
              ['97%', 'Client Retention']
            ].map(([value, label]) => (
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center" key={label}>
                <p className="text-3xl font-semibold text-transparent bg-aurora bg-clip-text">{value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/60">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="px-4 pb-24 pt-12" id="contact">
        <motion.div
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[38px] border border-white/10 bg-gradient-to-br from-[#111a2a] to-[#141125] px-8 py-16 text-center shadow-glass"
          initial="hidden"
          variants={fadeUp}
          viewport={{ once: true, amount: 0.3 }}
          whileInView="visible"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-aurora opacity-20 blur-[110px]" />
          <h2 className="relative text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Build something remarkable with us.
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-white/70">
            Tell us where your brand is headed. We will shape a digital presence worthy of the trajectory.
          </p>
          <button className="relative mt-10 rounded-full bg-aurora px-8 py-3 font-medium shadow-glow transition hover:scale-[1.03]">
            Schedule a Private Call
          </button>
        </motion.div>
      </section>

      <footer className="border-t border-white/10 bg-white/[0.03] px-4 py-10 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-sm text-white/65 md:flex-row">
          <p className="tracking-[0.2em] text-white/90">NOIR ATELIER</p>
          <div className="flex gap-5">
            {['Home', 'Services', 'Work', 'About', 'Contact'].map((item) => (
              <a className="transition hover:text-white" href={`#${item.toLowerCase()}`} key={item}>
                {item}
              </a>
            ))}
          </div>
          <p>© {new Date().getFullYear()} Noir Atelier. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
