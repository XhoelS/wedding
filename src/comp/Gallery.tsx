import RollingGallery from "@/components/RollingGallery";
// import { motion } from "framer-motion";

// const images = [
//   "https://images.unsplash.com/photo-1524504388940-0f3a25b63f53",
//   "https://images.unsplash.com/photo-1524504388940-7d0c7c1ee8d3",
//   "https://images.unsplash.com/photo-1505238680356-667803448bb6",
//   "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
// ];

export default function Gallery() {
  return (
    <section className="py-16 px-4 bg-brandWhite text-center">
      <h2 className="text-3xl sm:text-4xl font-pretty mb-10 text-brandGold">
        Gallery
      </h2>

      <div className="">
        {/* {images.map((img, idx) => (
          <motion.img
            key={idx}
            src={img}
            alt="Wedding"
            whileHover={{ scale: 1.05 }}
            className="rounded-lg shadow-md w-full h-48 object-cover"
          />
        ))} */}
        <RollingGallery autoplay={true} pauseOnHover={true} />
      </div>
    </section>
  );
}
