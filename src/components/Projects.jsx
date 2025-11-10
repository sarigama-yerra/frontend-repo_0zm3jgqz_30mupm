import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Interactive Dashboard',
    desc: 'A data-rich dashboard with subtle motion and delightful micro-interactions.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    href: '#',
  },
  {
    title: 'Design System Kit',
    desc: 'A scalable component library with tokens, docs, and rigorous accessibility.',
    tech: ['TypeScript', 'Radix', 'Storybook'],
    href: '#',
  },
  {
    title: '3D Product Teaser',
    desc: 'A lightweight 3D landing with Spline integration and buttery parallax.',
    tech: ['Spline', 'React', 'Vite'],
    href: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">Projects</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-neutral-300/70 to-transparent ml-6" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm outline-none transition focus:ring-2 focus:ring-neutral-300"
          >
            <div className="aspect-[16/10] overflow-hidden rounded-xl bg-neutral-100">
              <div className="h-full w-full bg-gradient-to-br from-neutral-200 to-neutral-100 transition-transform duration-500 group-hover:scale-105" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-neutral-900">{p.title}</h3>
            <p className="mt-1 text-sm text-neutral-600">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700">
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
