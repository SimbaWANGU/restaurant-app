import type { ReactElement } from 'react'
import React from 'react'
import spoon from './../../assets/spoon.png'

interface Props {
  src: string
  alt: string
}

interface Title {
  title: string
}

const Image: React.FC<Props> = ({ src, alt }) => {
  return <img src={src} alt={alt} />
}

const SubHeading: React.FC<Title> = ({ title }): ReactElement => (
  <div className='subheading_container'>
    <p>{title}</p>
    <Image src={spoon} alt='spoon' />
  </div>
)

export default SubHeading
