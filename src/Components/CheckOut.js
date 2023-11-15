import React from 'react'
import Nav from 'react-bootstrap/Nav'; 
import Tab from 'react-bootstrap/Tab';
import {BiHelpCircle} from 'react-icons/bi';
import caseon from '../img/cards_all.svg';
const CheckOut = () => {
  return (
    <>
      <div className="container mb-3">
        <h2 className="text-xl font-bold">Sign In or Create an Account</h2>
        
        <div className='grid-cols-3 grid gap-3'>
            <div>
                <div className='bg-slate-700 text-white mb-2'>
                    <p className='m-0 p-2 text-xl font-semibold'>1. User Info and Billing address</p>
                </div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first"> 
                    <Nav variant="pills" className="!grid-cols-2 !grid gap-2 bg-gray-200">
                    <Nav.Item className=' text-center'>
                        <Nav.Link eventKey="first" className=' !rounded-none'>Register</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='text-center'>
                        <Nav.Link eventKey="second" className=' !rounded-none'>Login</Nav.Link>
                        </Nav.Item>
                    </Nav> 
                    <Tab.Content>
                            <Tab.Pane eventKey="first">
                            <form action="" className='grid gap-3'>
                                <input type="Email" name='email' placeholder='Email' className='border px-3 py-2' />
                                <input type="password" name='password' placeholder='Password' className='border px-3 py-2' />
                                <div className='grid-cols-2 grid gap-3'>
                                    <input type="text" name='name' placeholder='First Name' className='border px-3 py-2' />
                                    <input type="text" name='name' placeholder='Last Name' className='border px-3 py-2' />
                                </div>
                                <input type="text" name='text' placeholder='Full Address'  className='border px-3 py-2'/>
                                <div className='grid-cols-2 grid gap-3'>
                                    <input type="text" name='name' placeholder='City '  className='border px-3 py-2'/>
                                    <input type="text" name='name' placeholder='Postal Code'  className='border px-3 py-2'/>
                                </div>
                                <select name="contry"  className='border px-3 py-2'>
                                    <option value="1">contry</option>
                                    <option value="1">contry</option>
                                    <option value="1">contry</option>
                                    <option value="1">contry</option>
                                    <option value="1">contry</option>
                                    <option value="1">contry</option>
                                </select>
                                <input type="text" name='Number' placeholder='Mobile Number' className='border px-3 py-2' />
                                 
                            </form>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <div className='grid gap-3'>
                                    <div className='bg-gray-400 px-3 py-2'>
                                    Login con Facebook
                                    </div>
                                    <div className='bg-gray-400 px-3 py-2'>
                                    Login con Google
                                    </div>
                                    <form action="" className='grid gap-3'>
                                        <input type="Email" name='Email' placeholder='Email'   className='border px-3 py-2'/>
                                        <input type="Password" name='Password' placeholder='Password'   className='border px-3 py-2'/>
                                        <label htmlFor="">
                                            <input type="checkbox" name="check"/> Remember me
                                        </label>
                                        <input type="submit" value="Login" className='btn btn-primary' />
                                    </form>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>    
                </Tab.Container>
            </div>
            <div>
                <div className='bg-slate-700 text-white mb-2'>
                    <p className='m-0 p-2 text-xl font-semibold'>2. Payment and Shipping</p>
                </div> 
                <div>
                    <form action="" className='grid gap-3'>
                        <ul className='m-0 p-0'>
                            <li className='flex justify-between items-center px-2 border-b py-2'>
                                <input type="radio" name="radio" id='Credit' value='1' checked/>
                                <label htmlFor="Credit">Credit Card</label>
                                <a href="#"><BiHelpCircle/></a>
                            </li>
                            <li className='flex justify-between items-center px-2 border-b py-2'>
                             <input type="radio" name="radio" id='Paypal' value='2'/>
                                <label htmlFor="Paypal">
                                     Paypal
                                </label>
                                <a href="#"><BiHelpCircle/></a>
                            </li>
                            <li className='flex justify-between items-center px-2 border-b py-2'>
                                <input type="radio" name="radio" id='Cash' value='3'/>
                                <label htmlFor="Cash">
                                     Cash on delivery
                                </label>
                                <a href="#"><BiHelpCircle/></a>
                            </li>
                            <li className='flex justify-between items-center px-2 border-b py-2'>
                                <input type="radio" name="radio" id='Bank' value='4'/>
                                <label htmlFor="Bank">
                                     Bank Transfer
                                </label>
                                <a href="#"><BiHelpCircle/></a>
                            </li>
                            <li className='mt-2'>
                                <img src={caseon} alt="caseon" />
                            </li>
                        </ul>
                        </form>
                        <p className='m-0 p-0'>Sensibus reformidans interpretaris sit ne, nec errem nostrum et, te nec meliore philosophia. At vix quidam periculis. Solet tritani ad pri, no iisque definitiones sea.</p>
                        <p className='m-0 p-0'><strong>Shipping Method</strong></p>
                        <form action="">
                        <ul className='m-0 p-0'>
                            <li className='flex justify-between items-center px-2 border-b py-2'>
                                <label htmlFor="radio">
                                    <input type="radio" name="radio"  value='1' checked/> Standard shipping
                                </label>
                                <a href="#"><BiHelpCircle/></a>
                            </li>
                            <li className='flex justify-between items-center px-2 border-b py-2'>
                                <label htmlFor="radio">
                                    <input type="radio" name="radio" value='2' checked/> Express shipping
                                </label>
                                <a href="#"><BiHelpCircle/></a>
                            </li>
                        </ul>
                    </form>
                </div> 
            </div>
            <div>
                <div className='bg-slate-700 text-white mb-2'>
                    <p className='m-0 p-2 text-xl font-semibold'>3. Order Summary</p>
                </div>
                <div className='bg-slate-100 p-2'>
                    <ul className='m-0 p-0'>
                        <li className='flex justify-between items-center px-2 py-2'>
                            1x Armor Air X Fear
                            <span><strong>$145.00</strong></span>
                        </li>
                        <li className='flex justify-between items-center px-2 border-b py-2'>
                            2x Armor Air Zoom Alpha
                            <span><strong>$115.00</strong></span>
                        </li>
                        <li className='flex justify-between items-center px-2 py-2'>
                            Subtotal
                            <span><strong>$450.00</strong></span>
                        </li>
                        <li className='flex justify-between items-center px-2 border-b py-2'>
                            Shipping
                            <span><strong>$0</strong></span>
                        </li>
                        <li className='flex justify-between items-center px-2 border-b py-2'>
                            <h4 className='text-xl font-semibold text-red-600'>TOTAL</h4>
                            <h4 className='text-xl font-semibold text-red-600'>$450.00</h4>
                        </li>
                    </ul>
                   <label htmlFor="check" className='w-full my-3'>
                    <input type="checkbox" name="check"/> Register to the Newsletter.
                   </label>
                   <a href="#" className='btn btn-primary block w-full'>Confirm and Pay</a>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default CheckOut
