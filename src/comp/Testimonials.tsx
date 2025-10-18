import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 px-4">
        {/* 1 */}
        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-1/2">
            <img
              src="/weddimg1.jpg"
              alt="Wedding 1"
              className="w-full h-auto rounded-md shadow-lg object-cover"
            />
          </div>
          <div className="w-1/2 text-gray-700">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#bfa76f] mb-3">
              Life cannot be perfect, but your wedding can be
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              volutpat, massa a egestas suscipit, justo erat pharetra erat, ac
              faucibus elit urna a metus.
            </p>
          </div>
        </motion.div>

        {/* 2 */}
        <motion.div
          className="flex items-center gap-6 flex-row-reverse"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-1/2">
            <img
              src="/weddimg2.jpg"
              alt="Wedding 2"
              className="w-full h-auto rounded-md shadow-lg object-cover"
            />
          </div>
          <div className="w-1/2 text-gray-700">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#bfa76f] mb-3">
              Celebrate love in the most beautiful way
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Praesent vel lorem eget justo vestibulum gravida. Aenean ut orci
              vel ex vehicula luctus et ac odio.
            </p>
          </div>
        </motion.div>

        {/* 3 */}
        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-1/2">
            <img
              src="/weddimg3.jpg"
              alt="Wedding 3"
              className="w-full h-auto rounded-md shadow-lg object-cover"
            />
          </div>
          <div className="w-1/2 text-gray-700">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#bfa76f] mb-3">
              Every moment is worth remembering
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Suspendisse potenti. Integer sit amet nisl non nisi congue viverra
              et sit amet arcu.
            </p>
          </div>
        </motion.div>

        {/* 4 */}
        <motion.div
          className="flex items-center gap-6 flex-row-reverse"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-1/2">
            <img
              src="/weddimg4.jpg"
              alt="Wedding 4"
              className="w-full h-auto rounded-md shadow-lg object-cover"
            />
          </div>
          <div className="w-1/2 text-gray-700">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#bfa76f] mb-3">
              Make memories that last forever
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Aliquam erat volutpat. In hac habitasse platea dictumst. Curabitur
              eget eros sed libero ultricies faucibus.
            </p>
          </div>
        </motion.div>

        {/* 5 */}
        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-1/2">
            <img
              src="/weddimg5.jpg"
              alt="Wedding 5"
              className="w-full h-auto rounded-md shadow-lg object-cover"
            />
          </div>
          <div className="w-1/2 text-gray-700">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#bfa76f] mb-3">
              Elegance meets emotion
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Proin quis ex ac mi mattis consectetur. Duis nec sagittis nisl.
              Vivamus feugiat justo at dictum hendrerit.
            </p>
          </div>
        </motion.div>

        {/* 6 */}
        {/* <motion.div
          className="flex items-center gap-6 flex-row-reverse"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-1/2">
            <img
              src="/weddimg6.jpg"
              alt="Wedding 6"
              className="w-full h-auto rounded-md shadow-lg object-cover"
            />
          </div>
          <div className="w-1/2 text-gray-700">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#bfa76f] mb-3">
              Your dream day, perfectly planned
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Ut vitae lacinia mi. Sed eu lectus non magna consequat aliquam.
              Mauris viverra velit a ex viverra, eget facilisis elit lacinia.
            </p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
