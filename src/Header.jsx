import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
  const [nav, setNav] = useState(false);
const links = [
  {
    id: 1,
    link: "home",
    name: "Home",
  },
  {
    id: 2,
    link: "about",
    name: "About Us",
  },
  {
    id: 3,
    link: "facilities",
    name: "Facilities",
  },
  {
    id: 4,
    link: "staff",
    name: "Our Staff",
  },
  {
    id: 5,
    link: "academics",
    name: "Academics",
  },
  {
    id: 6,
    link: "gallery",
    name: "Gallery",
  },
  {
    id: 7,
    link: "update",
    name: "Latest Updates",
  },
  {
    id: 8,
    link: "contact",
    name: "Contact Us",
  },
];


  return (
    <div className="bg-purple-400 border-black border flex fixed top-0 z-10 shadow-md w-full shadow-black">
      <div className="mt-5 text-2xl font-bold" >
        Sai Vineeth School
      </div>

      <ul className="md:flex ml-44 text-xl justify-evenly font-semibold hidden">
        {links.map((link) => (
          <li
            key={link.id}
            className="m-4 hover:bg-cyan-400 rounded-lg hover:cursor-pointer p-2"
          >
            <Link to={link.link} smooth duration={500}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 md:hidden ml-auto mt-4"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          className="flex flex-col justify-center items-center 
    absolute top-0 left-0 w-full h-screen bg-gradient-to-t
    from-black to-gray-800 "
        >
          {links.map((link) => (
            <li
              key={link.id}
              className="py-4 cursor-pointer  
      font-medium text-gray-500 hover:scale-110 duration-200  text-4xl hover:bg-cyan-300"
            >
              <Link
                to={link.link}
                onClick={() => setNav(!nav)}
                smooth
                duration={500}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
