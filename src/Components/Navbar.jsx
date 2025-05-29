import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/image.png";
import { AuthContext } from "../Providers/AuthProviders";

const Navbar = () => {

   const { user, logout ,setUser} = useContext(AuthContext);
  console.log(user)

  
  const navLinks = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/allTouristSpot'>All Tourists Spot</NavLink>
      </li>
      <li>
        <NavLink to='/addTouristSpot'>Add Tourists Spot</NavLink>
      </li>
      <li>
        <NavLink to={`/myList/${user.email}`}>My List</NavLink>
      </li>
    </>
  );

 

  const handleLogOut = () => {
    logout()
      .then(() => {
        setUser(null)
      })
      .catch((error) => {
        console.log(error);
      });
  };



  return (
    <div className="navbar bg-base-100  ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-12 " />
          <Link className=" text-4xl font-bold eb-garamond">Traveo</Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-lg px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end space-x-4">
        {user ? <>
        <img src={user?.photoURL}  className={`w-12 rounded-full `} alt="" />
        <p title={user.displayName}>{user?.email}</p>
          <button onClick={handleLogOut} className="btn btn-error text-lg">
            Logout
          </button>
        </>
          
        : (
          <>
            <Link to="/login">
              <button className="btn btn-secondary text-lg">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn btn-primary text-lg">Register</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
