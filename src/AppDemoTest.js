import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './demo/Navbar';
import Amazone from './demo/Amazone';
import { useState } from 'react';  
import Cart from './demo/Cart';
// import Navmenu from './Components/Navmenu';
// import Footer from './Components/Footer'; 

function App() {
  const [show, setShow] = useState(true);

  const [cart, setCart] = useState([]);
  //new
  const [warning, setWarning] = useState(false);

    // const handleClick = (item) => {
    //   if (cart.indexOf(item) !== -1) return;
    //    setCart([...cart, item]);
    // };
//new
    const handleClick = (item) => {
      let isPresent = false;
      cart.forEach((product) =>{
        if (item.id === product.id)
        isPresent = true;
      })
      if (isPresent){
          setWarning(true);
          setTimeout(() =>{
            setWarning(false);
          }, 2000)
          return;
      }
        setCart([...cart, item]);
    };
//ind
    // const handleChange = (item, d) =>{
    //   const ind = cart.indexOf(item);
    //   const arr = cart;
    //   arr[ind].amount += d;

    //   if (arr[ind].amount === 0) arr[ind].amount = 1;
    //   setCart([...arr]);
    // }

    //new
    const handleChange = (item, d) =>{
      let ind = -1;
      cart.forEach((data, index)=>{
        if (data.id === item.id)
        ind = index;
      });
      const tempArr = cart;
      tempArr[ind].amount += d;
      if (tempArr[ind].amount === 0)
      tempArr[ind].amount = 1;
    setCart([...tempArr])
    }

  return (
    <div className="App">
      {/* <Navmenu/> 
      <Footer/> */}
       <Navbar setShow={setShow} size={cart.length}/>
       <div className="container">
        {show ? 
          <Amazone handleClick={handleClick}/>
           : 
           <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
           }

        {/* {
          show ? <Amazone handleClick={handleClick}/> : 'cart'
            <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
        } */}
        {
          warning && <div className='bg-red-300 p-3 absolute right-[5%] top-[20%]'>item is already add to your card</div>
        }
       </div>
       
    </div>
  );
}

export default App;
