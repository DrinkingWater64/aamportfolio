export default function Contact() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-8 text-orange-500">
        Join the Party
      </h2>
      <div className="container mx-auto px-4 text-center">
        <form className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 bg-gray-700 text-white rounded"
            rows="4"
          />
          <button className="bg-dark-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Send Message
          </button>
        </form>
        <div className="mt-6">
          <a href="#">LinkedIn</a> | <a href="#">GitHub</a>
        </div>
      </div>
    </section>
  );
}