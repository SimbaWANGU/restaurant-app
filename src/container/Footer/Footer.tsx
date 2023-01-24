import type { ReactElement } from 'react'
import React from 'react'
import { MdRoom } from 'react-icons/md'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import gericht from './../../assets/gericht.png'
import './Footer.scss'

interface Props {
  src: string
  alt: string
}

const Image: React.FC<Props> = ({ src, alt }) => {
  return <img src={src} alt={alt} />
}

const Footer = (): ReactElement => {
  return (
    <div id='Contacts' className='footer-container'>
      <div className='logo-section'>
        <a href='#Home'>
          <Image src={gericht} alt='logo' />
        </a>
      </div>
      <div className='contacts-details'>
        <div className='location-details'>
          <MdRoom color='#fff' />
          <p>Gericht Restaurant, Riverside Drive</p>
          <p>Nairobi, Kenya</p>
        </div>
        <div className='contact-details'>
          <a
            href='https://github.com/SimbaWANGU'
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className='icon' />
          </a>
          <a
            href='https://twitter.com/simb_erella'
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon className='icon' />
          </a>
          <a
            href='https://linkedin.com/in/simba-wangulu/'
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className='icon' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
