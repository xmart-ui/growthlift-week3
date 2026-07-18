function NotFound() {
  return (
    <section className="min-h-screen bg-gray-900 flex items-left justify-self-start px-6">
      <div className="text-left text-white">
        <h1 className="text-5xl font-bold mb-4">404</h1>

        <p className="text-xl text-gray-300 mb-6">
          Page Not Found
        </p>

        <a
          href="/"
          className="bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600 transition"
        >
          Go Home
        </a>
      </div>
    </section>
  );
}

export default NotFound;