import Faq from '../components/Home/Faq';
import Hero from '../components/Home/Hero';
import Offer from '../components/Home/Offer';

const Home = () => {
  return (
    <div className='bg-grays-100 min-h-screen w-full'>
      <Hero />
      <Offer />
      <Faq />
    </div>
  );
}

export default Home;
