import { FiPhoneCall } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
      <div className='bg-grays-100 min-h-screen w-full flex float-right'>
        <div className='max-w-7xl mx-auto relative'>
          <img
            src='./images/contact.webp'
            alt='People joining hands'
            className='w-[560px] h-[560px] object-cover'
          />
          {/* <div className='absolute top-0 left-0 h-full w-full bg-black/60'></div> */}
        </div>
        <div className='mt-10 max-w-2xl mx-auto px-2'>
          
          <FiPhoneCall className='h-8 w-8' />
          
        
          <h2 className='text-3xl md:text-4xl text-reds'>Give us a Call and Get intouch</h2>
          <p className='mt-10 text-xl md:max-w-[60%]'>And we will not hesitate to pick it up or even call back. <br />no.+254 769313712 <br /> <br />Email @ <br /><a href="waitherafaith@outlook.com">waitherafaith@outlook.com</a></p>
          <h2 className='text-3xl mt-32 md:text-4xl text-reds'>Social media handles</h2>
          <FaLinkedin className='h-8 w-8'/><h1>Linkedin</h1>
          <IoLogoWhatsapp className='h-8 w-8'/><h1>Whatsup</h1>
          
          <p className='mt-10 text-xl md:max-w-[60%]'> 

</p>
          
        
        </div>
      </div>
    );
}

export default Contact