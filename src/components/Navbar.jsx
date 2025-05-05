// Updated Navbar component with Resume button
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants/';
import { logo, menu, close } from '../assets/';
import resumePDF from '../assets/resume.pdf'; // Import your resume file

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleDownload = () => {
    // Using the Fetch API to get the PDF file
    fetch(resumePDF).then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Frank_Mirando_Resume.pdf'; // You can change the filename here
        alink.click();
      })
    })
  }

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img src={logo} alt="logo" className="w-9 h-9 object-contain"/>
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Frank Mirando &nbsp;
            <span className="sm:block hidden">
              |&nbsp; Software Engineer
            </span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-10">
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? "text-white"
                    : "text-secondary"}
                    hover:text-white text-[18px] font-medium cursor-pointer
                    `}
                  onClick={() => setActive(link.title)}
                >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>

          {/* Resume Button - Desktop */}
          <button
            onClick={handleDownload}
            className="hidden sm:flex bg-transparent hover:bg-[#915EFF] text-white font-medium py-2 px-4 border border-[#915EFF] hover:border-transparent rounded-lg transition-all duration-300"
          >
            Resume
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center gap-4">
          {/* Resume Button - Mobile */}
          <button
            onClick={handleDownload}
            className="flex sm:hidden bg-transparent text-white text-sm font-medium py-1 px-2 border border-[#915EFF] rounded-md"
          >
            Resume
          </button>

          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-white"
                      : "text-secondary"}
                      font-poppins font-medium cursor-pointer text-[16px]
                      `}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              {/* Resume Link - Mobile */}
              <li
                className="text-secondary font-poppins font-medium cursor-pointer text-[16px] hover:text-white"
                onClick={() => {
                  setToggle(!toggle);
                  handleDownload();
                }}
              >
                Resume
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar