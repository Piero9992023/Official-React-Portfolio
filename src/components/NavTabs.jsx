import { Link } from 'react-scroll'
import '../index.css'

const NavTabs = () => {


    return (
        <nav className= 'bg-white dark:bg-gray-950 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600'>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <h2 className='text-white'>Piero Rodriguez</h2>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className= "flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li className='cursor-pointer'>
                    <Link className='block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500' aria-current="page" to= "Home" spy={true} smooth={true} offset={-100} duration={500} >Home</Link>
                </li>
                <li className='cursor-pointer'>
                    <Link className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to= "About" spy={true} smooth={true} offset={-100} duration={500} >About Me</Link>
                </li>
                <li className='cursor-pointer'>
                    <Link className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to= "Projects" spy={true} smooth={true} offset={-100} duration={500}>Projects</Link>
                </li>
                <li className='cursor-pointer'>
                    <Link className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to= "Resume" spy={true} smooth={true} offset={-100} duration={500} >Resume</Link>
                </li>
                <li  className='cursor-pointer'>
                    <Link className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to= "Contact" spy={true} smooth={true} offset={-150} duration={500}>Contact Me</Link>
                </li>
            </ul>
            </div>
            </div>
        </nav>
    )
}


export default NavTabs

