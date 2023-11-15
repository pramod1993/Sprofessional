import React from 'react'
import about from '../img/about_1.svg';
import about1 from '../img/about_2.svg';
import about2 from '../img/about_3.svg';
import about3 from '../img/arrow_about.png'; 
import {PiMedalFill} from 'react-icons/pi';
import {BiHelpCircle} from 'react-icons/bi';
import {TfiGift} from 'react-icons/tfi';
import {FaHeadset} from 'react-icons/fa6';
import {LuWallet} from 'react-icons/lu';
import {TfiComments} from 'react-icons/tfi';
const About = () => {
  return (
    <>
    <div className="container">
        <div className='text-center py-5'>
            <h1 className='text-4xl font-semibold'>About</h1>
            <p className='text-xl'>Euismod phasellus ac lectus fusce parturient cubilia a nisi blandit <br/> sem cras nec tempor adipiscing rcu ullamcorper ligula.</p>
        </div>
    </div>
    <div className="container">
        <div className="md:grid-cols-2 grid gap-5">
            <div className='bg-slate-50 p-3 shadow-md'>
                <h2>Top Products</h2>
                <h4>Est falli invenire interpretaris id, magna libris sensibus mel id.</h4>
                <p>Per eu nostrud feugiat. Et quo molestiae persecuti neglegentur. At zril 
                definitionem mei, vel ei choro volumus. An tota nulla soluta has, ei nec 
                essent audiam, te nisl dignissim vel. Ex velit audire perfecto pro, ei mei 
                doming vivendo legendos. Cu sit magna zril, an odio delectus constituto vis. 
                Vis ludus omnesque ne, est veri quaeque ad.</p>
            </div>
            <div className='p-3'>
                <img src={about} alt="about" />
            </div>
                
            <div className='relative p-3'>
                <img src={about1} alt="about" />
                <img src={about3} alt="about3"  className='absolute top-0 right-0 origin-top-right'/>
            </div>
            <div className='bg-slate-50 p-3 shadow-md'>
                <h2>Top Brands</h2>
                <h4>Est falli invenire interpretaris id, magna libris sensibus mel id.</h4>
                <p>Per eu nostrud feugiat. Et quo molestiae persecuti neglegentur. At zril 
                definitionem mei, vel ei choro volumus. An tota nulla soluta has, ei nec 
                essent audiam, te nisl dignissim vel. Ex velit audire perfecto pro, ei mei 
                doming vivendo legendos. Cu sit magna zril, an odio delectus constituto vis. 
                Vis ludus omnesque ne, est veri quaeque ad.</p>
            </div>
            <div className='bg-slate-50 p-3 shadow-md'>
                <h2>+5000 products</h2>
                <h4>Est falli invenire interpretaris id, magna libris sensibus mel id.</h4>
                <p>Per eu nostrud feugiat. Et quo molestiae persecuti neglegentur. At zril 
                definitionem mei, vel ei choro volumus. An tota nulla soluta has, ei nec 
                essent audiam, te nisl dignissim vel. Ex velit audire perfecto pro, ei mei 
                doming vivendo legendos. Cu sit magna zril, an odio delectus constituto vis. 
                Vis ludus omnesque ne, est veri quaeque ad.</p>
            </div>
            <div className='relative p-3'>
                <img src={about2} alt="about" />
                <img src={about3} alt="about3"  className='absolute top-0 left-0 scale-x-[-1] origin-top-left'/>
            </div>
        </div>
    </div>
      <div className="container mb-4">
        <div className="text-center">
            <h1 className="text-4xl">Why Choose Allaia</h1>
            <p className="text-xl">Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
        </div>
        <div className="md:grid-cols-3 grid gap-3">
            <div className='border p-3 bg-slate-100 shadow-md text-center'>
                <div className="flex justify-center text-5xl text-orange-600">
                    <PiMedalFill/>
                </div>
                <p><strong>+ 1000 Customers</strong></p>
                <p>Id mea congue dictas, nec et summo mazim impedit. Vim te 
                    audiam impetus interpretaris, cum no alii option, cu sit mazim libris.</p>
            </div>
            <div className='border p-3 bg-slate-100 shadow-md text-center'>
                <div className="flex justify-center text-5xl text-orange-600">
                    <BiHelpCircle/>
                </div>
                <p><strong>H24 Support</strong></p>
                <p>Id mea congue dictas, nec et summo mazim impedit. Vim te 
                    audiam impetus interpretaris, cum no alii option, cu sit mazim libris.</p>
            </div>
            <div className='border p-3 bg-slate-100 shadow-md text-center'>
                <div className="flex justify-center text-5xl text-orange-600">
                    <TfiGift/>
                </div>
                <p><strong>Great Sale Offers</strong></p>
                <p>Id mea congue dictas, nec et summo mazim impedit. Vim te 
                    audiam impetus interpretaris, cum no alii option, cu sit mazim libris.</p>
            </div>
            <div className='border p-3 bg-slate-100 shadow-md text-center'>
                <div className="flex justify-center text-5xl text-orange-600">
                    <FaHeadset/>
                </div>
                <p><strong>Help Direct Line</strong></p>
                <p>Id mea congue dictas, nec et summo mazim impedit. Vim te 
                    audiam impetus interpretaris, cum no alii option, cu sit mazim libris.</p>
            </div>
            <div className='border p-3 bg-slate-100 shadow-md text-center'>
                <div className="flex justify-center text-5xl text-orange-600">
                    <LuWallet/>
                </div>
                <p><strong>Secure Payments</strong></p>
                <p>Id mea congue dictas, nec et summo mazim impedit. Vim te 
                    audiam impetus interpretaris, cum no alii option, cu sit mazim libris.</p>
            </div>
            <div className='border p-3 bg-slate-100 shadow-md text-center'>
                <div className="flex justify-center text-5xl text-orange-600">
                    <TfiComments/>
                </div>
                <p><strong>Support via Chat</strong></p>
                <p>Id mea congue dictas, nec et summo mazim impedit. Vim te 
                    audiam impetus interpretaris, cum no alii option, cu sit mazim libris.</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default About
