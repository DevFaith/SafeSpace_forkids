import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  AOS.init();

  return (
    <div className='max-w-7xl mx-auto'>
      <div className='relative'>
        <img
          src='./images/hero.webp'
          alt=''
          className='h-fit w-full object-cover'
        />
        <div className='absolute top-0 left-0 h-full w-full bg-black/50 z-[5]'></div>
      </div>
      <div className='flex flex-col md:flex-row gap-10 mt-10 justify-evenly items-center px-2'>
        <div className='md:w-[55%]'>
          <p className='text-2xl md:text-3xl'>Welcome to <span className='text-reds'>SafeSpace Kids</span>: A platform where children can learn, express themselves freely, and be heard.</p>
        </div>
        <div className='md:w-[43%]'>
          <p
            data-aos='fade-up'
            data-aos-duration='600'
            data-aos-delay='200'
          >We are a nurturing haven where children can <span className='text-reds'>freely express their thoughts, emotions, and creativity</span>. Here, every child is given the opportunity to be <span className='text-reds'>heard, understood, and supported</span> through various engaging and enriching activities. We also offer simple technology courses, teaching basic computer skills, internet safety, beginner coding, and digital art to help kids <span className='text-reds'>navigate the digital world</span> confidently.</p>
          <div className='flex justify-start gap-10 mt-6'>
            <button
              data-aos='fade-left'
              data-aos-duration='600'
              data-aos-delay='200'
              className='bg-blues border border-blues hover:border-blues-600 px-6 py-2 rounded-md hover:bg-blues-600 text-grays-100 duration-200'
            >Get Started</button>
            <button
              data-aos='fade-left'
              data-aos-duration='600'
              data-aos-delay='400'
              className='border border-blues hover:border-blues-600 hover:bg-blues-600 hover:text-grays-100 px-6 py-2 rounded-md'
            >Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
