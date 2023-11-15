import React from 'react'

const Cards = ({ item, handleClick }) => {
    const {title, auther, price, img} = item;
  return (
    <> 
        <div>
            <div>
                <img src={img} alt="images" className='w-24' />
            </div>
            <p>{title}</p>
            <p>{auther}</p>
            <p>Price - {price}</p>
            <button className='btn btn-primary' onClick={() => handleClick(item)}>Add To Card</button>
        </div> 
    </>
  )
}

export default Cards
