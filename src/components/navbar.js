import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-white shadow-md fixed w-full top-0 z-10">
      <div className="max-w-7xl mx-auto h-20">
        <div className="flex justify-between items-center h-full">
          <div>
            <img className="h-12" src="/logo.png" alt="Mô tả hình ảnh" />
          </div>
          <div className="flex h-full items-center gap-12">
            <Link to="/" className="hover:text-primaryColor font-semibold font-custom">
              <div className="text-primaryColor">HOME</div>
            </Link>
            <Link to="/product" className="hover:text-primaryColor font-semibold font-custom">
              <div>PROJECTS</div>
            </Link>
            <Link to="/product" className="hover:text-primaryColor font-semibold font-custom">
              <div>SERVICES</div>
            </Link>
            <Link to="/product" className="hover:text-primaryColor font-semibold font-custom">
              <div>ABOUT US</div>
            </Link>
            <Link to="/product" className="hover:text-primaryColor font-semibold font-custom">
              <div>CONTACT</div>
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <Link to="/login" className="hover:underline font-normal">
              <div>Login</div>
            </Link>
            <Link to="/register" className="hover:underline font-normal">
              <div>Register</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
