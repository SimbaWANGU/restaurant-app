import React, { ReactElement } from 'react'
import SubHeading from '../../components/SubHeading/SubHeading'
import welcome from './../../assets/welcome.png'
import './Header.scss'

interface Props {
  src: string
  alt: string
}

const Image: React.FC<Props> = ({ src, alt }) => {
  return <img src={src} alt={alt} />
}

const Header = (): ReactElement => (
  <div className='header_container'>
    <div>
      <SubHeading title='Chase the New Flavour' />
      <h1>The key to Fine Dining</h1>
      <p className='sellPoint'>
        Delivering the highest level of customer service.
        Elegant ambience and upscale table setting.
        Come dine with us at Gericht and experience fine dining like never before.
      </p>
      <button>Book Now</button>
    </div>
    <div>
      <Image src={welcome} alt='welcome' />
    </div>
  </div>
)

export default Header
