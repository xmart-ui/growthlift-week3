import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold text-green-400 mb-4 md:mb-0">
          Usman
        </h1>

        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 border-b-2 border-green-400 pb-1"
                : "text-gray-300 hover:text-green-400 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 border-b-2 border-green-400 pb-1"
                : "text-gray-300 hover:text-green-400 transition"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 border-b-2 border-green-400 pb-1"
                : "text-gray-300 hover:text-green-400 transition"
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-green-400 border-b-2 border-green-400 pb-1"
                : "text-gray-300 hover:text-green-400 transition"
            }
          >
            Contact
          </NavLink>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;