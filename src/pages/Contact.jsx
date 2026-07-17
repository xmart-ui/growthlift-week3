function Contact() {
  return (
    <div className="min-h-screen bg-gray-900  text-black-400 p-8">
      <h1 className="text-4xl font-bold text-white mb-4 ">Contact</h1>

      <form>
        <div >
          <label>Name</label>
          <br />
          <input type="text" placeholder="Enter your name" />
        </div>

        <br />

        <div>
          <label>Email</label>
          <br />
          <input type="email" placeholder="Enter your email" />
        </div>

        <br />

        <div>
          <label>Message</label>
          <br />
          <textarea
            rows="5"
            placeholder="Enter your message"
          ></textarea>
        </div>

        <br />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;