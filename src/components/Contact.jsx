import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">Contact</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-neutral-300/70 to-transparent ml-6" />
      </div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        onSubmit={(e) => e.preventDefault()}
        className="grid grid-cols-1 gap-5 md:grid-cols-2"
      >
        <div className="md:col-span-1">
          <label className="mb-2 block text-sm font-medium text-neutral-700">Name</label>
          <input
            type="text"
            required
            placeholder="Your name"
            className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-300"
          />
        </div>
        <div className="md:col-span-1">
          <label className="mb-2 block text-sm font-medium text-neutral-700">Email</label>
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-300"
          />
        </div>
        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-neutral-700">Message</label>
          <textarea
            rows={5}
            required
            placeholder="Tell me about your project..."
            className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-300"
          />
        </div>
        <div className="md:col-span-2 flex items-center justify-between">
          <p className="text-sm text-neutral-500">I typically respond within 24–48 hours.</p>
          <button
            type="submit"
            className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-300"
          >
            Send
          </button>
        </div>
      </motion.form>
    </section>
  );
}
