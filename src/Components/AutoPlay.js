import React from 'react'
import Slider from "react-slick";
import brandlogo from '../img/logo.png';
import brandlogo1 from '../img/logo1.png';
import brandlogo2 from '../img/logo2.png';
import brandlogo3 from '../img/logo3.png';
import brandlogo4 from '../img/logo4.png';
import brandlogo5 from '../img/logo5.png';
const AutoPlay = () => {
    const settings = { 
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
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
      <Slider {...settings}>
          <div className='!grid justify-center items-center'>
            <img src={brandlogo} alt="brandlogo" className='w-52' />
          </div>
          <div className='!grid justify-center items-center'>
            <img src={brandlogo1} alt="brandlogo1" className='w-52'/>
          </div>
          <div className='!grid justify-center items-center'>
            <img src={brandlogo2} alt="brandlogo2" className='w-52'/>
          </div>
          <div className='!grid justify-center items-center'>
            <img src={brandlogo3} alt="brandlogo3" className='w-52' />
          </div>
          <div className='!grid justify-center items-center'>
            <img src={brandlogo4} alt="brandlogo4" className='w-52'/>
          </div>
          <div className='!grid justify-center items-center'>
            <img src={brandlogo5} alt="brandlogo5" className='w-52'/>
          </div>
        </Slider>
    </>
  )
}

export default AutoPlay
