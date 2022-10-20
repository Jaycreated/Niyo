import frame6 from '../Assets/frame6.png';
import frame7 from '../Assets/frame7.png';
import finger from '../Assets/finger.png';
import explore from '../Assets/explore.png';
import explore2 from '../Assets/explore2.png';

const Body = () => {
    return (

        
        <div className='md:flex pt-16 justify-between md:px-16'>

            <div className='space-y-16'>
                 <h1 className='text-white font-bold text-6xl'>Discover amazing <br/> art around the <p className='text-amber-600'>world</p></h1>

                 <p className='text-white md:w-96'>Browse a curated selection of art around the world, including museum exhibitions, gallery openings, upcoming and many more</p>

                 <button className='flex relative'>
                        <img src={explore2} alt='explore'/>

                        <div className='absolute -left-2 -top-2'>
                            <img src={explore} alt='explore' />
                        </div>
                 </button>
            </div>


            <div className='flex relative hidden md:block'>
                
                    <img  src={frame7} alt='first'/>
                

                 <div className='absolute -left-4 -top-4 flex'>
                     <img src={frame6} alt='yooo'/>

                     <div className='absolute -left-20 top-8'>
                        <img src={finger} alt='finger'/>
                     </div>
                </div> 
            </div>
            
        </div>

        
        
    )
}

export default Body;