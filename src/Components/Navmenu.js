import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import Offcanvas from 'react-bootstrap/Offcanvas';
import logomin from '../img/logomin.svg';
import * as Styled from './NavmenuStyled';
import {LuAlignJustify} from 'react-icons/lu'; 
import {MdNavigateNext} from 'react-icons/md';
import {AiOutlineSearch} from 'react-icons/ai';
import {LiaUserCircle} from 'react-icons/lia';
import {BsHeart} from 'react-icons/bs';
import {LiaShoppingBagSolid} from 'react-icons/lia';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import News from './News';
import Contact from './Contact';
import Elements from './Elements';
import Product from './Product'; 
import CheckOut from './CheckOut';
import Cart from './Cart';
const Navmenu = () => {
  return (
    <>
      <Router>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary">
          <div className='container'>
            <Navbar.Brand href="/"  className='w-32'><img src={logomin} alt="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <img src={logomin} alt="logo"  className='w-32' />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  <Nav.Link as={Link} to='/'>Home</Nav.Link>
                  <Nav.Link  as={Link} to='/about'>About Us</Nav.Link>
                  <Nav.Link  as={Link} to='/elements'>Elements</Nav.Link>
                  <Nav.Link  as={Link} to='/portfolio'>Portfolio</Nav.Link>
                  <Nav.Link  as={Link} to='/news'>News</Nav.Link> 
                  <Nav.Link  as={Link} to='/blog'>Blog</Nav.Link>
                  <Nav.Link  as={Link} to='/contact'>Contact Us</Nav.Link>
                  
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
        </Navbar>
      ))}
            
      <div className='bg-orange-600'>
        <div className="container">
            <div className='py-2 flex items-center gap-3'>
                <div className='w-1/4 '>
                    <ul className='p-0 m-0'>
                        <Styled.categories className='text-base font-semibold uppercase'> <LuAlignJustify className='mr-1'/> Categories
                            <ul className='submenu'>
                                <Styled.categories1>
                                    Collections <span className='absolute right-0 top-1.5 text-2xl'><MdNavigateNext className=' fill-white'/></span>
                                    <ul className='rightmenu'>
                                        <li className='pb-1'>
                                            <a href="#" className='no-underline text-black'>Trending</a>
                                        </li>
                                        <li className='pb-1'>
                                            <a href="#" className='no-underline text-black'>Life style</a>
                                        </li>
                                        <li className='pb-1'>
                                            <a href="#" className='no-underline text-black'>Running</a>
                                        </li>
                                        <li className='pb-1'>
                                            <a href="#" className='no-underline text-black'>Training</a>
                                        </li>
                                        <li className='pb-1'>
                                            <a href="#" className='no-underline text-black'>View all Collections</a>
                                        </li>
                                    </ul>
                                </Styled.categories1>
                                <Styled.categories1>
                                    Men  <span className='absolute right-0 top-1.5 text-2xl'><MdNavigateNext className=' fill-white'/></span>
                                    <ul className='rightmenu'>
                                        <li className='pb-1'>
                                            <a href="#" className='no-underline text-black'>Offers</a>
                                        </li>
                                        <li className='pb-1'>
                                            <a href="#" className='no-underline text-black'>Shoes</a>
                                        </li>
                                        <li className='pb-1'>
                                            <a href="#" className='no-underline text-black'>Clothing</a>
                                        </li>
                                        <li className='pb-1'>
                                            <a href="#" className='no-underline text-black'>Accessories</a>
                                        </li>
                                        <li className='pb-1'>
                                            <a href="#" className='no-underline text-black'>Equipment</a>
                                        </li>
                                    </ul>
                                </Styled.categories1>
                                <Styled.categories1>
                                    Women  <span className='absolute right-0 top-1.5 text-2xl'><MdNavigateNext className=' fill-white'/></span>
                                    <ul className='rightmenu'>
                                        <li className='pb-1'>
                                            <a href="#" className='no-underline text-black'>Best Sellers</a>
                                        </li>
                                        <li className='pb-1'>
                                            <a href="#" className='no-underline text-black'>Clothing</a>
                                        </li>
                                        <li className='pb-1'>
                                            <a href="#" className='no-underline text-black'>Accessories</a>
                                        </li>
                                        <li className='pb-1'>
                                            <a href="#" className='no-underline text-black'>Shoes</a>
                                        </li> 
                                    </ul>
                                </Styled.categories1>
                                <Styled.categories1>
                                    Boys  <span className='absolute right-0 top-1.5 text-2xl'><MdNavigateNext className=' fill-white'/></span>
                                    <ul className='rightmenu'>
                                        <li className='pb-1'>
                                            <a href="#" className='no-underline text-black'>Easy On Shoes</a>
                                        </li>
                                        <li className='pb-1'>
                                            <a href="#" className='no-underline text-black'>Clothing</a>
                                        </li>
                                        <li className='pb-1'>
                                            <a href="#" className='no-underline text-black'>Must Have</a>
                                        </li>
                                        <li className='pb-1'>
                                            <a href="#" className='no-underline text-black'>All Boys</a>
                                        </li> 
                                    </ul>
                                </Styled.categories1>
                                <Styled.categories1>
                                    Girls  <span className='absolute right-0 top-1.5 text-2xl'><MdNavigateNext className=' fill-white'/></span>
                                    <ul className='rightmenu'>
                                        <li className='pb-1'>
                                            <a href="#" className='no-underline text-black'>New Releases</a>
                                        </li>
                                        <li className='pb-1'>
                                            <a href="#" className='no-underline text-black'>Clothing</a>
                                        </li>
                                        <li className='pb-1'>
                                            <a href="#" className='no-underline text-black'>Sale</a>
                                        </li>
                                        <li className='pb-1'>
                                            <a href="#" className='no-underline text-black'>Best Sellers</a>
                                        </li> 
                                    </ul>
                                </Styled.categories1>
                                <Styled.categories1>
                                    Customize  <span className='absolute right-0 top-1.5 text-2xl'><MdNavigateNext className=' fill-white'/></span>
                                    <ul className='rightmenu'>
                                        <li className='pb-1'>
                                            <a href="#" className='no-underline text-black'>For Men</a>
                                        </li>
                                        <li className='pb-1'>
                                            <a href="#" className='no-underline text-black'>For Women</a>
                                        </li>
                                        <li className='pb-1'>
                                            <a href="#" className='no-underline text-black'>For Boys</a>
                                        </li>
                                        <li className='pb-1'>
                                            <a href="#" className='no-underline text-black'>For Girls</a>
                                        </li> 
                                    </ul>
                                </Styled.categories1>
                            </ul>
                        </Styled.categories>
                    </ul>
                </div>
                <div className='w-1/2 relative'>
                    <input type="search" name="search" className='w-full outline-none pr-9 pl-3 py-2 rounded' placeholder='Search over 10.000 products' />
                    <span className='absolute py-[8px] right-[3px] text-2xl'><AiOutlineSearch/></span>
                </div>
                <div className='w-1/4'>
                    <div className='flex items-center md:gap-3 md:pl-3 pl-0 relative'>
                        <LiaUserCircle className='text-white h-7 w-7'/>
                        <BsHeart className='text-white  h-6 w-6'/>
                        <a href='/cart' className='relative'><LiaShoppingBagSolid  className='text-white h-8 w-8'/>
                        <span className='absolute left-4 top-4 bg-orange-300 w-4 h-4 p-1 rounded-full '>
                        <sub className='items-center flex justify-center text-white'>0</sub></span></a>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/elements' element={<Elements/>}/>
            <Route path='/elements/product' element={<Product/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<CheckOut/>}/>
        </Routes>
      </div>
      </Router>
    </>
  )
}

export default Navmenu
