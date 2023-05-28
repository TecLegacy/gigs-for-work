import { Link } from 'react-router-dom';

type Props = {
  isSeller: boolean;
  userName: string;
};

const Avatar = (props: Props) => {
  return (
    <>
      <div className='avatar  pt-2 dropdown dropdown-end cursor-pointer dropdown-hover text-white '>
        <div tabIndex={0} className='ml-4 w-12 mask mask-squircle'>
          <img
            alt={props?.userName}
            src='https://ik.imagekit.io/hw4mk2vrzim/lamafiver/aiony-haust-3TLl_97HNJo-unsplash_GmNRzj8zj.jpg?updatedAt=1684833952532'
          />
        </div>
        <div className=' h-1 w-full py-2'>
          <ul
            tabIndex={0}
            className='dropdown-content menu p-2   shadow  bg-drop-down-regal  rounded-box w-52'
          >
            {props?.isSeller && (
              <>
                <li>
                  <Link to={'/mygigs'} className=' hover:text-blue-dark'>
                    Gigs
                  </Link>
                </li>
                <li>
                  <Link to={'/add'} className=' hover:text-blue-dark'>
                    Add New Gig
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link to={'/orders'} className=' hover:text-blue-dark'>
                Orders
              </Link>
            </li>
            <li>
              <Link to={'/messages'} className=' hover:text-blue-dark'>
                Messages
              </Link>
            </li>

            {/* LOGOUT */}
            <button className='hover:text-blue-dark  font-montserrat  '>
              LOGOUT
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Avatar;
