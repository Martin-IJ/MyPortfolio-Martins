import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="sticky z-50 inset-x-0 top-0 py-5 bg-site">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="/">
            <h2 className="h2 text-[26px] font-bold font-primary mb-0">
              <span className="text-gradient">Martin</span>
              <br /> Ohez
            </h2>
          </a>
          <Link to="contact">
            <button className="btn btn-sm">Work with me</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
