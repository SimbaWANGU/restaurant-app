import React, { ReactElement, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import gericht from './../../assets/gericht.png'
import './Navbar.scss'

interface Props {
  src: string
  alt: string
}

const Image: React.FC<Props> = ({ src, alt }) => {
  return <img src={src} alt={alt} />
}

const Navbar = (): ReactElement => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const handleOpen = (): void => {
    setToggleMenu(true)
  }
  const handleClose = (): void => {
    setToggleMenu(false)
  }

  console.log(toggleMenu)

  return (
    <nav className='app__navbar'>
      <div>
        <Image src={gericht} alt="An image" />
      </div>
      <ul>
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#home'>About</a>
        </li>
        <li>
          <a href='#home'>Menu</a>
        </li>
        <li>
          <a href='#home'>Awards</a>
        </li>
        <li>
          <a href='#home'>Contacts</a>
        </li>
      </ul>
      <div className='login'>
        <a href='#login'>Login / Register</a>
      </div>
      <div className='smallScreen'>
        <GiHamburgerMenu className="hamburger" color='#ffffff' fontSize={27} onClick={handleOpen} />
        {toggleMenu
          ? <div>
              <MdOutlineRestaurantMenu fontSize={27} className='overlay' onClick={handleClose}/>
              <ul>
                <li>
                  <a href='#home'>Home</a>
                </li>
                <li>
                  <a href='#home'>About</a>
                </li>
                <li>
                  <a href='#home'>Menu</a>
                </li>
                <li>
                  <a href='#home'>Awards</a>
                </li>
                <li>
                  <a href='#home'>Contacts</a>
                </li>
                <li className='loginMobile'>
                  <a href='#home'>Contacts</a>
                </li>
              </ul>
            </div>
          : null
         }
      </div>
    </nav>
  )
}

export default Navbar
