import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="bg-blue-400 border-black border flex fixed top-0 z-10 shadow-lg w-full">
      <div className="mt-4 text-2xl font-bold">Sai Vineeth School</div>

      <ul className="md:flex ml-44 text-xl justify-evenly font-semibold hidden">
        <Link to="home" smooth duration={500}>
          <li className="m-4 hover:bg-red-400 rounded-lg hover:cursor-pointer">
            Home
          </li>
        </Link>
        <Link to="about" smooth duration={500}>
          <li className="m-4 hover:bg-red-400 rounded-lg hover:cursor-pointer">
            About Us
          </li>
        </Link>
        <Link to="facilities" smooth duration={500}>
          <li className="m-4 hover:bg-red-400 rounded-lg hover:cursor-pointer">
            Facilities
          </li>
        </Link>
        <Link to="staff" smooth duration={500}>
          <li className="m-4 hover:bg-red-400 rounded-lg hover:cursor-pointer">
            Our Staff
          </li>
        </Link>
        <Link to="academics" smooth duration={500}>
          <li className="m-4 hover:bg-red-400 rounded-lg hover:cursor-pointer">
            Academics
          </li>
        </Link>
        <Link to="gallery" smooth duration={500}>
          <li className="m-4 hover:bg-red-400 rounded-lg hover:cursor-pointer">
            Our Gallery
          </li>
        </Link>
        <Link to="updates" smooth duration={500}>
          <li className="m-4 hover:bg-red-400 rounded-lg hover:cursor-pointer">
            Latest Updates
          </li>
        </Link>
        <Link to="contact" smooth duration={500}>
          <li className="m-4 hover:bg-red-400 rounded-lg hover:cursor-pointer">
            Contact Us
          </li>
        </Link>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 md:hidden ml-40 mt-4"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-t from-black to-gray-800">
          {/* Place your navigation links here */}
        </ul>
      )}
    </div>
  );
};

export default Header;
