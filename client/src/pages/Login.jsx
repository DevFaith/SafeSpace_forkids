import Logincomp from '../components/auth/Logincomp';

const Login = () => {
  return (
    <div className='bg-grays-100 min-h-screen flex justify-between'>
      <div className='w-[360px] md:max-w-[47%] mx-auto'>
        <Logincomp />
      </div>
      <div className='h-full hidden md:block w-[50%]'>
        <img
          src='./images/login.png' alt=''
          className='w-full h-screen object-cover hidden md:block'
        />
      </div>
    </div>
  );
}

export default Login;
