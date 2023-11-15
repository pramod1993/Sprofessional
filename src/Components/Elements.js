import React, { useState } from 'react'
import grid from '../img/grid.jpg';
import {BsList} from 'react-icons/bs';
import {BsFillGridFill} from 'react-icons/bs';
import GridView from './GridView';
import ListView from './ListView';

const Elements = () => {
    const[view, setView] = useState(false); 

  return (
    <>
      <div className='py-32' style={{background:`url(${grid})`, backgroundAttachment:'fixed', 
      backgroundRepeat:'no-repeat', backgroundSize:'cover',backgroundPosition:'center'}}>
        <div className='bg-slate-900 px-2 py-1 text-white w-1/3 m-auto  text-center '>
            <h2 className='text-3xl font-semibold'>SHOES - GRID LISTING</h2>
        </div>        
      </div>

        <div className='bg-slate-100'>
            <div className="container py-2">
                <div className='md:grid-cols-3 grid gap-3 items-center'>
                <div>
                    <select name="select" className='px-3 py-2'>
                        <option value="Sort by popularity">Sort by popularity</option> 
                        <option value="Sort by popularity">Sort by popularity</option> 
                        <option value="Sort by popularity">Sort by popularity</option> 
                        <option value="Sort by popularity">Sort by popularity</option> 
                        <option value="Sort by popularity">Sort by popularity</option> 
                    </select>
                </div>
                <div className='text-center'>
                    <h2 className="text-xl font-semibold">8 Total Product</h2>
                </div>
                    <div className='flex gap-3 justify-end items-center'>
                        <button className='w-8 h-8 bg-gray-400 justify-center items-center flex  Active:bg-blue-600'  onClick={() => setView(false)}><BsFillGridFill/></button>
                        <button className='w-8 h-8 bg-gray-400 justify-center items-center flex Active:bg-blue-600' onClick={() => setView(true)}><BsList/></button>
                    </div>
                </div>
            </div>
        </div>
                <div className="container  my-3">
                {
                view === true ? <> 
                    <ListView/>                
                </> : <>
                    <GridView/>
                </>
            }
            </div>
        
    </>
  )
}

export default Elements
