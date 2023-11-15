import React, { useState } from 'react'
import time from '../img/countdown.svg';
import { Link,} from 'react-router-dom';
import {AiFillStar} from 'react-icons/ai';
import {CiShuffle} from 'react-icons/ci';
import {BsHeart} from 'react-icons/bs';
import {TfiShoppingCart} from 'react-icons/tfi';
import * as Styled from './HomeStyled';
const Griddata = ({item}) => {
    const {img, hoverimg, amount ,discount , title} = item; 
   
  return (
    <> 
                <div   key={item.id} className='bg-slate-50 shadow-md'>
            <Styled.imgbox1>
                <Link to='/elements/product'>
                    <img src={img} alt="topsel2" className='first' />
                    <img src={hoverimg} alt="topsel3"  className='second'/>
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
                <a href="#" className='text-black no-underline font-semibold '><p className='m-0'>{title}</p></a>
                <p className='text-base font-semibold'>{amount} <span className='line-through text-neutral-300 pl-3'>{discount}</span></p> 
                <button className='py-2 text-white bg-orange-600 mb-3'>Add to Cart</button>
            </div>
        </div>  
    </>
  )
}

export default Griddata
