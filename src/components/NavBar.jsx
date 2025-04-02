import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white text-3xl flex justify-between items-center py-6 px-10 md:px-20 lg:px-40 fixed top-0 z-50">
      <div className="flex items-center space-x-10">
        {/* Logo */}
        <a href="#" className="text-3xl font-bold gap-5">
          Aditya
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-5">
          <a
            href="#intro"
            className="hover:text-red-400 md:text-1.5xl xl:text-2xl sm:text-1xl"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-red-400 md:text-1.5xl xl:text-2xl sm:text-1xl"
          >
            About
          </a>

          <a
            href="#projects"
            className="hover:text-red-400 md:text-2xl xl:text-1.5xl sm:text-1xl"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-red-400 md:text-1.5xl xl:text-2xl sm:text-1xl"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Social Links */}
      <div className="hidden md:flex space-x-4">
        <a
          href="mailto:sehrawataditya22@gmail.com"
          className="hover:text-red-400"
        >
          <EmailIcon fontSize="medium" />
        </a>
        <a
          href="https://github.com/adisehrawat"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-400"
        >
          <GitHubIcon fontSize="medium" />
        </a>
        <a
          href="https://www.linkedin.com/in/adityasehrawattt/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-400"
        >
          <LinkedInIcon fontSize="medium" />
        </a>
      </div>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <CloseIcon fontSize="large" />
        ) : (
          <MenuIcon fontSize="large" />
        )}
      </button>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black opacity-95 flex flex-col items-center py-6 space-y-6 text-2xl md:hidden">
          <a
            href="#intro"
            className="hover:text-red-400"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-red-400"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#experience"
            className="hover:text-red-400"
            onClick={() => setMenuOpen(false)}
          >
            Experience
          </a>
          <a
            href="#projects"
            className="hover:text-red-400"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>

          {/* Mobile Social Links */}
          <div className="flex space-x-4 pt-4">
            <a
              href="mailto:sehrawataditya22@gmail.com"
              className="hover:text-red-400"
            >
              <EmailIcon fontSize="large" />
            </a>
            <a
              href="https://github.com/adisehrawat"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400"
            >
              <GitHubIcon fontSize="large" />
            </a>
            <a
              href="https://www.linkedin.com/in/adisehrawat"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400"
            >
              <LinkedInIcon fontSize="large" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
