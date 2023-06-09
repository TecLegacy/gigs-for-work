import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SignIn from './SignIn';
import Avatar from './avatar/Avatar';

// Styles
const between = `flex items-center   `;
const listEffect = 'transition  duration-500 hover:text-orange-300';
const isLargerDevice = `mx-auto mb-4 flex w-5/6 items-center
justify-center rounded-[5px] px-8 py-4 
md:w-full md:text-sm
sm:w-full sm:text-base sm:px-6 sm:py-3`;
const isMediumDevice = `mx-auto mt-0 mb-4 flex w-5/6 items-center
 justify-center rounded-[5px]  px-8 py-4  
`;

type Props = {};

// User Interface
interface User {
  id: number;
  userName: string;
  isSeller: boolean;
}

// NavBar Component
const NavBar: React.FC = (props: Props) => {
  const { pathname } = useLocation();

  console.log(location, typeof location, 'location');
  const [matches, setMatches] = useState<boolean>(false);
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);

  // user-data
  const userData: User = {
    id: 1,
    userName: 'John Doe',
    isSeller: false,
  };

  //  MENU ITEM
  const menuItem = [
    'Graphics & Design',
    'Digital Marketing',
    'Writing & Translation',
    'Video & Animation',
    'Photography',
    'Programming & Tech',
    'AI Services',
  ];
  const isActive = () => {
    window.scrollY > 10 ? setActive(true) : setActive(false);

    window.scrollY > 200 ? setActive2(true) : setActive2(false);
  };

  useEffect(() => {
    // TOP SCROLL EFFECT
    window.addEventListener('scroll', isActive);

    // MEDIA QUERY
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setMatches(mediaQuery.matches);

    const handleMediaQueryChange = (e: MediaQueryListEvent) =>
      setMatches(e.matches);

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
      window.removeEventListener('scroll', isActive);
    };
  }, []);

  const navStyle = matches ? isLargerDevice : isMediumDevice;

  return (
    <>
      <nav
        className={
          active || pathname !== '/'
            ? 'sticky top-0 bg-blue-dark    opacity-90  transition duration-500 ease-in-out'
            : ''
        }
      >
        <div
          className={`${navStyle} ${
            active || pathname !== '/'
              ? ''
              : 'shadow-nav transition duration-500 ease-in-out'
          }`}
        >
          <div className={` ${between}justify-between  md:w-full `}>
            <div className='  ml-12 cursor-pointer text-2xl'>
              <Link to={'/'} className=' text-[green]'>
                Hire
              </Link>
              <span className=' text-2xl  text-[#ac7329] '>.</span>
              <span>🦆</span>
            </div>

            <div className=' mr-8 flex items-center '>
              <ul className=' font-[600] text-md   flex  cursor-pointer gap-8 px-2 '>
                <li className={listEffect}>Hire Business</li>
                {!userData?.isSeller && (
                  <li className={listEffect}>Sell with Us</li>
                )}
                <li className={listEffect}>Explore</li>
              </ul>

              {/*SIGN & LOGIN */}
              {/* <SignIn active={active} /> */}

              {/* USER AVATAR */}

              {userData?.isSeller ? (
                <Avatar
                  isSeller={userData?.isSeller}
                  userName={userData?.userName}
                />
              ) : (
                // Same component render but without gigs and add new gigs link
                <Avatar
                  isSeller={userData?.isSeller}
                  userName={userData?.userName}
                />
              )}
            </div>
          </div>
        </div>

        {/* Menu active on scroll */}
        {active2 || pathname !== '/' ? (
          <>
            <hr className=' border-t-1  border-slate-400' />
            <div
              className={
                matches
                  ? ' mx-auto mt-2 flex  w-full cursor-pointer items-center justify-between  gap-4 px-3 text-xs  text-[#62646a]'
                  : 'mx-auto mt-2 flex w-5/6 cursor-pointer  items-center justify-between text-sm text-[#62646a]'
              }
            >
              {menuItem.map((item, index) => (
                <div
                  key={item + index}
                  className='group mb-4  tooltip  tooltip-bottom  tooltip-info '
                  data-tip='Fixing⚠'
                >
                  <Link to={'/'}>
                    {item}
                    <div className='mx-auto h-1 w-3/4 transition duration-300 ease-out group-hover:bg-[#1dbf73]'></div>
                  </Link>
                </div>
              ))}
            </div>
          </>
        ) : (
          ''
        )}
      </nav>
    </>
  );
};

export default NavBar;
