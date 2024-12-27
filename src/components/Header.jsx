import { Link, NavLink } from "react-router-dom";
 import { FaRegCircleUser } from "react-icons/fa6";
import logo from "../assets/logo-2.png";
 import { useContext } from "react";
 import { AuthContext } from "../provider/AuthProvider";
import '../App.css'
const Header = () => {
   const {user,logOut} = useContext(AuthContext)
    const links = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/auth/register">Register</NavLink></li>
    {user?<li><NavLink to="/profile">My Profile</NavLink></li>:""}
    {user?<li><NavLink to="/about">About</NavLink></li>:""}
    </>
    return (
      <div className="pt-5 fixed w-[95%] top-0 z-50 backdrop-filter backdrop-blur-lg bg-opacity-30">
             <div className="navbar bg-base-100 ">
      <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <div className="flex gap-1 text-center items-center justify-center text-teal-600">
      <h2 className="text-sm"><span className="text-4xl ">C</span>areer</h2>
    <img className="w-10 h-10 rounded-full" src={logo} alt="" />
    <h2 className="text-sm"><span className="text-4xl ">C</span>ounseling</h2>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
     <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  
  <div className="navbar-end space-x-2">
    {
      user && user?.email?(<div className="text-center space-x-2 image">
        
        <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
        <p className="name">{user.displayName}</p>
        
      </div>):(<p className="text-3xl text-teal-400"><FaRegCircleUser /></p>)
    }
    
    {
      user && user?.email? (<button onClick={logOut} className="btn bg-teal-400 text-white">Login Out</button>):
      (<Link to="/auth/login" className="btn bg-teal-400 text-white">Login</Link>)
    }
    
   
  </div>
  
        </div>
        </div>
    );
};

export default Header;