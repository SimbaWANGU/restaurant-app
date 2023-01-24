import type { ReactElement } from 'react'
import React from 'react'
import SubHeading from '../../components/SubHeading/SubHeading'
import chef from './../../assets/chef.png'
import sign from './../../assets/sign.png'
import './Chef.scss'

interface ImageProps {
  src: string
  alt: string
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} />
}

const Chef = (): ReactElement => {
  return (
    <div className='chef_container'>
      <div data-aos="flip-left" className='image_container'>
        <Image src={chef} alt='chef' />
      </div>
      <div data-aos="zoom-in-left">
        <SubHeading title='Chef&apos;s Word' />
        <h2>What We Believe In</h2>
        <p>
          Without you, we would never exist. For this reason, we are dedicated to make your experience wholsome so that you can keep coming back and that we may have a job!
        </p>
        <h4>Kevin Luo</h4>
        <p>Chef & Founder</p>
        <Image src={sign} alt='signature' />
      </div>
    </div>
  )
}

export default Chef
