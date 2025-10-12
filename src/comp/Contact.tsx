export default function Contact() {
  const whatsappNumber = "+355691234567"; // Replace with your number
  const instagramUrl = "https://www.instagram.com/yourprofile";
  const facebookUrl = "https://www.facebook.com/yourpage";
  const email = "info@klajd&fer.com";

  return (
    <section
      id="contact"
      className="flex justify-center px-4 items-center h-dvh flex-col bg-brandWhite text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-pretty mb-8 text-brandGold">
        Contact Us
      </h2>

      {/* Contact Links */}
      <div className="grid grid-cols-2 sm:flex sm:flex-row justify-center gap-4 text-lg">
        <a
          href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-5 py-3 rounded-full hover:bg-green-600 transition"
        >
          WhatsApp
        </a>

        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 text-white px-5 py-3 rounded-full hover:bg-pink-600 transition"
        >
          Instagram
        </a>

        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-5 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Facebook
        </a>

        <a
          href={`mailto:${email}`}
          className="bg-gray-800 text-white px-5 py-3 rounded-full hover:bg-gray-900 transition"
        >
          Email
        </a>
      </div>
    </section>
  );
}
