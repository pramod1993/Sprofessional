import React from 'react'
import { Link } from 'react-router-dom';
import time from '../img/countdown.svg';
import * as Styled from './HomeStyled';
import {AiFillStar} from 'react-icons/ai';
import {CiShuffle} from 'react-icons/ci';
import {BsHeart} from 'react-icons/bs';
import {TfiShoppingCart} from 'react-icons/tfi';
 
const Listdate = ({item}) => {
    const {img, hoverimg, amount ,discount , descrition, title} = item;
  return (
    <>
      <div className='bg-slate-50 shadow-md flex gap-4'>
                    <div className="w-1/3">
                    <Styled.imgbox1>
                        <Link to='/elements/product'>
                            <img src={img} alt="topsel2" className='first' />
                            <img src={hoverimg} alt="topsel3"  className='second'/>
                        </Link>
                    <span className='bg-red-500 absolute left-2 top-1 text-white px-2 py-1'>-30%</span>
                    <div className="over absolute top-1/4 gap-2 grid">
                        <a href="#" className='text-black border p-2 text-lg  bg-white'><BsHeart/></a>
                        <a href="#" className='text-black border p-2 text-lg  bg-white'><CiShuffle/></a>
                        <a href="#" className='text-black border p-2 text-lg  bg-white'><TfiShoppingCart/></a>
                    </div>
                    <div className="flex absolute bottom-5 inset-auto justify-center left-0 right-0">
                        <img src={time} alt="time" className='relative z-10' />
                        <span className='h-6 bg-red-500 items-center text-white px-3 relative left-[-10px] top-[5px]'>00D 00:00:00</span>  
                    </div>
                </Styled.imgbox1>
                    </div>
                    <div className="w-2/3">
                        <div className='grid px-4'>
                            <div className='flex gap-2 pt-3'>
                                <AiFillStar className='text-amber-400'/>
                                <AiFillStar className='text-amber-400'/>
                                <AiFillStar className='text-amber-400'/>
                                <AiFillStar className='text-amber-400'/>
                                <AiFillStar className='text-neutral-400'/>
                            </div>
                            <a href="#" className='text-black no-underline font-semibold '><p className='m-0'>{title}</p></a>
                            <p>{descrition}</p>
                            <p className='text-base font-semibold'>{amount} <span className='line-through text-neutral-300 pl-3'>{discount}</span></p>
                            <div className='flex gap-3 items-center'>
                                <Link to='/elements/product' className='text-white bg-orange-600 px-3 py-2 no-underline '>Add To Card</Link>
                                <a href="#" className='text-black  px-3 py-2 text-lg bg-gray-300'><BsHeart/></a>
                                <a href="#" className='text-black px-3 py-2 text-lg bg-gray-300'><CiShuffle/></a>
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default Listdate
