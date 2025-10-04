import RollingGallery from "@/components/RollingGallery";

export default function Gallery() {
  return (
    <section className="py-16 px-4 bg-brandWhite text-center">
      <h2 className="text-3xl sm:text-4xl font-pretty mb-10 text-brandGold">
        Gallery
      </h2>

      <div className="">
        <RollingGallery autoplay={true} pauseOnHover={true} />
      </div>
    </section>
  );
}
