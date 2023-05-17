import { useEffect, useState } from "react";
type Props = {};

// Styles
const between = `flex items-center   `;
const listEffect = "transition  duration-500 hover:text-orange-300";
const isLargerDevice = ` bg-transparent mx-auto my-4 flex w-5/6 items-center
justify-center rounded-[5px] px-8 py-4 shadow-nav
md:w-full md:text-sm
sm:w-full sm:text-base sm:px-6 sm:py-3`;
const isMediumDevice = `
bg-transparent mx-auto my-4 flex w-5/6 items-center
 justify-center rounded-[5px]  px-8 py-4 shadow-nav  
`;

// NavBar Component
const NavBar: React.FC = (props: Props) => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setMatches(mediaQuery.matches);

    const handleMediaQueryChange = (e: MediaQueryListEvent) =>
      setMatches(e.matches);

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const navStyle = matches ? isLargerDevice : isMediumDevice;
  return (
    <>
      <nav>
        <div className={navStyle}>
          <div className={` ${between}justify-between  md:w-full `}>
            <div className="  ml-12 cursor-pointer text-2xl">
              <span>Hire</span>
              <span className=" text-2xl  text-[green] ">.</span>
              <span>🦆</span>
            </div>
            <div className=" mr-8 flex items-center ">
              <ul className="   flex  cursor-pointer gap-8  ">
                <li className={listEffect}>Hire Business</li>
                <li className={listEffect}>Sell with Us</li>
                <li className={listEffect}>Explore</li>
              </ul>
              <div className="ml-12">
                <button className=" transition duration-200 ease-in-out">
                  Sign In{" "}
                </button>
                <button
                  className="
              bg-blue-dark  transition  duration-500 ease-in-out hover:bg-blue-light  hover:text-[#2661b9] "
                >
                  Join In
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className=" border-t-1  border-slate-300" />
        <div className=" mx-auto mt-2  flex w-5/6 items-center justify-between text-[#62646a]">
          <div className="group">
            <span>
              Graphics & Design
              <div className="mx-auto h-1 w-3/4 transition duration-300 ease-out group-hover:bg-[#1dbf73]"></div>
            </span>
          </div>
          <div className="group">
            <span>
              Digital Marketing
              <div className="mx-auto h-1 w-3/4 transition duration-300 ease-out group-hover:bg-[#1dbf73]"></div>
            </span>
          </div>
          <div className="group">
            <span>
              Writing & Translation
              <div className="mx-auto h-1 w-3/4 transition duration-300 ease-out group-hover:bg-[#1dbf73]"></div>
            </span>
          </div>
          <div className="group">
            <span>
              Video & Animation
              <div className="mx-auto h-1 w-3/4 transition duration-300 ease-out group-hover:bg-[#1dbf73]"></div>
            </span>
          </div>
          <div className="group">
            <span>
              Photography
              <div className="mx-auto h-1 w-3/4 transition duration-300 ease-out group-hover:bg-[#1dbf73]"></div>
            </span>
          </div>
          <div className="group">
            <span>
              Programming & Tech
              <div className="mx-auto h-1 w-3/4 transition duration-300 ease-out group-hover:bg-[#1dbf73]"></div>
            </span>
          </div>
          <div className="group">
            <span>
              AI Services
              <div className="mx-auto h-1 w-3/4 transition duration-300 ease-out group-hover:bg-[#1dbf73]"></div>
            </span>
          </div>
        </div>
        {/* #62646a */}
      </nav>
    </>
  );
};

export default NavBar;
