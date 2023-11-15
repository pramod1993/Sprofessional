import React from 'react'
import {FaHome} from 'react-icons/fa';
import {FaHeadset} from 'react-icons/fa6';
import {AiOutlineMail} from 'react-icons/ai';
import { Button, Form, InputGroup } from 'react-bootstrap';
import {LiaAngleDoubleRightSolid} from 'react-icons/lia';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillFacebook} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
const Footer = () => {
  return (
    <>
      <div className='bg-cyan-950 text-white py-4'>
        <div className="container">
            <div className="md:grid-cols-4 grid gap-3">
                <div>
                    <p><strong>QUICK LINKS</strong></p>
                    <ul className='m-0 p-0'>
                        <li className='py-1'>
                            <a href="#" className='text-white no-underline'>About us</a>
                        </li>
                        <li className='py-1'>
                            <a href="#" className='text-white no-underline'>Faq</a>
                        </li>
                        <li className='py-1'>
                            <a href="#" className='text-white no-underline'>Help</a>
                        </li>
                        <li className='py-1'>
                            <a href="#" className='text-white no-underline'>My account</a>
                        </li>
                        <li className='py-1'>
                            <a href="#" className='text-white no-underline'>Blog</a>
                        </li>
                        <li className='py-1'>
                            <a href="#" className='text-white no-underline'>Contacts</a>
                        </li>
                    </ul>
                </div>
                <div>
                <p><strong>CATEGORIES</strong></p>
                    <ul className='m-0 p-0'>
                        <li className='py-1'>
                            <a href="#" className='text-white no-underline'>Clothes</a>
                        </li>
                        <li className='py-1'>
                            <a href="#" className='text-white no-underline'>Electronics</a>
                        </li>
                        <li className='py-1'>     
                            <a href="#" className='text-white no-underline'>Furniture</a>
                        </li>
                        <li className='py-1'>
                            <a href="#" className='text-white no-underline'>Glasses</a>
                        </li>
                        <li className='py-1'>
                            <a href="#" className='text-white no-underline'>Shoes</a>
                        </li>
                        <li className='py-1'>
                            <a href="#" className='text-white no-underline'>Watches</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p><strong>CONTACTS</strong></p>
                    <ul className='m-0 p-0'>
                        <li className='flex gap-2 items-center py-1'>
                          <FaHome/>  97845 Baker st. 567 Los Angeles - US
                        </li>
                        <li className='flex gap-2 items-center py-1'>
                           <FaHeadset/> +91 1234567809
                        </li>
                        <li className='flex gap-2 items-center py-1'>
                           <AiOutlineMail/> pramod@info.com
                        </li>
                    </ul>
                </div>
                <div>
                    <p><strong>KEEP IN TOUCH</strong></p>
                    <InputGroup> 
                        <Form.Control
                        placeholder="Your Email"
                        aria-label="Your Email"  className='!rounded-none !bg-slate-900 text-white outline-none'
                        />
                        <Button className='bg-orange-600'>
                            <LiaAngleDoubleRightSolid/>
                        </Button> 
                    </InputGroup>
                    <p className='mt-4'><strong>Follow Us</strong></p>
                    <ul className='p-0 m-0 flex gap-3'>
                        <li className='w-9 h-9 justify-center items-center flex bg-sky-400 '>
                            <a href="#" className='text-white text-xl'><AiOutlineTwitter/></a>
                        </li>
                        <li className='w-9 h-9 justify-center items-center flex bg-sky-800'>
                            <a href="#" className='text-white text-xl'><AiFillFacebook/></a>
                        </li>
                        <li className='w-9 h-9 justify-center items-center flex bg-red-600'>
                            <a href="#" className='text-white text-xl'><AiFillYoutube/></a>
                        </li>
                        <li className='w-9 h-9 justify-center items-center flex bg-indigo-800'>
                            <a href="#" className='text-white text-xl'><AiFillLinkedin/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
