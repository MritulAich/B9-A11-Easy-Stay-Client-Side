import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { logOut } = useContext(AuthContext);

  const navLinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='rooms'>Rooms</NavLink></li>
    <li><NavLink to='myBookings'>My Bookings</NavLink></li>
    <li><NavLink to='contact'>Contact Us</NavLink></li>
  </>

  const handleLogOut = () => {
    logOut()
      .then(res => { console.log(res.user) })
      .catch(err => { console.log(err) })
  }

  return (
    <div className="navbar bg-opacity-40 bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <a className="font-bold lg:text-3xl md:text-2xl text-xl">EasyStay</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end lg:flex lg:flex-row md:flex-row flex-col gap-4 ml-5">
        <Link to='/signUp' className="btn btn-primary">Sign Up</Link>
        <Link to='/login' className="btn btn-warning">Login</Link>
        <button onClick={handleLogOut} className="btn btn-neutral">Log out</button>
      </div>
    </div>
  )
};

export default Navbar;