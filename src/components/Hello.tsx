import React from "react";

type Props = {};

function Hello({}: Props) {
  const hello = () => {
    console.log("first");
  };
  return (
    <div>
      Hello sda s<button onClick={hello}>hello</button>
      <div className=" mt-20 flex items-center justify-center bg-blue-500">
        my world
      </div>
    </div>
  );
}

export default Hello;
