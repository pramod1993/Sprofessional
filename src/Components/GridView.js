import React, { useState } from 'react'
import data from './data';
import Griddata from './Griddata';  
const GridView = () => { 
 
      
  return (
    <>
      <div className="container">
        <div className="md:grid-cols-4 grid gap-3 mt-4">
            
          {data.map((item)=>(
            <Griddata key={item.id} item={item}/>
          ))}
            
            
        </div>
      </div>
    </>
  )
}

export default GridView
