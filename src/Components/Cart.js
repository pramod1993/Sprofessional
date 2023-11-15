import React from 'react'  
import { Table } from 'react-bootstrap'
const Cart = () => {
   
  return (
    <>
      <div className="container">
         <h4 className="text-xl font-bold">
          Cart page
        </h4>
        <div>
        <Table>
            <thead>
            <tr>
            <th>PRODUCT</th>
            <th></th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>SUBTOTAL</th>
            <th></th>
            </tr>
            </thead>
        </Table>
      
    </div>
        
        
      </div>
    </>
  )
}

export default Cart
