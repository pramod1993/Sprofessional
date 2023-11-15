import React, { useState } from 'react' 
import { Table } from 'react-bootstrap'

const CartItem = ({item}) => {
    const [count, setCount] = useState(0);
  const handleClick = () =>{
      setCount(count - 1)
  }
  const handleClickpuls = () =>{
      setCount(count + 1)
  } 
  const {img, hoverimg, amount ,discount , title} = item; 
  return (
    <>
      <div className="container">
      <div>
           <Table>              
            <tbody>
              <tr className='items-center w-full'>
                <td>
                  <img src={img} alt="cartimg" className='w-14' /> 
                </td>
                <td>{title}</td>
                <td>{amount}</td>
                <td>
                  <div className="mb-3 !grid-cols-3 grid  border">
                      <button className='btn btn-primary !rounded-none' onClick={handleClick}>-</button>
                      
                      <div className='text-center justify-center flex items-center'>{count}</div>
                      <button className='btn btn-success !rounded-none' onClick={handleClickpuls}>+</button>
                  </div>
                </td> 
                <td><button>Remove</button></td>
              </tr>                         
            </tbody>
           </Table>
        </div>
      </div>
    </>
  )
}

export default CartItem
