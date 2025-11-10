import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -80]);
  const y2 = useTransform(scrollY, [0, 600], [0, -160]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0.6]);

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay gradients for depth, do not block Spline interactions */}
      <motion.div style={{ y: y1 }} className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-white/90" />
      <motion.div style={{ y: y2 }} className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center">
        <motion.h1
          style={{ opacity: opacityText }}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl"
        >
          Minimalist Portfolio
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="mt-4 max-w-2xl text-base text-neutral-600 sm:text-lg"
        >
          Designer-friendly aesthetics with developer-grade performance. Smooth motion, tasteful interactions, and a focus on clarity.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#projects" className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-300">
            View Projects
          </a>
          <a href="#contact" className="rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-300">
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
