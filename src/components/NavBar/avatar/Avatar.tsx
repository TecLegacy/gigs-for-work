import React from "react";

type Props = {
  isSeller: boolean;
};

const Avatar = (props: Props) => {
  return (
    <>
      <div className="avatar  pt-2  dropdown  cursor-pointer dropdown-hover text-white ">
        <div tabIndex={0} className="ml-4 w-12 mask mask-squircle">
          <img
            alt={"userData.userName"}
            src="https://ik.imagekit.io/hw4mk2vrzim/lamafiver/aiony-haust-3TLl_97HNJo-unsplash_GmNRzj8zj.jpg?updatedAt=1684833952532"
          />
        </div>
        <div className=" h-1 w-full py-2">
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2   shadow  bg-drop-down-regal  rounded-box w-52"
          >
            {props.isSeller && (
              <>
                <li>
                  <a className=" hover:text-blue-dark">Gigs</a>
                </li>{" "}
                <li>
                  <a className=" hover:text-blue-dark">Add New Gig</a>
                </li>
              </>
            )}
            <li>
              <a className=" hover:text-blue-dark">Orders</a>
            </li>
            <li>
              <a className=" hover:text-blue-dark">Messages</a>
            </li>

            {/* LOGOUT */}
            <button className="  font-montserrat  ">LOGOUT</button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Avatar;
