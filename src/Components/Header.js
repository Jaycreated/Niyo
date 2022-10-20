import logo from '../Assets/logo.png';
import login from '../Assets/login.png';
import login2 from '../Assets/login2.png';
import explore from '../Assets/explore.png';
import explore2 from '../Assets/explore2.png';

const Header = () => {
    return (
        <div className='md:flex justify-between md:px-8 md:p-8'>
            <div className='font-bold flex space-x-2 text-white'>
            <img src={logo} alt='logo'/>
                <p className='text-xl'>Artisto</p>
            </div>

            <div className='text-white flex space-x-8'>
            <div className='md:flex space-x-8'>
            <p>Events</p>
            <p>Museum</p>
            <p>Arts</p>
            <p>Gallery</p>
            </div>

            <div className='flex space-x-8'>


            <button className='flex relative'>
            <img src={login2} alt='explore' width={96}/>

            <div className='absolute -left-2 -top-2'>
                <img src={login} alt='explore' />
            </div>
            </button>

            <button className='flex relative'>
            <img src={explore2} alt='explore' width={96}/>

            <div className='absolute -left-2 -top-2'>
                <img src={explore} alt='explore' />
            </div>
            </button>


            </div>
              
            </div>
        
        </div>
    )
}

export default Header