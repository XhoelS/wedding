import { motion } from "framer-motion";
import SplitText from "@/components/SplitText";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-[url('../public/wedding.jpg')] bg-cover bg-center relative">
      {/* <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/0 md:from-black/40 md:to-black/20"></div> */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative  text-center px-4"
      >
        <p className="text-white text-sm sm:text-lg md:text-white mb-6">
          {/* Life is can not be perfect but your wedding can be */}
          <SplitText
            text="Elegant • Romantic • Timeless Weddings"
            className="text-2xl font-semibold text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </p>
        <a
          href="#contact"
          className="inline-block bg-white/15 text-brandWhite px-6 py-3 rounded-full font-semibold text-sm sm:text-base shadow-md hover:shadow-xl transition text-[#bfa76f]"
        >
          Book Now
        </a>
      </motion.div>
    </section>
  );
}
