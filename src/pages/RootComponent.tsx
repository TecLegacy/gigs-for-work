import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { Outlet } from 'react-router-dom';
import TestPath from '@/components/TestPath';
type Props = {};

const RootComponent = (props: Props) => {
  return (
    <>
      <NavBar />
      <TestPath />

      <div
        className=' mx-1
     my-2  px-0 py-1
     '
      ></div>
      <Outlet />
      <Footer />
    </>
  );
};

export default RootComponent;
