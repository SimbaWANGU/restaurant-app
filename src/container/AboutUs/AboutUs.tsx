import React, { ReactElement } from 'react'
import SubHeading from '../../components/SubHeading/SubHeading'
import G from './../../assets/G.png'
import Knife from './../../assets/knife.png'
import './AboutUs.scss'

interface ImageProps {
  src: string
  alt: string
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} />
}

const AboutUs = (): ReactElement => (
  <div className='aboutUs_container'>
    <div className='backgroundLogo'>
      <Image src={G} alt='G logo' />
    </div>
    <div className='foregroundLeft'>
      <SubHeading title='About Us' />
      <p></p>
      <button></button>
    </div>
    <div className='knifeLogo'>
      <Image src={Knife} alt='knife' />
    </div>
    <div className='foregroundRight'>
      <SubHeading title='Our History' />
      <p></p>
      <button></button>
    </div>
  </div>
)

export default AboutUs
