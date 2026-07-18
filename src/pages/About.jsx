function About() {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex items-left justify-items-start px-6 py-12">
      <div className="max-w-3xl w-full text-left md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          About Me
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-400 mb-6">
          Usman Muddasir
        </h2>

        <p className="text-base sm:text-lg text-gray-300 leading-8">
          I am a BSCS student and an aspiring Full Stack Web Developer. I enjoy
          building modern, responsive, and user-friendly web applications using
          React, JavaScript, HTML, CSS, and Tailwind CSS. Alongside web
          development, I am also exploring Artificial Intelligence to expand my
          skills and build innovative solutions.
        </p>
      </div>
    </section>
  );
}

export default About;