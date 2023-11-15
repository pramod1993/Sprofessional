import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai';
import Listdate from './Listdate';
import data from './data';
const ListView = () => {
    
  return (
    <>
      <div className="container">
        <div className='flex gap-3'>
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
            <div className="w-3/4 grid gap-3">
                {data.map((item)=>(
                    <Listdate key={item.id} item={item} />
                ))} 
            </div>            
        </div>
      </div>
    </>
  )
}

export default ListView
