type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <div
        className="hero min-h-[65vh] "
        style={{
          backgroundImage: `url("https://ik.imagekit.io/hw4mk2vrzim/lamafiver/andre-benz-lIa03ti94ec-unsplash_g8MAWu4CK.jpg?updatedAt=1684869993274")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          {/* <div className="max-w-md"> */}
          {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1> */}
          {/* <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p> */}
          {/* <button className="btn btn-primary">Get Started</button> */}
          {/* </div> */}
          <div className="hero-content flex-col lg:flex-row-reverse">
            {/* <img
              alt="Homepage-bird"
              src="https://ik.imagekit.io/hw4mk2vrzim/lamafiver/midjourney/Melo_forest_382fb2a2-4a7c-4d3d-9988-20cc9083a725_mJVxYcC8aQ.png?updatedAt=1684871801702"
              className="max-w-sm rounded-lg  shadow-home"
            /> */}
            <div>
              <h1 className="text-5xl font-bold">
                Discover the pinnacle of excellence
              </h1>
              <hr className=" border-t-1  border-red-300" />
              <p className="py-4 ">
                Elevate your team with world-class talent.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
