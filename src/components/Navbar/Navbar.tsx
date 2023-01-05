import React, { ReactElement, useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import gericht from './../../assets/gericht.png'
import './Navbar.scss'

interface Props {
  src: string
  alt: string
}

interface NavProps {
  handleOpenAuthenticationModal: any
  handleOpenMyReservationsModal: any
  setIsMyReservationModalOpen: any
}

const Image: React.FC<Props> = ({ src, alt }) => {
  return <img src={src} alt={alt} />
}

const Navbar: React.FC<NavProps> = ({ handleOpenAuthenticationModal, handleOpenMyReservationsModal, setIsMyReservationModalOpen }): ReactElement => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [userName, setUserName] = useState('')

  useEffect(() => {
    const data = localStorage.getItem('gericht-user')
    if (typeof data === 'string') {
      const loggedInUser = JSON.parse(data)
      setUserName(loggedInUser.username)
    }
  }, [])

  const handleOpen = (): void => {
    setToggleMenu(true)
  }
  const handleClose = (): void => {
    setToggleMenu(false)
  }

  // add more effects
  const handleLogout = (): void => {
    localStorage.removeItem('gericht-user')
    setTimeout(() => {
      window.location.reload()
    }, 2000)
  }

  const handleMyReservationsClickMobile = (): void => {
    setIsMyReservationModalOpen(true)
    setToggleMenu(false)
  }

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
          <a href='#' onClick={handleOpenMyReservationsModal}>My Reservations</a>
        </li>
        <li>
          <a href='#Contacts'>Contacts</a>
        </li>
      </ul>
      <div className='login'>
        {(userName === '')
          ? <a href='#' onClick={handleOpenAuthenticationModal}>Login / Register</a>
          : <>
            <a href='#'>{userName}</a>
            <a href='#' onClick={handleLogout}>Logout</a>
          </>
        }
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
                  <a href='#' onClick={
                    handleMyReservationsClickMobile
                  }
                  >My Reservations</a>
                </li>
                <li>
                  <a href='#Contacts'>Contacts</a>
                </li>
                <li className='loginMobile'>
                {(userName === '')
                  ? <a href='#' onClick={handleOpenAuthenticationModal}>Login / Register</a>
                  : <a href='#' onClick={handleLogout}>Logout</a>
                }
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
