function Projects() {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl sm:text-4xl font-bold text-left mb-10">
          My Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">Week 1</h3>
            <p className="text-gray-300">A responsive web application built using React and Tailwind CSS, focused on clean design and user-friendly experience. </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">Week 2</h3>
            <p className="text-gray-300">An interactive JavaScript project showcasing problem-solving skills, responsive layouts, and modern frontend development.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">Week 3</h3>
            <p className="text-gray-300">Currently working on exciting new projects involving React, APIs, and modern web technologies. Stay tuned for updates.</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;