import React, { useEffect , useState } from 'react'
import { Link } from 'react-scroll'
import '../index.css'

const NavTabs = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen((prev) => !prev);
    };
  
    // Close the menu when the screen size becomes larger
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 768) {
          setIsMenuOpen(false);
        }
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
      <nav className="bg-white dark:bg-gray-950 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
          <h2 className="text-white text-2xl font-bold">Piero Rodriguez</h2>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          <ul
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } mt-5 mr-5 font-bold space-y-2 md:space-y-0 md:space-x-8 md:flex md:w-auto md:absolute md:top-0 md:right-0`}
          >
            <li className="nav-item cursor-pointer">
              <Link
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                to="home"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className='nav-item cursor-pointer'>
                <Link onClick={() => setIsMenuOpen(false)} className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to= "about" spy={true} smooth={true} offset={-200} duration={500} >About Me</Link>
            </li>
            <li className='nav-item cursor-pointer'>
                <Link onClick={() => setIsMenuOpen(false)} className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to= "projects" spy={true} smooth={true} offset={-150} duration={500}>Projects</Link>
            </li>
            <li className='nav-item cursor-pointer'>
                <Link onClick={() => setIsMenuOpen(false)} className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to= "resume" spy={true} smooth={true} offset={-120} duration={500} >Resume</Link>
            </li>
            <li  className='nav-item cursor-pointer'>
                <Link onClick={() => setIsMenuOpen(false)} className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to= "contact" spy={true} smooth={true} offset={-110} duration={500}>Contact Me</Link>
            </li>
            </ul>
      </div>
    </nav>
  );
};


export default NavTabs

