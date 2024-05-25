import { useState } from 'react';
import { askAnsw } from '../../data/dataOne';
import { FaPlus, FaMinus } from 'react-icons/fa6';  // Import FaMinus icon for toggling

const Faq = () => {
  const [openFaq, setOpenFaq] = useState(-1);

  const toggleFaq = (faqId) => {
    setOpenFaq(openFaq === faqId ? -1 : faqId);
  };

  return (
    <div className='pt-32 container max-w-7xl mx-auto px-3'>
      <p className='mt-20 text-center text-reds text-2xl md:text-3xl'>Do you have any questions?</p>
      <div className='mt-10 w-full flex flex-col gap-3'>
        {askAnsw.map((item, index) => (
          <div
            key={index}
            className='bg-grays-200 w-full px-3 py-5 max-w-2xl mx-auto rounded-md'
          >
            <div className='flex items-center justify-between'>
              <p className='text-2xl'>{item.name}</p>
              <div className='cursor-pointer' onClick={() => toggleFaq(index)}>
                {openFaq === index ? <FaMinus size={20} /> : <FaPlus size={20} />}
              </div>
            </div>
            {openFaq === index && (
              <div className='mt-5 px-2'>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <p className='mt-10 text-center'>Din&apos;t get answer to your questions or want to make an inquiry?</p>
      <div className='w-full flex justify-center mt-3'>
        <a href="/contact">
        <button
          className='bg-blues border border-blues hover:border-blues-600 px-6 py-2 rounded-md hover:bg-blues-600 text-grays-100 duration-200'
        >Contact Us</button>
        </a>
      </div>
    </div>
  );
}

export default Faq;
