import Image from "next/image";
import logoImage from "../assets/images/logosaas.png";
import MenuIcon from "../assets/icons/menu.svg";

function Navbar() {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-gradient-to-r from-[#F87BFF] via-[#FB92CF] to-[#2FD8FE] blur-md"></div>
            <Image
              src={logoImage}
              alt="logoImage"
              className="w-10 h-10 relative"
            />
          </div>
          <div className="inline-flex cursor-pointer md:hidden border border-white border-opacity-30 w-10 h-10 items-center justify-center rounded-lg">
            <MenuIcon className="text-white" />
          </div>
          <nav className="sm:flex hidden gap-6 items-center">
            <a
              href="#"
              className="text-white text-opacity-30 hover:text-opacity-100 transition"
            >
              About
            </a>
            <a
              href="#"
              className="text-white text-opacity-30 hover:text-opacity-100 transition"
            >
              Features
            </a>
            <a
              href="#"
              className="text-white text-opacity-30 hover:text-opacity-100 transition"
            >
              Updates
            </a>
            <a
              href="#"
              className="text-white text-opacity-30 hover:text-opacity-100 transition"
            >
              Help
            </a>
            <a
              href="#"
              className="text-white text-opacity-30 hover:text-opacity-100 transition"
            >
              Customers
            </a>
            <button className="bg-white bg-opacity-90 hover:bg-opacity-100 text-black rounded-lg py-2 px-4 transition active:scale-95">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
