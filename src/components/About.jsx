import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">About</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-neutral-300/70 to-transparent ml-6" />
      </div>

      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <p className="text-neutral-700 leading-relaxed">
            I craft clean, performant interfaces with a focus on accessibility and motion. My approach blends design thinking with
            engineering discipline: define the problem, build the simplest solution, and iterate with feedback. I enjoy partnering
            with teams to turn complex ideas into clear, elegant experiences.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-neutral-600 sm:grid-cols-3">
            <li className="rounded-lg border border-neutral-200 bg-white px-4 py-3 shadow-sm">React & TypeScript</li>
            <li className="rounded-lg border border-neutral-200 bg-white px-4 py-3 shadow-sm">Tailwind CSS</li>
            <li className="rounded-lg border border-neutral-200 bg-white px-4 py-3 shadow-sm">Framer Motion</li>
            <li className="rounded-lg border border-neutral-200 bg-white px-4 py-3 shadow-sm">Node & FastAPI</li>
            <li className="rounded-lg border border-neutral-200 bg-white px-4 py-3 shadow-sm">Design Systems</li>
            <li className="rounded-lg border border-neutral-200 bg-white px-4 py-3 shadow-sm">Testing & CI</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-3"
        >
          <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-neutral-500">Currently</p>
            <p className="mt-1 font-medium text-neutral-900">Open to freelance & full-time roles</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-neutral-500">Location</p>
            <p className="mt-1 font-medium text-neutral-900">Remote / Worldwide</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-neutral-500">Focus</p>
            <p className="mt-1 font-medium text-neutral-900">UI Engineering, Motion, Accessibility</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
