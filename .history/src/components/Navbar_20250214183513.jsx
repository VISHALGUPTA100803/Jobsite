//import { Link } from "react-router-dom";
// In React Router, <Link> is used instead of <a> for navigation because it prevents full-page reloads and enables smooth client-side routing.
import { NavLink } from "react-router-dom";
// NavLink is a special version of Link in React Router that provides automatic active styling for navigation links.
// it adds an active class automatically when the link is active.
// isActive is a boolean that checks if the link is currently active.
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={logo} alt="React Jobs" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                React Jobs
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className={linkClass}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/jobs"
                  className={linkClass}
                >
                  Jobs
                </NavLink>
                <NavLink
                  to="/add-job"
                  className={linkClass}
                >
                  Add Job
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
