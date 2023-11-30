import { Link, NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import { IoMdNotificationsOutline } from "react-icons/io";


const Navbar = () => {
  const navInfo = (
    <>
      <li className="text-lg uppercase">
        <Link to="/">Home</Link>
      </li>

      <li className="text-lg uppercase">
        <Link to="/login">Login</Link>
      </li>
      <li className="text-lg uppercase">
        <Link to="/register">Register</Link>
      </li>


     <NavLink to='/dashboard/card'>
     <li>
        <button className="btn text-3xl">
        <IoMdNotificationsOutline />
          <h2>0</h2>

          
        </button>
      </li>
     </NavLink>

    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navInfo}
            </ul>
          </div>

          <img
            className="w-44 rounded-full"
            src="https://i.ibb.co/w0cGJmz/5f2c73d9de3d2d7e12298652-logo-BT-500px-p-2600.png"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navInfo}</ul>
        </div>
        <div className="navbar-end">
          <Dropdown></Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
