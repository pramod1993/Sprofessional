import React, { useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import productimg from '../img/product_detail.jpg';
import productimg1 from '../img/product_detail1.jpg'; 
import {AiFillStar} from 'react-icons/ai';
import {CiShuffle} from 'react-icons/ci';
import {BsHeart} from 'react-icons/bs';
import {TfiShoppingCart} from 'react-icons/tfi';
import cartimg from '../img/1.jpg';
import * as Styled from './HomeStyled';
import topsel from '../img/1.jpg';
import topsel1 from '../img/1_b.jpg';
import topsel2 from '../img/2.jpg';
import topsel3 from '../img/2_b.jpg';
import topsel4 from '../img/3.jpg';
import topsel5 from '../img/3_b.jpg';
import topsel6 from '../img/4.jpg';
import topsel7 from '../img/4_b.jpg';
import topsel8 from '../img/5.jpg';
import topsel9 from '../img/5_b.jpg';
import topsel10 from '../img/6.jpg';
import topsel11 from '../img/6_b.jpg';
import topsel12 from '../img/7.jpg';
import topsel13 from '../img/7_b.jpg';
import topsel14 from '../img/8.jpg';
import topsel15 from '../img/8_b.jpg';
import time from '../img/countdown.svg';
import {Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { Table } from 'react-bootstrap';
const Product = () => {
    const [count, setCount] = useState(0);
    const handleClick = () =>{
        setCount(count - 1)
    }
    const handleClickpuls = () =>{
        setCount(count + 1)
    }
    const [show, setShow] = useState(false);
  return (
    <> 
    <div className="container">
        <div className="md:grid-cols-2 grid gap-3">
            <div className="flex gap-3">
                <ul className='m-0 p-0'>
                    <li className='w-24 mb-3'>
                        <img src={productimg} alt="productimg" />
                    </li>
                    <li className='w-24'>
                        <img src={productimg1} alt="productimg1" />
                    </li>
                </ul>
                <div className='w-96 h-96'>
                <ReactImageMagnify {...{
                    smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        isFluidWidth: true,
                        src: productimg
                    },
                    largeImage: {
                        src: productimg,
                        width: 500,
                        height: 500,
                    }
                }} />
                </div>
            </div>
            <div>
                <div className="flex items-center gap-1">
                    <a href="#" className='text-amber-500'><AiFillStar/></a>
                    <a href="#" className='text-amber-500'><AiFillStar/></a>
                    <a href="#" className='text-amber-500'><AiFillStar/></a>
                    <a href="#" className='text-amber-500'><AiFillStar/></a>
                    <a href="#" className='text-neutral-300'><AiFillStar/></a>
                    <span className='text-neutral-300'><i>4 reviews</i></span>
                </div>
                <div>
                <p><strong>Why do we use it</strong></p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever 
                     since the 1500s, when an unknown printer took a</p>
                     <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
                </div>
                <div className='grid-cols-2 grid gap-3'>
                    <div>
                        <p className='m-0 text-base'><strong>COLOR</strong></p> 
                        <p className='m-0 text-base'><strong>SIZE - Size Guide</strong></p> 
                        <p className='m-0 text-base'><strong>QUANTITY</strong></p> 
                        <p className='m-0 text-base'><strong>$148.00 </strong> <span className='bg-red-500 mx-2 text-sm text-white '>-20%</span> <strong> <span className='line-through text-neutral-300'>$160.00</span></strong></p>    
                    </div>
                    <div>
                        <div className='flex gap-2'>
                            <div className='w-6 h-6 rounded-full bg-amber-500 '/>
                            <div className='w-6 h-6 rounded-full bg-amber-600'/>
                            <div className='w-6 h-6 rounded-full bg-amber-400'/>
                            <div className='w-6 h-6 rounded-full bg-amber-200'/>
                        </div>
                        <select name="" className='w-full px-2 py-1 my-2'>
                            <option value="small">Small</option>
                            <option value="small">Mediam</option>
                            <option value="small">High</option>
                            <option value="small">Low</option>
                        </select>
                        <div className="mb-3 !grid-cols-3 grid  border">
                            <button className='btn btn-primary !rounded-none' onClick={handleClick}>-</button>
                            
                            <div className='text-center justify-center flex items-center'>{count}</div>
                            <button className='btn btn-success !rounded-none' onClick={handleClickpuls}>+</button>
                        </div> 
                        <input type="submit" onClick={() => setShow(true)} className='py-2 px-3 w-full block text-center bg-orange-600 text-white' value="Add To Card" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="container mb-3">
        <div className='text-center'>
            <h1 className='text-3xl font-semibold'>Related</h1>
            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
        </div>
        <div className="md:grid-cols-4 grid gap-3 mt-4">
            <div className='bg-slate-50 shadow-md'>
                <Styled.imgbox1>
                    <Link to='/elements/product'>
                        <img src={topsel} alt="topsel" className='first' />
                        <img src={topsel1} alt="topsel1"  className='second'/>
                    </Link>
                    <span className='bg-red-500 absolute left-2 top-1 text-white px-2 py-1'>-30%</span>
                    <div className="over absolute top-1/4 gap-2 grid">
                        <a href="#" className='text-black border p-2 text-lg bg-white'><BsHeart/></a>
                        <a href="#" className='text-black border p-2 text-lg bg-white'><CiShuffle/></a>
                        <a href="#" className='text-black border p-2 text-lg bg-white'><TfiShoppingCart/></a>
                    </div>
                    <div className="flex absolute bottom-5 inset-auto justify-center left-0 right-0">
                        <img src={time} alt="time" className='relative z-10' />
                        <span className='h-6 bg-red-500 items-center text-white px-3 relative left-[-10px] top-[5px]'>00D 00:00:00</span>  
                    </div>
                </Styled.imgbox1> 
                 
                <div className='grid justify-center'>
                    <div className='flex gap-2 pt-3'>
                        <AiFillStar className='text-amber-400'/>
                        <AiFillStar className='text-amber-400'/>
                        <AiFillStar className='text-amber-400'/>
                        <AiFillStar className='text-amber-400'/>
                        <AiFillStar className='text-neutral-400'/>
                    </div>
                    <a href="#" className='text-black no-underline font-semibold '><p className='m-0'>Armor Air x Fear</p></a>
                    <p className='text-base font-semibold'>$48.00 <span className='line-through text-neutral-300 pl-3'>$60.00</span></p>
                </div>
            </div>
            <div className='bg-slate-50 shadow-md'>
                <Styled.imgbox1>
                    <img src={topsel2} alt="topsel2" className='first' />
                    <img src={topsel3} alt="topsel3"  className='second'/>
                    <span className='bg-red-500 absolute left-2 top-1 text-white px-2 py-1'>-30%</span>
                    <div className="over absolute top-1/4 gap-2 grid">
                        <a href="#" className='text-black border p-2 text-lg bg-white'><BsHeart/></a>
                        <a href="#" className='text-black border p-2 text-lg bg-white'><CiShuffle/></a>
                        <a href="#" className='text-black border p-2 text-lg bg-white'><TfiShoppingCart/></a>
                    </div>
                    <div className="flex absolute bottom-5 inset-auto justify-center left-0 right-0">
                        <img src={time} alt="time" className='relative z-10' />
                        <span className='h-6 bg-red-500 items-center text-white px-3 relative left-[-10px] top-[5px]'>00D 00:00:00</span>  
                    </div>
                </Styled.imgbox1>
                <div className='grid justify-center'>
                    <div className='flex gap-2 pt-3'>
                        <AiFillStar className='text-amber-400'/>
                        <AiFillStar className='text-amber-400'/>
                        <AiFillStar className='text-amber-400'/>
                        <AiFillStar className='text-amber-400'/>
                        <AiFillStar className='text-neutral-400'/>
                    </div>
                    <a href="#" className='text-black no-underline font-semibold '><p className='m-0'>Armor Air x Fear</p></a>
                    <p className='text-base font-semibold'>$48.00 <span className='line-through text-neutral-300 pl-3'>$60.00</span></p>
                </div>
            </div>

            <div className='bg-slate-50 shadow-md'>
                <Styled.imgbox1>
                    <img src={topsel4} alt="topsel4" className='first' />
                    <img src={topsel5} alt="topsel5"  className='second'/>
                    <span className='bg-red-500 absolute left-2 top-1 text-white px-2 py-1'>-30%</span>
                    <div className="over absolute top-1/4 gap-2 grid">
                        <a href="#" className='text-black border p-2 text-lg bg-white'><BsHeart/></a>
                        <a href="#" className='text-black border p-2 text-lg bg-white'><CiShuffle/></a>
                        <a href="#" className='text-black border p-2 text-lg bg-white'><TfiShoppingCart/></a>
                    </div>
                    <div className="flex absolute bottom-5 inset-auto justify-center left-0 right-0">
                        <img src={time} alt="time" className='relative z-10' />
                        <span className='h-6 bg-red-500 items-center text-white px-3 relative left-[-10px] top-[5px]'>00D 00:00:00</span>  
                    </div>
                </Styled.imgbox1>
                <div className='grid justify-center'>
                    <div className='flex gap-2 pt-3'>
                        <AiFillStar className='text-amber-400'/>
                        <AiFillStar className='text-amber-400'/>
                        <AiFillStar className='text-amber-400'/>
                        <AiFillStar className='text-amber-400'/>
                        <AiFillStar className='text-neutral-400'/>
                    </div>
                    <a href="#" className='text-black no-underline font-semibold '><p className='m-0'>Armor Air x Fear</p></a>
                    <p className='text-base font-semibold'>$48.00 <span className='line-through text-neutral-300 pl-3'>$60.00</span></p>
                </div>
            </div>

            <div className='bg-slate-50 shadow-md'>
                <Styled.imgbox1>
                    <img src={topsel6} alt="topsel6" className='first' />
                    <img src={topsel7} alt="topsel7"  className='second'/>
                    <span className='bg-red-500 absolute left-2 top-1 text-white px-2 py-1'>-30%</span>
                    <div className="over absolute top-1/4 gap-2 grid">
                        <a href="#" className='text-black border p-2 text-lg bg-white'><BsHeart/></a>
                        <a href="#" className='text-black border p-2 text-lg bg-white'><CiShuffle/></a>
                        <a href="#" className='text-black border p-2 text-lg bg-white'><TfiShoppingCart/></a>
                    </div>
                    <div className="flex absolute bottom-5 inset-auto justify-center left-0 right-0">
                        <img src={time} alt="time" className='relative z-10' />
                        <span className='h-6 bg-red-500 items-center text-white px-3 relative left-[-10px] top-[5px]'>00D 00:00:00</span>  
                    </div>
                </Styled.imgbox1>
                <div className='grid justify-center'>
                    <div className='flex gap-2 pt-3'>
                        <AiFillStar className='text-amber-400'/>
                        <AiFillStar className='text-amber-400'/>
                        <AiFillStar className='text-amber-400'/>
                        <AiFillStar className='text-amber-400'/>
                        <AiFillStar className='text-neutral-400'/>
                    </div>
                    <a href="#" className='text-black no-underline font-semibold '><p className='m-0'>Armor Air x Fear</p></a>
                    <p className='text-base font-semibold'>$48.00 <span className='line-through text-neutral-300 pl-3'>$60.00</span></p>
                </div>
            </div>

            <div className='bg-slate-50 shadow-md'>
                <Styled.imgbox1>
                    <img src={topsel8} alt="topsel8" className='first' />
                    <img src={topsel9} alt="topsel9"  className='second'/>
                    <span className='bg-red-500 absolute left-2 top-1 text-white px-2 py-1'>-30%</span>
                    <div className="over absolute top-1/4 gap-2 grid">
                        <a href="#" className='text-black border p-2 text-lg bg-white'><BsHeart/></a>
                        <a href="#" className='text-black border p-2 text-lg bg-white'><CiShuffle/></a>
                        <a href="#" className='text-black border p-2 text-lg bg-white'><TfiShoppingCart/></a>
                    </div>
                    <div className="flex absolute bottom-5 inset-auto justify-center left-0 right-0">
                        <img src={time} alt="time" className='relative z-10' />
                        <span className='h-6 bg-red-500 items-center text-white px-3 relative left-[-10px] top-[5px]'>00D 00:00:00</span>  
                    </div>
                </Styled.imgbox1>
                <div className='grid justify-center'>
                    <div className='flex gap-2 pt-3'>
                        <AiFillStar className='text-amber-400'/>
                        <AiFillStar className='text-amber-400'/>
                        <AiFillStar className='text-amber-400'/>
                        <AiFillStar className='text-amber-400'/>
                        <AiFillStar className='text-neutral-400'/>
                    </div>
                    <a href="#" className='text-black no-underline font-semibold '><p className='m-0'>Armor Air x Fear</p></a>
                    <p className='text-base font-semibold'>$48.00 <span className='line-through text-neutral-300 pl-3'>$60.00</span></p>
                </div>
            </div>

            <div className='bg-slate-50 shadow-md'>
                <Styled.imgbox1>
                    <img src={topsel10} alt="topsel10" className='first' />
                    <img src={topsel11} alt="topsel11"  className='second'/>
                    <span className='bg-red-500 absolute left-2 top-1 text-white px-2 py-1'>-30%</span>
                    <div className="over absolute top-1/4 gap-2 grid">
                        <a href="#" className='text-black border p-2 text-lg bg-white'><BsHeart/></a>
                        <a href="#" className='text-black border p-2 text-lg bg-white'><CiShuffle/></a>
                        <a href="#" className='text-black border p-2 text-lg bg-white'><TfiShoppingCart/></a>
                    </div>
                    <div className="flex absolute bottom-5 inset-auto justify-center left-0 right-0">
                        <img src={time} alt="time" className='relative z-10' />
                        <span className='h-6 bg-red-500 items-center text-white px-3 relative left-[-10px] top-[5px]'>00D 00:00:00</span>  
                    </div>
                </Styled.imgbox1>
                <div className='grid justify-center'>
                    <div className='flex gap-2 pt-3'>
                        <AiFillStar className='text-amber-400'/>
                        <AiFillStar className='text-amber-400'/>
                        <AiFillStar className='text-amber-400'/>
                        <AiFillStar className='text-amber-400'/>
                        <AiFillStar className='text-neutral-400'/>
                    </div>
                    <a href="#" className='text-black no-underline font-semibold '><p className='m-0'>Armor Air x Fear</p></a>
                    <p className='text-base font-semibold'>$48.00 <span className='line-through text-neutral-300 pl-3'>$60.00</span></p>
                </div>
            </div>

            <div className='bg-slate-50 shadow-md'>
                <Styled.imgbox1>
                    <img src={topsel12} alt="topsel12" className='first' />
                    <img src={topsel13} alt="topsel13"  className='second'/>
                    <span className='bg-red-500 absolute left-2 top-1 text-white px-2 py-1'>-30%</span>
                    <div className="over absolute top-1/4 gap-2 grid">
                        <a href="#" className='text-black border p-2 text-lg bg-white'><BsHeart/></a>
                        <a href="#" className='text-black border p-2 text-lg bg-white'><CiShuffle/></a>
                        <a href="#" className='text-black border p-2 text-lg bg-white'><TfiShoppingCart/></a>
                    </div>
                    <div className="flex absolute bottom-5 inset-auto justify-center left-0 right-0">
                        <img src={time} alt="time" className='relative z-10' />
                        <span className='h-6 bg-red-500 items-center text-white px-3 relative left-[-10px] top-[5px]'>00D 00:00:00</span>  
                    </div>
                </Styled.imgbox1>
                <div className='grid justify-center'>
                    <div className='flex gap-2 pt-3'>
                        <AiFillStar className='text-amber-400'/>
                        <AiFillStar className='text-amber-400'/>
                        <AiFillStar className='text-amber-400'/>
                        <AiFillStar className='text-amber-400'/>
                        <AiFillStar className='text-neutral-400'/>
                    </div>
                    <a href="#" className='text-black no-underline font-semibold '><p className='m-0'>Armor Air x Fear</p></a>
                    <p className='text-base font-semibold'>$48.00 <span className='line-through text-neutral-300 pl-3'>$60.00</span></p>
                </div>
            </div>

            <div className='bg-slate-50 shadow-md'>
                <Styled.imgbox1>
                    <img src={topsel14} alt="topsel14" className='first' />
                    <img src={topsel15} alt="topsel15"  className='second'/>
                    <span className='bg-red-500 absolute left-2 top-1 text-white px-2 py-1'>-30%</span>
                    <div className="over absolute top-1/4 gap-2 grid">
                        <a href="#" className='text-black border p-2 text-lg bg-white'><BsHeart/></a>
                        <a href="#" className='text-black border p-2 text-lg bg-white'><CiShuffle/></a>
                        <a href="#" className='text-black border p-2 text-lg bg-white'><TfiShoppingCart/></a>
                    </div>
                    <div className="flex absolute bottom-5 inset-auto justify-center left-0 right-0">
                        <img src={time} alt="time" className='relative z-10' />
                        <span className='h-6 bg-red-500 items-center text-white px-3 relative left-[-10px] top-[5px]'>00D 00:00:00</span>  
                    </div>
                </Styled.imgbox1>
                <div className='grid justify-center'>
                    <div className='flex gap-2 pt-3'>
                        <AiFillStar className='text-amber-400'/>
                        <AiFillStar className='text-amber-400'/>
                        <AiFillStar className='text-amber-400'/>
                        <AiFillStar className='text-amber-400'/>
                        <AiFillStar className='text-neutral-400'/>
                    </div>
                    <a href="#" className='text-black no-underline font-semibold '><p className='m-0'>Armor Air x Fear</p></a>
                    <p className='text-base font-semibold'>$48.00 <span className='line-through text-neutral-300 pl-3'>$60.00</span></p>
                </div>
            </div>
        </div>
    </div>
    <Modal show={show} onHide={() => setShow(false)}  className='w-full' >
        <div className="container">
            <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title" className=''>
            1 product added to cart
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Table>
                <tbody>
                <tr className='items-center w-full'>
                    <td>
                    <img src={cartimg} alt="cartimg" className='w-14' /> 
                    </td>
                    <td>Armor Air x Fear</td>
                    <td>$140.00</td>
                    <td>
                    <div className="mb-3 !grid-cols-2 grid gap-3">
                        <a href='/cart' className='btn btn-primary !rounded-none'>View cart</a>                         
                        <a  href='/checkout' className='btn btn-success !rounded-none'>Checkout</a>
                    </div>
                    </td> 
                </tr>
                                            
                </tbody>
            </Table>
            </Modal.Body>
        </div>
      </Modal>
    </>
  )
}

export default Product
