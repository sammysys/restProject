import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import {MdOutlineRestaurantMenu} from "react-icons/md";
import  images  from '../../constants/images';
import './Navbar.css';
const Navbar = () => {

    const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <img src= {images.gericht} alt='app logo' />

        </div>
        <ul className='app__navbar-links'>
            <li className='p__opensans'><a href='#Home'>Home</a></li>
            <li className='p__opensans'><a href='#About'>About</a></li>
            <li className='p__opensans'><a href='#Menu'>Menu</a></li>
            <li className='p__opensans'><a href='#Award'>#Award</a></li>
            <li className='p__opensans'><a href='#Contact'>Contact</a></li>
        </ul>
        <div className='app__navbar-login'>
            <a href='#login' className='p__opensans'>Log In / Register</a>
            <div />
            <a href='/' className='p__opensans'>Book Table</a>
        </div>
        <div className='app__navbar-smallscreen'>
            
            <GiHamburgerMenu color='#fff' fontsize='27' onclick={() => setToggleMenu(true)}/>
            {toggleMenu && (
                <div className='app__navbar-smallscreen_overlay flex__center slid-bottom'>
                <MdOutlineRestaurantMenu fontsize='27' className="overlay__close" onclick={() => setToggleMenu(false)} />
                <ul className='app__navbar-smallscreen-links'>
                    <li><a href='#Home' onClick={() => setToggleMenu(false)}>Home</a></li>
                    <li><a href='#About' onClick={() => setToggleMenu(false)}>About</a></li>
                    <li><a href='#Menu' onClick={() => setToggleMenu(false)}>Menu</a></li>
                    <li><a href='#Award' onClick={() => setToggleMenu(false)}>#Award</a></li>
                    <li><a href='#Contact' onClick={() => setToggleMenu(false)}>Contact</a></li>
                </ul>
            </div>
                )

            }
            
            
            
            
        </div>
    </nav>
  )
}

export default Navbar