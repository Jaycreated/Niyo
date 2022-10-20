import Body from './Components/Body';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import Header from './Components/Header';

function App() {
  return (
    <div className='bg-black md:px-16 space-y-16 p-6'>
        <Header />
        <Body />
        <Gallery />
        <Footer />


    </div>
  );
}

export default App;
