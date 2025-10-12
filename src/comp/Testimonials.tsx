import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "../../public/weddimg1.jpg",
  "../../public/weddimg2.jpg",
  "../../public/weddimg3.jpg",
  "../../public/weddimg4.jpg",
  "../../public/weddimg5.jpg",
  "../../public/weddimg6.jpg",
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // smooth and fast
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4 bg-white max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left side: Text */}
        <div className="w-full md:w-1/2 text-gray-700 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-4 font-serif">
            Life cannot be perfect, but your wedding can be
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            volutpat, massa a egestas suscipit, justo erat pharetra erat, ac
            faucibus elit urna a metus. Praesent vel lorem eget justo vestibulum
            gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Right side: Slider */}
        <div className="w-full md:w-1/2 relative">
          <div className="overflow-hidden rounded-2xl shadow-lg h-64 md:h-96 relative">
            <AnimatePresence initial={false} mode="popLayout">
              {images.map(
                (img, index) =>
                  index === currentIndex && (
                    <motion.img
                      key={index}
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover absolute top-0 left-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.4} // more sensitive
                      onDragEnd={(e, { offset }) => {
                        // lower threshold for swipe sensitivity
                        if (offset.x < -50)
                          setCurrentIndex((prev) => (prev + 1) % images.length);
                        else if (offset.x > 50)
                          setCurrentIndex(
                            (prev) => (prev - 1 + images.length) % images.length
                          );
                      }}
                    />
                  )
              )}
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-4 gap-2">
            {images.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                } cursor-pointer`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
