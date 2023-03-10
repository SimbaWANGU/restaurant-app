import type { ReactElement } from 'react'
import React from 'react'
import SubHeading from '../../components/SubHeading/SubHeading'
import G from './../../assets/G.png'
import Knife from './../../assets/knife.png'
import './AboutUs.scss'

interface ImageProps {
  data: string
  src: string
  alt: string
}

const Image: React.FC<ImageProps> = ({ data, src, alt }) => {
  return <img data-aos={data} src={src} alt={alt} />
}

const AboutUs = (): ReactElement => (
  <div id='About' className='aboutUs_container'>
    <div className='backgroundLogo'>
      <Image data='zoom-in' src={G} alt='G logo' />
    </div>
    <div data-aos="flip-left" className='foregroundLeft'>
      <SubHeading title='About Us' />
      <p>
        We&apos;re a humble family of people who love seeing you happy.
        Good food and great ambience are part of our philosphy.
        Come dine with us and become a part of the family.
      </p>
      <button>About Us</button>
    </div>
    <div className='knifeLogo'>
      <Image data='fade-up' src={Knife} alt='knife' />
    </div>
    <div data-aos="flip-right" className='foregroundRight'>
      <SubHeading title='Our History' />
      <p>
        Our patron, Simba Wangu, launched the first Gericht store back in 1998.
        He envisioned a space where people from different culturescould come together and share.
      </p>
      <button>History</button>
    </div>
  </div>
)

export default AboutUs
