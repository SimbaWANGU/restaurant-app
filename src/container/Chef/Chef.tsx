import React, { ReactElement } from 'react'
import SubHeading from '../../components/SubHeading/SubHeading'
import chef from './../../assets/chef.png'
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
      <div>
        <Image src={chef} alt='chef' />
      </div>
      <div>
        <SubHeading title='Chef&apos;s Word' />
        <h2>What We Believe In</h2>
        <p></p>
        <h4>Kevin Luo</h4>
        <p>Chef & Founder</p>
        <h3>Kevin Luo</h3>
      </div>
    </div>
  )
}

export default Chef
