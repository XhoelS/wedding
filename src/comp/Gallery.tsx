import RollingGallery from "@/components/RollingGallery";

export default function Gallery() {
  return (
    <section className="flex flex-col justify-center h-dvh px-4 bg-brandWhite text-center">
      <h2 className="text-3xl sm:text-4xl font-pretty mb-2 text-brandGold">
        Gallery
      </h2>

      <div className="">
        <RollingGallery autoplay={true} pauseOnHover={true} />
      </div>
    </section>
  );
}
