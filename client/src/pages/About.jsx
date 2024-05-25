
const About = () => {
  return (
    <div className='bg-grays-100 min-h-screen w-full'>
      <div className='max-w-7xl mx-auto relative'>
        <img
          src='./images/aboutOne.jpg'
          alt='People joining hands'
          className='w-full h-[560px] object-cover'
        />
        <div className='absolute top-0 left-0 h-full w-full bg-black/60'></div>
      </div>
      <div className='mt-20 max-w-7xl mx-auto px-3'>
        <h2 className='text-3xl md:text-4xl text-reds'>About SafeSpace Kids</h2>
        <p className='mt-10 text-xl md:max-w-[60%]'>Welcome to SafeSpace Kids, a nurturing and tech-free haven where children can learn, express themselves, and be heard. Our mission is to provide a supportive environment that fosters creativity, personal growth, and community engagement. We believe every child deserves a safe space to explore their interests, develop essential life skills, and build meaningful connections.</p>
        <h2 className='text-3xl mt-32 md:text-4xl text-reds'>Our Commitment</h2>
        <p className='mt-10 text-xl md:max-w-[60%]'>SafeSpace Kids is dedicated to creating an inclusive, supportive, and safe environment where every child&apos;s voice is valued. Our trained staff are committed to providing personalized attention, ensuring that each child feels understood and supported.</p>
        <h2 className='text-3xl mt-32 md:text-4xl text-reds'>Get Involved</h2>
        <p className='mt-10 text-xl md:max-w-[60%]'>Join us at SafeSpace Kids and be part of a community that values growth, creativity, and connection. Whether you&apos;re a parent looking to enroll your child, a volunteer eager to make a difference, or a supporter interested in contributing to our mission, we welcome you to our SafeSpace Kids family.</p>
      
      </div>
    </div>
  );
}

export default About;
