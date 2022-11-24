import React, {useState, useEffect} from 'react';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)
    return () => {
        window.removeEventListener('resize', changeWidth)
    }
  }, [])

  return (
    <nav>
   <img className="logo" src="https://i.postimg.cc/3NtTL4nK/au1.png" alt="" />
      {(toggleMenu || screenWidth > 500) && (
      <ul className="list">
      <li className="items">HOME</li>
      <li className="items">SERVICES</li>
      <li className="items">CATALOGUE</li>
      <li className="items">PROMOTIONES</li>
      <li className="items">CONTACT</li>
     </ul>
      )}
      <div onClick={toggleNav} className="btn">
      <MenuIcon/>
      </div>
    </nav>
  )
}
export default Navbar;