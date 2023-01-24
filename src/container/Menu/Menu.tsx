import React, { ReactElement } from 'react'
import SubHeading from '../../components/SubHeading/SubHeading'
import menu from '../../assets/menu.png'
import './Menu.scss'
import MenuItem from '../../components/Menuitem/MenuItem'
import { wines, cocktails } from '../../constants/data'

interface ImageProps {
  src: string
  alt: string
}

interface Wine {
  title: string
  price: string
  tags: string
}

interface Cocktails {
  title: string
  price: string
  tags: string
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} />
}

const Menu = (): ReactElement => {
  return (
    <div id='Menu' className='menu_container'>
      <SubHeading title='Menu That Fits You Palatte' />
      <h2>Today&apos;s Special</h2>
      <div className='menu-section'>
        <div data-aos="flip-right" className='wine-section'>
          <h3>Wine & Beer</h3>
          <div>
            {wines.map((wine: Wine, index: number) => (
              <MenuItem key={index} title={wine.title} tags={wine.tags} price={wine.price} />
            ))}
          </div>
        </div>
        <div data-aos="zoom-in">
          <Image src={menu} alt='mixer' />
        </div>
        <div data-aos="flip-left" className='cocktail-section'>
          <h3>Cocktails</h3>
          <div>
            {cocktails.map((cocktail: Cocktails, index: number) => (
              <MenuItem key={index} title={cocktail.title} tags={cocktail.tags} price={cocktail.price} />
            ))}
          </div>
        </div>
      </div>
      <button data-aos="zoom-in">View More</button>
    </div>
  )
}

export default Menu
