import React, {useState, useEffect} from 'react'
import './Navbar.css';

export default function Navbar() {
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
   {/*<img className="logo" src="https://i.postimg.cc/DZr3wYcg/imge-auto.jpg" alt="" />*/}
      {(toggleMenu || screenWidth > 500) && (
      <ul className="list">
      <li className="items">HOME</li>
      <li className="items">SERVICES</li>
      <li className="items">CATALOGUE</li>
      <li className="items">CONTACT</li>
    </ul>
      )}

      <button onClick={toggleNav} className="btn"> ≡ </button>
    </nav>
  )
}