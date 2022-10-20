import frame from '../Assets/frame.png';
import frame1 from '../Assets/frame1.png';
import frame2 from '../Assets/frame2.png';
import frame4 from '../Assets/frame4.png';
import frame5 from '../Assets/frame5.png';
import { FaSearch } from 'react-icons/fa';

const Gallery = () => {
    return (
        <div className='text-white space-y-16'>


        <div className='md:flex space-y-6'>
        <div className='space-y-6'>
        <h1 className='font-bold text-4xl'>Art in the collection</h1>
        <p>Browse a curated selection of art around the world, including museum exhibitions, gallery openings, upcoming and many more</p>
        </div>

        <div className='md:flex  md:w-full '>
            <div className='flex space-x-4 p-1 h-10 border rounded-full md:w-full text-amber-600'>
            <FaSearch className='w-6 h-8'/>
            <input className='w-full bg-transparent text-amber-600' placeholder='search' type='search'/>
            </div>
        </div>
        </div>

        <div className='md:grid grid-cols-3 space-x-4 space-y-4'>

            <div className=''>
               <img src={frame} alt='frame' />
            </div>

            <div className=''>
               <img src={frame1} alt='frame' />
            </div>

            <div className=''>
               <img src={frame2} alt='frame' />
            </div>

            <div className=''>
            <img src={frame4} alt='frame' />
          </div>

          <div className=''>
          <img src={frame5} alt='frame' />
       </div>

       <div className=''>
       <img src={frame5} alt='frame' />
    </div>



        </div>

       

        

        </div>
        
    )
}

export default Gallery