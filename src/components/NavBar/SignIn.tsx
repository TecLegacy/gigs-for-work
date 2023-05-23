type Props = {
  active: boolean;
};

const SignIn = (props: Props) => {
  return (
    <div className="ml-12">
      <button className=" transition duration-200 ease-in-out">Sign In </button>
      <button
        className={
          props.active
            ? ` bg-button-dark  text-white transition duration-300  ease-in-out hover:bg-blue-light hover:text-button-dark`
            : `
  bg-blue-dark  transition  duration-500 ease-in-out hover:bg-blue-light  hover:text-[#2661b9] `
        }
      >
        Join In
      </button>
    </div>
  );
};

export default SignIn;
