import { motion } from "framer-motion";

const testimonials = [
  { name: "Alice & John", text: "Klajd-Fer made our day truly magical!" },
  { name: "Maria & Paul", text: "Everything was perfect, highly recommended." },
  { name: "Sofia & Mark", text: "Elegant, romantic, and unforgettable." },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-3xl sm:text-4xl font-pretty mb-10 text-brandGold">
        Testimonials
      </h2>
      <div className="space-y-6 max-w-md mx-auto">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
          >
            <p className="text-gray-700 mb-3">"{t.text}"</p>
            <h3 className="font-semibold text-brandGold">{t.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
