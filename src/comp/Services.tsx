import { motion } from "framer-motion";

const services = [
  {
    title: "Wedding Planning",
    desc: "Full wedding planning from start to finish.",
  },
  {
    title: "Decor & Styling",
    desc: "Elegant decor and styling to match your dreams.",
  },
  { title: "Photography", desc: "Capture your unforgettable moments." },
  {
    title: "Venue Selection",
    desc: "Find the perfect venue for your special day.",
  },
];

export default function Services() {
  return (
    <section className="py-16 px-4 bg-brandWhite text-center">
      <h2 className="text-3xl sm:text-4xl font-pretty mb-10 text-brandGold">
        Our Services
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm"
          >
            <h3 className="font-semibold text-lg mb-2 text-brandGold">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
