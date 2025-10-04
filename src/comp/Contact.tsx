export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-brandWhite text-center">
      <h2 className="text-3xl sm:text-4xl font-pretty mb-8 text-brandGold">
        Contact Us
      </h2>
      <form className="max-w-md mx-auto space-y-4">
        <input
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
          type="text"
          placeholder="Name"
        />
        <input
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
          type="email"
          placeholder="Email"
        />
        <input
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
          rows={4}
          placeholder="Message"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-brandGold text-white py-3 rounded-full font-semibold hover:shadow-lg transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
