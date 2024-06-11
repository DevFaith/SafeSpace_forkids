import { useState,useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navs } from '../data/dataOne';
import { FaBarsStaggered } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
      console.log("Env: ", import.meta.env)
  }, []);

  let location = useLocation();
  location = location.pathname.split('/')[1];

  return (
    <div className='w-full relative h-16 bg-grays-100 border-b border-grays-200 px-5 flex justify-between items-center'>

      <div className='flex justify-start gap-20 items-center'>
        <Link to={'/'}>
          <h2 className='text-2xl md:text-3xl text-nowrap'>SafeSpace<span className='text-sm md:text-base text-primary '>_forkids</span></h2>
        </Link>
        <li className='hidden lg:flex justify-start gap-2 items-center'>
          {navs.map((nav, index) => {
            return (
              <Link
                key={index}
                to={`/${nav.link}`}
                className={nav.link === location ? 'bg-grays/40 hover:bg-grays/55 duration-200 py-2 px-6 rounded-full' : 'hover:bg-grays/15 duration-200 py-2 px-6 rounded-full'}
              >
                <ul>{nav.name}</ul>
              </Link>
            )
          })}
        </li>
      </div>

      <div className='flex justify-end gap-3 items-center'>
        <Link
          to={'/login'}
          className='hidden lg:block'
        >
          <span className='py-2 px-6 text-nowrap bg-primary hover:bg-primary-600 duration-200 rounded'>Log In</span>
        </Link>
        <div
          className='block lg:hidden p-3 hover:bg-grays/15 cursor-pointer duration-200 rounded-full'
          onClick={() => setDropdown(!dropdown)}
        >
          <FaBarsStaggered size={25} />
        </div>
      </div>

      {dropdown && (
        <div className='absolute top-0 left-0 w-full h-screen bg-grays-100'>
          <div className='relative'>
            <div
              className='absolute top-3 right-3 hover:bg-grays/15 cursor-pointer duration-200 rounded-full p-3'
              onClick={() => setDropdown(!dropdown)}
            >
              <IoMdClose size={25} />
            </div>
            <div className='pt-20'>
              <li className='flex flex-col justify-start gap-10 items-center'>
                {navs.map((nav, index) => {
                  return (
                    <Link
                      key={index}
                      to={`/${nav.link}`}
                      onClick={() => setDropdown(!dropdown)}
                      className={nav.link === location ? 'bg-grays/40 hover:bg-grays/55 duration-200 py-2 px-6 rounded-full' : 'hover:bg-grays/15 duration-200 py-2 px-6 rounded-full'}
                    >
                      <ul>{nav.name}</ul>
                    </Link>
                  )
                })}
              </li>
              <button className='w-full mt-10'>
                <Link
                  to={'/login'}
                  onClick={() => setDropdown(!dropdown)}
                >
                  <span className='py-2 px-10 text-center w-full text-nowrap bg-primary hover:bg-primary-600 duration-200 rounded'>Log In</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Header;
