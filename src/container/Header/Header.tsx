import React, { ReactElement } from 'react'
import SubHeading from '../../components/SubHeading/SubHeading'
import welcome from './../../assets/welcome.png'
import './Header.scss'

interface Props {
  src: string
  alt: string
}

interface HeaderProps {
  handleOpenReservationModal: any
  handleOpenAuthenticationModal: any
}

const Image: React.FC<Props> = ({ src, alt }) => {
  return <img src={src} alt={alt} />
}

const Header: React.FC<HeaderProps> = ({ handleOpenReservationModal, handleOpenAuthenticationModal }): ReactElement => {
  const handleClick = (event: React.MouseEvent): void => {
    const user = JSON.parse(localStorage.getItem('gericht-user') as string)
    if (user === null) {
      handleOpenAuthenticationModal(event)
    } else {
      handleOpenReservationModal(event)
    }
  }

  return (
    <div id='Home' className='header_container'>
      <div data-aos="fade-right">
        <SubHeading title='Chase the New Flavour' />
        <h1>The key to Fine Dining</h1>
        <p className='sellPoint'>
          Delivering the highest level of customer service.
          Elegant ambience and upscale table setting.
          Come dine with us at Gericht and experience fine dining like never before.
        </p>
        <button onClick={(e) => { handleClick(e) }}>Book Now</button>
      </div>
      <div data-aos="fade-left">
        <Image src={welcome} alt='welcome' />
      </div>
    </div>
  )
}

export default Header
