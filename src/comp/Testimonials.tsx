import { motion } from "framer-motion";

const images = [
  "/weddimg1.jpg",
  "/weddimg2.jpg",
  "/weddimg3.jpg",
  "/weddimg4.jpg",
  "/weddimg5.jpg",
  "/weddimg6.jpg",
];

const texts = [
  {
    title: "Life cannot be perfect, but your wedding can be",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat, massa a egestas suscipit, justo erat pharetra erat, ac faucibus elit urna a metus.",
  },
  {
    title: "Celebrate love in the most beautiful way",
    desc: "Praesent vel lorem eget justo vestibulum gravida. Aenean ut orci vel ex vehicula luctus et ac odio.",
  },
  {
    title: "Every moment is worth remembering",
    desc: "Suspendisse potenti. Integer sit amet nisl non nisi congue viverra et sit amet arcu.",
  },
  {
    title: "Make memories that last forever",
    desc: "Aliquam erat volutpat. In hac habitasse platea dictumst. Curabitur eget eros sed libero ultricies faucibus.",
  },
  {
    title: "Elegance meets emotion",
    desc: "Proin quis ex ac mi mattis consectetur. Duis nec sagittis nisl. Vivamus feugiat justo at dictum hendrerit.",
  },
  {
    title: "Your dream day, perfectly planned",
    desc: "Ut vitae lacinia mi. Sed eu lectus non magna consequat aliquam. Mauris viverra velit a ex viverra, eget facilisis elit lacinia.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-24 px-4">
        {images.map((img, index) => {
          const isEven = index % 2 === 0;
          const text = texts[index];
          return (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                isEven ? "" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={img}
                  alt={`Wedding ${index + 1}`}
                  className="rounded-2xl shadow-lg w-full h-80 md:h-96 object-cover"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 text-gray-700">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 font-serif text-gray-900">
                  {text.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">{text.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
