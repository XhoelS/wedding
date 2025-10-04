import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-neutral-700 py-8 text-center border-t border-gray-200">
      <div className="flex justify-center gap-6 mb-4 text-brandGold text-2xl">
        <FaFacebook className="cursor-pointer hover:text-gray-400 transition" />
        <FaInstagram className="cursor-pointer hover:text-gray-400 transition" />
        <FaTwitter className="cursor-pointer hover:text-gray-400 transition" />
      </div>
      <p className="text-sm sm:text-base">
        &copy; {new Date().getFullYear()} Klajd-Fer. All rights reserved.
      </p>
    </footer>
  );
}
