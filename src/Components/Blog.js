import React from 'react'
import { Card, CardBody, CardFooter, CardImg } from 'react-bootstrap'
import {TfiComments} from 'react-icons/tfi';
import {AiOutlineSearch} from 'react-icons/ai';
import blogimg from '../img/blog.jpg';
import blogimg1 from '../img/blog1.jpg';
import blogimg2 from '../img/blog2.jpg';
import blogimg3 from '../img/blog3.jpg';
import blogimg4 from '../img/blog4.jpg';
import blogimg5 from '../img/blog5.jpg';
import avatar from '../img/avatar.jpg';
const Blog = () => {
  return (
    <>
    <div className=' bg-slate-200'>
        <div className="container py-3">
            <ol className='flex gap-3 m-0 p-0'>
                <li><a href="/" className='text-black no-underline'>Home</a></li>
                <li>/</li>
                <li>Blog</li>
            </ol>
        </div>
    </div>
      <div className="container">
        <div className="flex gap-3 my-4">
            <div className='w-3/4'>
                <div className="grid-cols-2 grid gap-3">
                    <Card>
                        <CardImg src={blogimg} alt='blogimg'/>
                        <CardBody>
                        <small className="text-muted">Category - 20 Nov. 2017</small>
                        <h2 className='text-3xl'>Ea exerci option hendrerit</h2>
                        <p>Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit 
                        salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.</p>
                        </CardBody>
                        <CardFooter className='flex justify-between items-center'>
                            <img src={avatar} alt="avatar" className='rounded-full w-10 h-10' />
                            <div className='text-2xl flex gap-2'>
                                <TfiComments/> <span className='text-gray-400 m-0 text-base'>20</span>
                            </div>
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardImg src={blogimg1} alt='blogimg'/>
                        <CardBody>
                        <small className="text-muted">Category - 20 Nov. 2017</small>
                        <h2 className='text-3xl'>Ea exerci option hendrerit</h2>
                        <p>Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit 
                        salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.</p>
                        </CardBody>
                        <CardFooter className='flex justify-between items-center'>
                            <img src={avatar} alt="avatar" className='rounded-full w-10 h-10' />
                            <div className='text-2xl flex gap-2'>
                                <TfiComments/> <span className='text-gray-400 m-0 text-base'>20</span>
                            </div>
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardImg src={blogimg2} alt='blogimg'/>
                        <CardBody>
                        <small className="text-muted">Category - 20 Nov. 2017</small>
                        <h2 className='text-3xl'>Ea exerci option hendrerit</h2>
                        <p>Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit 
                        salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.</p>
                        </CardBody>
                        <CardFooter className='flex justify-between items-center'>
                            <img src={avatar} alt="avatar" className='rounded-full w-10 h-10' />
                            <div className='text-2xl flex gap-2'>
                                <TfiComments/> <span className='text-gray-400 m-0 text-base'>20</span>
                            </div>
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardImg src={blogimg3} alt='blogimg'/>
                        <CardBody>
                        <small className="text-muted">Category - 20 Nov. 2017</small>
                        <h2 className='text-3xl'>Ea exerci option hendrerit</h2>
                        <p>Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit 
                        salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.</p>
                        </CardBody>
                        <CardFooter className='flex justify-between items-center'>
                            <img src={avatar} alt="avatar" className='rounded-full w-10 h-10' />
                            <div className='text-2xl flex gap-2'>
                                <TfiComments/> <span className='text-gray-400 m-0 text-base'>20</span>
                            </div>
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardImg src={blogimg4} alt='blogimg'/>
                        <CardBody>
                        <small className="text-muted">Category - 20 Nov. 2017</small>
                        <h2 className='text-3xl'>Ea exerci option hendrerit</h2>
                        <p>Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit 
                        salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.</p>
                        </CardBody>
                        <CardFooter className='flex justify-between items-center'>
                            <img src={avatar} alt="avatar" className='rounded-full w-10 h-10' />
                            <div className='text-2xl flex gap-2'>
                                <TfiComments/> <span className='text-gray-400 m-0 text-base'>20</span>
                            </div>
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardImg src={blogimg5} alt='blogimg'/>
                        <CardBody>
                        <small className="text-muted">Category - 20 Nov. 2017</small>
                        <h2 className='text-3xl'>Ea exerci option hendrerit</h2>
                        <p>Quodsi sanctus pro eu, ne audire scripserit quo. Vel an enim offendit 
                        salutandi, in eos quod omnes epicurei, ex veri qualisque scriptorem mei.</p>
                        </CardBody>
                        <CardFooter className='flex justify-between items-center'>
                            <img src={avatar} alt="avatar" className='rounded-full w-10 h-10' />
                            <div className='text-2xl flex gap-2'>
                                <TfiComments/> <span className='text-gray-400 m-0 text-base'>20</span>
                            </div>
                        </CardFooter>
                    </Card>
                </div> 
            </div> 
            <div className='w-1/4'>
                <div className="relative mb-3">
                    <input type="search" name="search" className='w-full outline-none pr-9 pl-3 py-2 border' placeholder='Search over 10.000 products' />
                    <span className='absolute py-[8px] right-[3px] text-2xl'><AiOutlineSearch/></span>
                </div>
                <p><strong>Categories</strong></p>
                <div className='flex justify-between py-1 justify-center items-center'>
                    <a href="#" className='text-black no-underline hover:!text-orange-600'>Food</a>
                    <p className='text-gray-400 m-0'>(12)</p>
                </div>
                <div className='flex justify-between py-1 items-center'>
                    <a href='#' className='text-black no-underline hover:!text-orange-600'>Places to visit</a>
                    <p className='text-gray-400 m-0'>(21)</p>
                </div>
                <div className='flex justify-between py-1 items-center'>
                    <a href='#' className='text-black no-underline hover:!text-orange-600'>New Places</a>
                    <p className='text-gray-400 m-0'>(44)</p>
                </div>
                <div className='flex justify-between py-1 items-center'>
                    <a href='#' className='text-black no-underline hover:!text-orange-600'>Suggestions and guides</a>
                    <p className='text-gray-400 m-0'>(31)</p>
                </div>
                <p className='mt-3'><strong>Popular Tags</strong></p>
                <div className="flex flex-wrap gap-2">
                    <a href="#" className='bg-gray-200 text-black hover:!text-white 
                    hover:bg-orange-600 no-underline rounded px-2 text-base py-1'>Food</a>
                    <a href="#" className='bg-gray-200 text-black hover:!text-white 
                    hover:bg-orange-600 no-underline rounded px-2 text-base py-1'>Bars </a>
                    <a href="#" className='bg-gray-200 text-black hover:!text-white 
                    hover:bg-orange-600 no-underline rounded px-2 text-base py-1'>Cooktails</a>
                    <a href="#" className='bg-gray-200 text-black hover:!text-white 
                    hover:bg-orange-600 no-underline rounded px-2 text-base py-1'>Shops</a>
                    <a href="#" className='bg-gray-200 text-black hover:!text-white 
                    hover:bg-orange-600 no-underline rounded px-2 text-base py-1'>Best Offers</a>
                    <a href="#" className='bg-gray-200 text-black hover:!text-white 
                    hover:bg-orange-600 no-underline rounded px-2 text-base py-1'>Transports</a>
                    <a href="#" className='bg-gray-200 text-black hover:!text-white 
                    hover:bg-orange-600 no-underline rounded px-2 text-base py-1'>Restaurants</a>
                </div>
            </div>
        </div>      
      </div>
    </>
  )
}

export default Blog
