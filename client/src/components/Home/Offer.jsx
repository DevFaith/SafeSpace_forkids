import { whyUs } from '../../data/dataOne';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Offer = () => {
  AOS.init();

  return (
    <div className='pt-32 container max-w-7xl mx-auto px-3'>
      <p className='text-reds text-center text-2xl md:text-3xl'>Why choose us :</p>
      <div className='w-full mx-auto grid md:grid-cols-3 gap-20 md:gap-5 mt-16'>
        {whyUs.map((option, index) => {
          return (
            <div
              key={index}
              className='max-w-80 mx-auto'
              data-aos='zoom-in-up'
              data-aos-duration='1000'
            >
              <div>
                <img
                  src={option.image}
                  className='w-full h-44 object-cover rounded-sm'
                  alt=''
                />
              </div>
              <div className='mt-5'>
                <h3 className='text-xl font-semibold'>{option.name}</h3>
                <p className='mt-3 text-sm font-light'>{option.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Offer;
