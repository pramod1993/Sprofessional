import React, { useEffect, useState } from 'react'

const Cart = ({cart, setCart, handleChange}) => {
    const [price, setPrice] = useState(0);

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        // handlePrice(); 
    };

    const handlePrice = ()=> {
        let ans = 0;
        cart.map((item) => (
          ans += item.amount * item.price
          ))
        setPrice(ans);
        
    }

    useEffect(()=> {
        handlePrice();
        
    });

  return (
    <>
      
      <article>
      {cart?.map((item) => (
            <div className='grid-cols-3 grid gap-3' key={item.id}>
            <div className='grid-cols-2 grid gap-3'>
                <img src={item.img} alt="" className='w-24' />
                <p>{item.title}</p>
            </div>
            <div className='grid-cols-3 grid gap-3'>
                <button  className='btn btn-primary h-7 !items-center !justify-center !flex' onClick={() => handleChange(item, +1)}>+</button>
                <button className='btn btn-primary h-7 !items-center !justify-center !flex'>{item.amount}</button>
                <button className='btn btn-primary h-7 !items-center !justify-center !flex' onClick={() => handleChange(item, -1)}>-</button>
                {/* <button  className='btn btn-primary h-7 !items-center !justify-center !flex'>+</button>
                <button className='btn btn-primary h-7 !items-center !justify-center !flex'>{item.amount}</button>
                <button className='btn btn-primary h-7 !items-center !justify-center !flex'>-</button> */}
            </div>
            <div className='grid-cols-2 grid gap-3'>
            <span>{item.price}</span>
            <button className='btn btn-primary h-7 !items-center !justify-center !flex' onClick={() => handleRemove(item.id)}>Remove</button>
            {/* <button className='btn btn-primary h-7 !items-center !justify-center !flex'>Remove</button> */}
            </div>
            
        </div> 
        ))}
      <div>
        <span>Total Price</span>
        <span>Rs- {price}</span>
      </div>
      </article>
    </>
  )
}

export default Cart
