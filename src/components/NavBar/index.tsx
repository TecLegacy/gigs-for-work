import { useEffect, useState } from "react";
type Props = {};

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

  const between = `flex items-center   `;

  const navStyle = matches
    ? `  bg-transparent mx-auto my-4 flex w-5/6 items-center
    justify-center rounded-[25px] px-8 py-4 shadow-nav
    md:w-full md:text-sm
    sm:w-full sm:text-base sm:px-6 sm:py-3`
    : `
  bg-transparent mx-auto my-4 flex w-5/6 items-center
   justify-center rounded-[25px]  px-8 py-4 shadow-nav  
 `;

  return (
    <>
      <nav className={navStyle}>
        <div className={` ${between}justify-between  md:w-full `}>
          <div className="  ml-12 cursor-pointer text-2xl">
            <span>Hire</span>
            <span className=" text-2xl  text-[green] ">.</span>
            <span>🦆</span>
          </div>
          <div className=" mr-8 flex items-center ">
            <ul className=" flex cursor-pointer   gap-8 ">
              <li>Hire Business</li>
              <li>Sell with Us</li>
              <li>Explore</li>
            </ul>
            <div className="  ml-12">
              <button>Sign In </button>
              <button
                className="
              bg-blue-dark  transition  duration-500 ease-in-out hover:bg-blue-light  hover:text-[#2661b9] "
              >
                Join In
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
