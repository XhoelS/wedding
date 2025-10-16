import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  const whatsappNumber = "+355692732329";
  const defaultMessage =
    "Hello Elton! I would like to inquire about your wedding services.";
  const instagramUsername = "klajd_fer";
  const facebookUrl = "https://www.facebook.com/klajdferweddingvenue/";
  const email = "info@klajdfer.com";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber.replace(
      /\D/g,
      ""
    )}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 pt-3">
      <div className="flex justify-between px-4 gap-2">
        {/* WhatsApp */}
        <div>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleWhatsAppClick}
          >
            <FaWhatsapp className="text-[#bfa76f] text-xl" />
            <span className="text-gray-700 hover:text-[#bfa76f] transition">
              {whatsappNumber}
            </span>
          </div>

          {/* Instagram */}
          <a
            href={`https://www.instagram.com/${instagramUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#bfa76f] transition"
          >
            <FaInstagram className="text-[#bfa76f] text-xl" />
            <span className="text-gray-700">@{instagramUsername}</span>
          </a>
        </div>
        <div>
          {/* Facebook */}
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#bfa76f] transition"
          >
            <FaFacebook className="text-[#bfa76f] text-xl" />
            <span className="text-gray-700">Facebook</span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 hover:text-[#bfa76f] transition"
          >
            <FaEnvelope className="text-[#bfa76f] text-xl" />
            <span className="text-gray-700">{email}</span>
          </a>
        </div>
      </div>

      {/* Footer Text */}
      <p className="text-center text-sm text-gray-500 mt-8">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-serif text-[#bfa76f]">Klajd&Fer</span>. All rights
        reserved.
      </p>
    </footer>
  );
}
