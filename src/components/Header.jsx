import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#" className="text-3xl text-gradient">
            DooeX
          </a>
          <Link to="work" smooth={true} className="btn btn-sm flex items-center cursor-pointer">
            Work with me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
