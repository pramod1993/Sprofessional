import React  from 'react'
import Cards from './Card';
import list from './Data';
const Amazone = ({handleClick}) => {
  return (
    <div className="grid-cols-3 grid gap-3">
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick}/>
        ))}
    </div>
  )
}

export default Amazone
