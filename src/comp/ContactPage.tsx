export default function ContactPageMao() {
  const venueLat = 40.8915516;
  const venueLng = 20.6729024;
  const venueName = "Klajd&Fer, Buçimas, Pogradec";

  const handleGetDirections = () => {
    const destination = `${venueLat},${venueLng}`;
    const encodedDestination = encodeURIComponent(destination);
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedDestination}`;
    window.open(directionsUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-14 px-6 bg-white max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4 text-[#bfa76f]">Our Location</h2>
      <p className="text-[#bfa76f] mb-8">
        Klajd&Fer — Buçimas, Pogradec <br />
      </p>

      <div className="rounded-md overflow-hidden shadow-lg mb-6 h-[400px] max-w-4xl mx-auto">
        <iframe
          title="Klajd&Fer venue"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps?q=${encodeURIComponent(
            venueName
          )}+@${venueLat},${venueLng}&hl=en&z=17&output=embed`}
        />
      </div>

      <button
        onClick={handleGetDirections}
        className="inline-block bg-[#bfa76f] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#c0aa78] transition hover:shadow-xl"
      >
        Get Directions
      </button>
    </section>
  );
}
