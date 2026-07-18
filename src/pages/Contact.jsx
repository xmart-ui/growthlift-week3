function Contact() {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-5 py-10">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Contact Me
        </h1>

        <form className="space-y-6">
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-green-400 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-green-400 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              rows="5"
              placeholder="Enter your message"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-green-400 outline-none resize-none"
            ></textarea>
          </div>

          <button className="w-full bg-green-500 hover:bg-green-600 py-3 rounded-lg font-semibold transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;