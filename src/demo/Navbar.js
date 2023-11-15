import React from 'react'

const Navbar = ({setShow, size}) => {
  return (
    <div>
      <nav className='container bg-gray-400'>
        <div className="flex justify-between">
          <span className="my_shop" onClick={() => setShow(true)}>
            my shopping
          </span>
          <div className="cart" onClick={() => setShow(false)}>
            <span>shop</span>
            <span>{size}</span>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
