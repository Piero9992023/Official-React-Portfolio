import { useState } from 'react'
import { Link } from 'react-scroll'
import '../index.css'

const NavTabs = () => {

    const [click, setClick] = useState(false)
    const closeMenu = () => setClick(false)

    return (
        <nav className= 'navbar'>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to= "Home" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
                </li>
                <li>
                    <Link to= "About" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>About Me</Link>
                </li>
                <li>
                    <Link to= "Projects" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Projects</Link>
                </li>
                <li>
                    <Link to= "Resume" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Resume</Link>
                </li>
                <li>
                    <Link to= "Contact" spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu}>Contact Me</Link>
                </li>
            </ul>
        </nav>
    )
}


export default NavTabs
