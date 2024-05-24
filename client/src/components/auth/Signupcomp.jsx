import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Signupcomp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='bg-grays-200 px-3 py-5 mx-3 rounded mt-10'>
      <h2 className='text-xl'>Create Account</h2>
      <form className='mt-5'>
        <input
          type='text'
          placeholder='Full name'
          className='inputOne'
        />
        <input
          type='text'
          placeholder='Email'
          className='inputOne mt-2'
        />
        <div className='inputOne mt-2 flex items-center justify-between pr-2'>
          <input
            type={showPassword ? 'text' : 'password'}
            className='w-full h-full bg-transparent outline-none'
            placeholder='Password'
          />
          <span
            className='cursor-pointer'
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <div className='inputOne mt-2 flex items-center justify-between pr-2'>
          <input
            type={showPassword ? 'text' : 'password'}
            className='w-full h-full bg-transparent outline-none'
            placeholder='Confirm password'
          />
          <span
            className='cursor-pointer'
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <button className='bg-secondary hover:bg-secondary-600 duration-200 w-full h-10 text-center rounded mt-2'>
          Sign Up
        </button>
        <p className='text-sm mt-5'>Already have an account? <Link className='linkOne' to={'/login'}>Log In</Link></p>
      </form>
      <div className='mt-10'>
        <div className='flex w-full justify-center items-center gap-3'>
          <hr className='h-[1px] w-[48%] border-none bg-grays-400' />
          <span>OR</span>
          <hr className='h-[1px] w-[48%] border-none bg-grays-400' />
        </div>
        <div className='mt-4 flex justify-center gap-5 items-center bg-secondary/50 hover:bg-secondary/90 cursor-pointer duration-200 rounded-full h-10'>
          <FcGoogle size={25} />
          <span>Continue with Google</span>
        </div>
      </div>
    </div>
  );
}

export default Signupcomp;
