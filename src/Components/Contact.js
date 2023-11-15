import React from 'react'
import {TfiSupport} from 'react-icons/tfi';
import {FiPackage} from 'react-icons/fi';
import {FaMapMarkedAlt} from 'react-icons/fa';
const Contact = () => {
  return (
    <>
      <div className=' bg-slate-200'>
        <div className="container py-3 text-center">
             <h1 className="text-3xl text-semibold">
                Contact Us
             </h1>
             <p className="text-xl">Euismod phasellus ac lectus fusce parturient cubilia a <br /> nisi blandit sem cras nec tempor adipiscing rcu ullamcorper ligula.</p>
        </div>
    </div>
    <div className="container">
        <div className="grid-cols-3 grid gap-3 my-4">
            <div className='text-center border p-3'>
            <div className='justify-center items-center flex mb-3'>
                <TfiSupport className='text-4xl text-orange-600'/>
            </div>
             <h3 className="text-2xl font-semibold">Professionl Help Center</h3>
                <p className='m-0'>+91 1234567809 - help@pramod.com</p>
                <small>MON to FRI 9am-6pm SAT 9am-2pm</small>
            </div>
            <div className='text-center border p-3'>
                <div className='justify-center items-center flex mb-3'>
                    <FaMapMarkedAlt className='text-4xl text-orange-600'/>
                </div>
                
                <h3 className="text-2xl font-semibold">Professionl Showroom</h3>
                <p className='m-0'>6th Forrest Ray, London - 10001 UK</p>
                <small>MON to FRI 9am-6pm SAT 9am-2pm</small>
            </div>
            <div className='text-center border p-3'>
                <div className='justify-center items-center flex mb-3'>
                <FiPackage className='text-4xl text-orange-600'/>
                </div>
                <h3 className="text-2xl font-semibold">Professionl Orders</h3>
                <p className='m-0'>+91 1234567809 - help@pramod.com</p>
                <small>MON to FRI 9am-6pm SAT 9am-2pm</small>
            </div>
        </div>
    </div>
    <div className="container my-4">
        <h2 className='font-bold'>Drop Us a Line</h2>
        <div className='md:flex gap-4'>
            <div className='w-1/4'>
                <form action="" className='grid gap-3'>
                    <input type="text" placeholder='Name*' className='border px-2 py-2'/>
                    <input type="Email" placeholder='Email*' className='border px-2 py-2' />
                    <textarea name="massege" cols="30" rows="6" className='border  px-2 py-2'></textarea>
                    <input type="submit" value="Submit" className='bg-orange-600 text-white py-2' />
                </form>
            </div>
            <div className='w-3/4'>
                <div className='w-full'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.091739732266!2d85.36205097406483!3d25.734479609731938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed65a420570e15%3A0xa2d2622b0a33e4ae!2sPramod%20Singh%20(Bihari)!5e0!3m2!1sen!2sin!4v1699353771063!5m2!1sen!2sin" height="340" className='w-full'  loading="lazy"></iframe>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact
