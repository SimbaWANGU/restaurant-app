import React from 'react'

interface Menu {
  title: string
  tags: string
  price: string
}

const MenuItem: React.FC<Menu> = ({ title, tags, price }) => {
  return (
    <div className='menuItem'>
      <div>
        <p>{title}</p>
        <div />
        <p>{price}</p>
      </div>
      <div>
        <p>{tags}</p>
      </div>
    </div>
  )
}

export default MenuItem
