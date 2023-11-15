import React from 'react'
import { Carousel } from 'react-bootstrap';
import Slider from "react-slick";
import * as Styled from './HomeStyled';
import slider from '../img/slide.jpg';
import slider1 from '../img/slide1.jpg';
import slider2 from '../img/slide2.jpg';
import banner from '../img/banner.jpg';
import banner1 from '../img/banner1.jpg';
import banner2 from '../img/banner2.jpg';
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
import {CiShuffle} from 'react-icons/ci';
import {BsHeart} from 'react-icons/bs';
import {TfiShoppingCart} from 'react-icons/tfi';
import time from '../img/countdown.svg';
import {AiFillStar} from 'react-icons/ai';
import feature from '../img/feature.jpg'
import AutoPlay from './AutoPlay';
import news from '../img/blog-thumb.jpg';
import news1 from '../img/blog-thumb1.jpg';
import news2 from '../img/blog-thumb2.jpg';
import news3 from '../img/blog-thumb3.jpg';
const Home = () => {
    var settings = { 
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1, 
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
      <Carousel fade>
      <Carousel.Item>
        <div className='md:h-96 h-48 items-center grid text-white text-end' style={{background:`url(${slider})`, backgroundRepeat:'no-repeat',
         backgroundSize:'cover', backgroundPosition:'center'}}>
           <div className="container">
                <div className="md:grid-cols-2 grid">
                        <div/> 
                        <div className='pr-12'>
                            <h2 className='uppercase font-bold md:text-5xl text-xl'>Attack Air<br/>Max 720 Sage Low</h2>
                            <p className='md:text-xl text-lg'>Limited items available at this price</p>
                            <a href="#" className='py-2 px-3 bg-orange-600 text-white no-underline'>Shop Now</a>
                        </div>
                    </div>
           </div>
         </div>
      </Carousel.Item> 
      <Carousel.Item>
        <div className='md:h-96 h-48 items-center grid text-white text-end' style={{background:`url(${slider1})`, backgroundRepeat:'no-repeat',
         backgroundSize:'cover', backgroundPosition:'center'}}>
           <div className="container">
                <div className="md:grid-cols-2 grid">
                        <div/> 
                        <div className='pr-12'>
                            <h2 className='uppercase font-bold  md:text-5xl text-xl'>Attack Air<br/>Max 720 Sage Low</h2>
                            <p className='md:text-xl text-lg'>Limited items available at this price</p>
                            <a href="#" className='py-2 px-3 bg-orange-600 text-white no-underline'>Shop Now</a>
                        </div>
                    </div>
           </div>
         </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='md:h-96 h-48 items-center grid text-white text-center' style={{background:`url(${slider2})`, backgroundRepeat:'no-repeat',
         backgroundSize:'cover', backgroundPosition:'center'}}>
           <div className="container">                      
            <div className='max-w-2xl m-auto'>
                <h2 className='uppercase font-bold  md:text-5xl text-xl'>Attack Air<br/>Max 720 Sage Low</h2>
                <p className='md:text-xl text-lg'>Limited items available at this price</p>
                <a href="#" className='py-2 px-3 bg-orange-600 text-white no-underline'>Shop Now</a>
            </div>                   
           </div>
         </div>
      </Carousel.Item>
    </Carousel>
    <div className="container mt-4">
        <div className="md:grid-cols-3 grid gap-3">
            <div className='relative overflow-hidden'>
                <Styled.imgbox>
                    <img src={banner} alt="banner"/>
                    <div className='absolute top-0 left-0 right-0 bottom-0 bg-[#00000063] text-center'>
                        <h1 className='uppercase font-bold text-2xl absolute 
                        top-0 left-0 right-0 bottom-0 items-center text-white flex justify-center'>Men's Collection</h1>
                        <a href="#" className='py-2 px-3 bg-orange-600 text-white no-underline 
                        absolute flex justify-center items-center  md:bottom-0 bottom-5 left-1/3  shop'>Shop Now</a>
                    </div>
                </Styled.imgbox>
            </div>
            <div className='relative overflow-hidden'>
                <Styled.imgbox>
                    <img src={banner1} alt="banner"/>
                    <div className='absolute top-0 left-0 right-0 bottom-0 bg-[#00000063] text-center'>
                        <h1 className='uppercase font-bold text-2xl absolute 
                        top-0 left-0 right-0 bottom-0 items-center text-white flex justify-center'>Womens's Collection</h1>
                        <a href="#" className='py-2 px-3 bg-orange-600 text-white no-underline 
                        absolute flex justify-center items-center  md:bottom-0 bottom-5 left-1/3 shop'>Shop Now</a>
                    </div>
                </Styled.imgbox>
            </div>
            <div className='relative overflow-hidden'>
                <Styled.imgbox>
                    <img src={banner2} alt="banner"/>
                    <div className='absolute top-0 left-0 right-0 bottom-0 bg-[#00000063] text-center'>
                        <h1 className='uppercase font-bold text-2xl absolute 
                        top-0 left-0 right-0 bottom-0 items-center text-white flex justify-center'>Kids's Collection</h1>
                        <a href="#" className='py-2 px-3 bg-orange-600 text-white no-underline 
                        absolute flex justify-center items-center md:bottom-0 bottom-5 left-1/3 shop'>Shop Now</a>
                    </div>
                </Styled.imgbox>
            </div>
        </div>
    </div>

    <div className="container">
        <div className='text-center mt-4'>
            <h2>Top Selling</h2>
            <h5>Cum doctus civibus efficiantur in imperdiet deterruisset</h5>
        </div>
        <div className="md:grid-cols-4 grid gap-3 mt-4">
            <div className='bg-slate-50 shadow-md'>
                <Styled.imgbox1>
                    <img src={topsel} alt="topsel" className='first' />
                    <img src={topsel1} alt="topsel1"  className='second'/>
                    <span className='bg-red-500 absolute left-2 top-1 text-white px-2 py-1'>-30%</span>
                    <div className="over absolute top-1/4 gap-2 grid bg-white">
                        <a href="#" className='text-black border p-2 text-lg'><BsHeart/></a>
                        <a href="#" className='text-black border p-2 text-lg'><CiShuffle/></a>
                        <a href="#" className='text-black border p-2 text-lg'><TfiShoppingCart/></a>
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
                    <div className="over absolute top-1/4 gap-2 grid bg-white">
                        <a href="#" className='text-black border p-2 text-lg'><BsHeart/></a>
                        <a href="#" className='text-black border p-2 text-lg'><CiShuffle/></a>
                        <a href="#" className='text-black border p-2 text-lg'><TfiShoppingCart/></a>
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
                    <div className="over absolute top-1/4 gap-2 grid bg-white">
                        <a href="#" className='text-black border p-2 text-lg'><BsHeart/></a>
                        <a href="#" className='text-black border p-2 text-lg'><CiShuffle/></a>
                        <a href="#" className='text-black border p-2 text-lg'><TfiShoppingCart/></a>
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
                    <div className="over absolute top-1/4 gap-2 grid bg-white">
                        <a href="#" className='text-black border p-2 text-lg'><BsHeart/></a>
                        <a href="#" className='text-black border p-2 text-lg'><CiShuffle/></a>
                        <a href="#" className='text-black border p-2 text-lg'><TfiShoppingCart/></a>
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
                    <div className="over absolute top-1/4 gap-2 grid bg-white">
                        <a href="#" className='text-black border p-2 text-lg'><BsHeart/></a>
                        <a href="#" className='text-black border p-2 text-lg'><CiShuffle/></a>
                        <a href="#" className='text-black border p-2 text-lg'><TfiShoppingCart/></a>
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
                    <div className="over absolute top-1/4 gap-2 grid bg-white">
                        <a href="#" className='text-black border p-2 text-lg'><BsHeart/></a>
                        <a href="#" className='text-black border p-2 text-lg'><CiShuffle/></a>
                        <a href="#" className='text-black border p-2 text-lg'><TfiShoppingCart/></a>
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
                    <div className="over absolute top-1/4 gap-2 grid bg-white">
                        <a href="#" className='text-black border p-2 text-lg'><BsHeart/></a>
                        <a href="#" className='text-black border p-2 text-lg'><CiShuffle/></a>
                        <a href="#" className='text-black border p-2 text-lg'><TfiShoppingCart/></a>
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
                    <div className="over absolute top-1/4 gap-2 grid bg-white">
                        <a href="#" className='text-black border p-2 text-lg'><BsHeart/></a>
                        <a href="#" className='text-black border p-2 text-lg'><CiShuffle/></a>
                        <a href="#" className='text-black border p-2 text-lg'><TfiShoppingCart/></a>
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

    <div className='mt-5 relative' style={{background:`url(${feature})`, backgroundPosition:'center', 
    backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundAttachment:'fixed'}}>
        <div className='absolute left-0 right-0 top-0 bottom-0 bg-[#00000091]'/>
        <div className='container text-white relative py-20'>
            <h1 className='font-bold '>ARMOR <br />AIR COLOR 720</h1>
            <h5>Lightweight cushioning and durable support with a Phylon midsole</h5>
            <div className='flex gap-2 items-center'>
                <h1 className='font-bold m-0'>$90.00 <span className='line-through text-neutral-300 font-semibold text-lg '>$170.00</span></h1>
                <a href="#" className="py-2 px-3 bg-orange-600 text-white no-underline">Shop Now</a>
            </div>
        </div>
    </div>

    <div className="container">
        <div className='text-center my-3 '>
            <h1>Featured</h1>
            <h5>Cum doctus civibus efficiantur in imperdiet deterruisset</h5>
        </div> 
        <Slider {...settings}>
            <div  className='grid gap-3'>
                <div className='bg-slate-50 m-2 shadow-md'>
                    <Styled.imgbox1>
                        <img src={topsel} alt="topsel" className='first' />
                        <img src={topsel1} alt="topsel1"  className='second'/>
                        <span className='bg-red-500 absolute left-2 top-1 text-white px-2 py-1'>-30%</span>
                        <div className="over absolute top-1/4 gap-2 grid bg-white">
                            <a href="#" className='text-black border p-2 text-lg'><BsHeart/></a>
                            <a href="#" className='text-black border p-2 text-lg'><CiShuffle/></a>
                            <a href="#" className='text-black border p-2 text-lg'><TfiShoppingCart/></a>
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
            <div className='grid gap-3'>
                <div className='bg-slate-50 m-2 shadow-md'>
                    <Styled.imgbox1>
                        <img src={topsel2} alt="topsel2" className='first' />
                        <img src={topsel3} alt="topsel3"  className='second'/>
                        <span className='bg-red-500 absolute left-2 top-1 text-white px-2 py-1'>-30%</span>
                        <div className="over absolute top-1/4 gap-2 grid bg-white">
                            <a href="#" className='text-black border p-2 text-lg'><BsHeart/></a>
                            <a href="#" className='text-black border p-2 text-lg'><CiShuffle/></a>
                            <a href="#" className='text-black border p-2 text-lg'><TfiShoppingCart/></a>
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

            <div className='grid gap-3'>
                <div className='bg-slate-50 m-2 shadow-md'>
                    <Styled.imgbox1>
                        <img src={topsel4} alt="topsel4" className='first' />
                        <img src={topsel5} alt="topsel5"  className='second'/>
                        <span className='bg-red-500 absolute left-2 top-1 text-white px-2 py-1'>-30%</span>
                        <div className="over absolute top-1/4 gap-2 grid bg-white">
                            <a href="#" className='text-black border p-2 text-lg'><BsHeart/></a>
                            <a href="#" className='text-black border p-2 text-lg'><CiShuffle/></a>
                            <a href="#" className='text-black border p-2 text-lg'><TfiShoppingCart/></a>
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
            <div className='grid gap-3'>
                <div className='bg-slate-50 m-2 shadow-md'>
                    <Styled.imgbox1>
                        <img src={topsel6} alt="topsel6" className='first' />
                        <img src={topsel7} alt="topsel7"  className='second'/>
                        <span className='bg-red-500 absolute left-2 top-1 text-white px-2 py-1'>-30%</span>
                        <div className="over absolute top-1/4 gap-2 grid bg-white">
                            <a href="#" className='text-black border p-2 text-lg'><BsHeart/></a>
                            <a href="#" className='text-black border p-2 text-lg'><CiShuffle/></a>
                            <a href="#" className='text-black border p-2 text-lg'><TfiShoppingCart/></a>
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

            <div className='grid gap-3'>
                <div className='bg-slate-50 m-2 shadow-md'>
                    <Styled.imgbox1>
                        <img src={topsel8} alt="topsel8" className='first' />
                        <img src={topsel9} alt="topsel9"  className='second'/>
                        <span className='bg-red-500 absolute left-2 top-1 text-white px-2 py-1'>-30%</span>
                        <div className="over absolute top-1/4 gap-2 grid bg-white">
                            <a href="#" className='text-black border p-2 text-lg'><BsHeart/></a>
                            <a href="#" className='text-black border p-2 text-lg'><CiShuffle/></a>
                            <a href="#" className='text-black border p-2 text-lg'><TfiShoppingCart/></a>
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
            <div className='grid gap-3'>
                <div className='bg-slate-50 m-2 shadow-md'>
                    <Styled.imgbox1>
                        <img src={topsel10} alt="topsel10" className='first' />
                        <img src={topsel11} alt="topsel11"  className='second'/>
                        <span className='bg-red-500 absolute left-2 top-1 text-white px-2 py-1'>-30%</span>
                        <div className="over absolute top-1/4 gap-2 grid bg-white">
                            <a href="#" className='text-black border p-2 text-lg'><BsHeart/></a>
                            <a href="#" className='text-black border p-2 text-lg'><CiShuffle/></a>
                            <a href="#" className='text-black border p-2 text-lg'><TfiShoppingCart/></a>
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
            <div className='grid gap-3'>
                <div className='bg-slate-50 m-2 shadow-md'>
                    <Styled.imgbox1>
                        <img src={topsel12} alt="topsel12" className='first' />
                        <img src={topsel13} alt="topsel13"  className='second'/>
                        <span className='bg-red-500 absolute left-2 top-1 text-white px-2 py-1'>-30%</span>
                        <div className="over absolute top-1/4 gap-2 grid bg-white">
                            <a href="#" className='text-black border p-2 text-lg'><BsHeart/></a>
                            <a href="#" className='text-black border p-2 text-lg'><CiShuffle/></a>
                            <a href="#" className='text-black border p-2 text-lg'><TfiShoppingCart/></a>
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
            <div className='grid gap-3'>
                <div className='bg-slate-50 m-2 shadow-md'>
                    <Styled.imgbox1>
                        <img src={topsel14} alt="topsel14" className='first' />
                        <img src={topsel15} alt="topsel15"  className='second'/>
                        <span className='bg-red-500 absolute left-2 top-1 text-white px-2 py-1'>-30%</span>
                        <div className="over absolute top-1/4 gap-2 grid bg-white">
                            <a href="#" className='text-black border p-2 text-lg'><BsHeart/></a>
                            <a href="#" className='text-black border p-2 text-lg'><CiShuffle/></a>
                            <a href="#" className='text-black border p-2 text-lg'><TfiShoppingCart/></a>
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
        </Slider>
    </div> 
    <div className="container mt-3">
        <AutoPlay/>
    </div>

    <div className="container">
        <div className='text-center mt-4'>
            <h2>Latest News</h2>
            <p>Cum doctus civibus efficiantur in imperdiet deterruisset</p>
        </div>
        <div className="md:grid-cols-2 grid gap-3 mt-3">
            <div className='md:flex gap-3'>
                <div className='relative'>
                    <img src={news} alt="news" />
                    <p className='absolute right-0 top-0 py-2 px-3 bg-orange-600 text-white'>06 <span className='block'>Nov</span></p>
                </div>
                <div>
                    <small className='text-neutral-400'>by Mark Twain 20.11.2017</small><br />
                    <a href="#" className='no-underline'><h4 className=' text-xl font-semibold'>Pri oportere scribentur eu</h4></a>
                    <p>Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....</p>
                </div>
            </div>
            <div className='md:flex gap-3'>
                <div className='relative'>
                    <img src={news1} alt="news1" />
                    <p className='absolute right-0 top-0 py-2 px-3 bg-orange-600 text-white'>06 <span className='block'>Nov</span></p>
                </div>
                <div>
                    <small className='text-neutral-400'>by Mark Twain 20.11.2017</small><br />
                    <a href="#" className='no-underline'><h4 className=' text-xl font-semibold'>Pri oportere scribentur eu</h4></a>
                    <p>Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....</p>
                </div>
            </div>
            <div className='md:flex gap-3'>
                <div className='relative'>
                    <img src={news2} alt="news2" />
                    <p className='absolute right-0 top-0 py-2 px-3 bg-orange-600 text-white'>06 <span className='block'>Nov</span></p>
                </div>
                <div>
                    <small className='text-neutral-400'>by Mark Twain 20.11.2017</small><br />
                    <a href="#" className='no-underline'><h4 className=' text-xl font-semibold'>Pri oportere scribentur eu</h4></a>
                    <p>Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....</p>
                </div>
            </div>
            <div className='md:flex gap-3'>
                <div className='relative'>
                    <img src={news3} alt="news3" />
                    <p className='absolute right-0 top-0 py-2 px-3 bg-orange-600 text-white'>06 <span className='block'>Nov</span></p>
                </div>
                <div>
                    <small className='text-neutral-400'>by Mark Twain 20.11.2017</small><br />
                    <a href="#" className='no-underline'><h4 className=' text-xl font-semibold'>Pri oportere scribentur eu</h4></a>
                    <p>Cu eum alia elit, usu in eius appareat, deleniti sapientem honestatis eos ex. In ius esse ullum vidisse....</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home
