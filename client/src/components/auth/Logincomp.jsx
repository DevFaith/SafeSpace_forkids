import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Logincomp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='bg-grays-200 px-3 py-5 mx-3 rounded mt-10'>
      <h2 className='text-xl'>Log In</h2>
      <form className='mt-5'>
        <input
          type='text'
          placeholder='Email'
          className='inputOne'
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
        <p className='linkOne text-sm w-full text-right my-2'>
          <Link>Forgot password</Link>
        </p>
        <button className='bg-secondary hover:bg-secondary-600 duration-200 w-full h-10 text-center rounded mt-2'>
          Log In
        </button>
        <p className='text-sm mt-5'>Don&apos;t have an account? <Link className='linkOne' to={'/signup'}>Sign Up</Link></p>
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

export default Logincomp;
