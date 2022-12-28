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
          <a href='#Home'>Home</a>
        </li>
        <li>
          <a href='#About'>About</a>
        </li>
        <li>
          <a href='#Menu'>Menu</a>
        </li>
        <li>
          <a href='#Awards'>Awards</a>
        </li>
        <li>
          <a href='#Contacts'>Contacts</a>
        </li>
      </ul>
      <div className='login'>
        <a href='/authenticate'>Login / Register</a>
      </div>
      <div className='smallScreen'>
        <GiHamburgerMenu className="hamburger" color='#ffffff' fontSize={27} onClick={handleOpen} />
        {toggleMenu
          ? <div>
              <MdOutlineRestaurantMenu fontSize={27} className='overlay' onClick={handleClose}/>
              <ul>
                <li>
                  <a href='#Home'>Home</a>
                </li>
                <li>
                  <a href='#About'>About</a>
                </li>
                <li>
                  <a href='#Menu'>Menu</a>
                </li>
                <li>
                  <a href='#Awards'>Awards</a>
                </li>
                <li>
                  <a href='#Contacts'>Contacts</a>
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
