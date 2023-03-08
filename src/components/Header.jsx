import { Link } from "react-router-dom";
import logo from "../assets/CHX.svg";

const Header = () => {
  return (
    <header className=" bg-gray-300">
      <div className="w-4/5 h-24 mx-auto flex items-center">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <nav className="flex-grow text-right space-x-10">
          <Link to="/" className="hover:text-red-600 cursor-pointer">
            HOME
          </Link>
          <Link to="/about" className="hover:text-red-600 cursor-pointer">
            ABOUT
          </Link>
          <Link to="/contact" className="hover:text-red-600 cursor-pointer">
            CONTACT
          </Link>
          <Link to="/todo" className="hover:text-red-600 cursor-pointer">
            TODO
          </Link>
          <Link to="/blog" className="hover:text-red-600 cursor-pointer">
            BLOG
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
