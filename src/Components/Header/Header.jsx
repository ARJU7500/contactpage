import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { id: 1, text: "Personal", link: "#" },
    { id: 2, text: "Business", link: "#" },
    { id: 3, text: "Developer", link: "#" },
    { id: 4, text: "Help", link: "#" },
  ];

  return (
    <header className="sticky z-50 top-0 px-4 bg-white md:px-4 w-full">
      <nav className="flex flex-wrap justify-between items-center h-[70px] lg:px-10">
        <div className="flex justify-start items-center">
          <div>
            <Link to="/">
              <img
                src="./image/header/headerLogo.png"
                alt="Logo"
                className="h-10 md:h-12"
              />
            </Link>
          </div>
          <ul className="hidden md:flex md:flex-wrap md:justify-start md:items-start text-[12px] md:text-[14px] lg:text-lg">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="py-2 pr-4 pl-3 duration-200 cursor-pointer text-[#002f87]"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:block">
          <Link
            to="#"
            className="text-[#002f87] border-solid border-2 border-[#002f87] hover:bg-[#002f87] hover:text-white font-medium rounded-2xl text-sm p-2 px-5 mr-2"
          >
            Log In
          </Link>
          <Link
            to="#"
            className="text-white bg-[#002f87] hover:bg-white hover:text-[#002f87] hover: border-solid border-2 border-[#002f87] font-medium rounded-2xl text-sm p-2 px-5"
          >
            Sign Up
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="border-0">
            <h1 className="text-4xl text-[#002f87]" id="icon">
              &#8801;
            </h1>
          </button>
        </div>
      </nav>
      <div id="responsive" className={isMenuOpen ? "block" : "hidden"}>
        <ul className="bg-[#002f87] h-[90vh] py-2 text-center">
          {navItems.map((item) => (
            <>
              <button key={item.id} onClick={toggleMenu} className="border-0 ">
                <a
                  href={item.link}
                  className=" p-3 font-bold cursor-pointer text-white flex flex-col"
                >
                  {item.text}
                </a>
              </button>
              <hr className="h-0.5 bg-white" />
            </>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
