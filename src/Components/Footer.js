import explore from '../Assets/explore.png';
import explore2 from '../Assets/explore2.png';

const Footer = () => {
    return (
        <div className='p-8'>
             <button className='flex relative'>
                <img src={explore2} alt='explore'/>

         <div className='absolute -left-2 -top-2'>
            <img src={explore} alt='explore' />
         </div>
         </button> 
        </div>
    )
}

export default Footer;