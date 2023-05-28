import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import TestPath from '@/components/TestPath';

import { Outlet } from 'react-router-dom';

type Props = {};

const RootComponent = (props: Props) => {
  return (
    <>
      <NavBar />

      <TestPath />

      <Outlet />

      <Footer />
    </>
  );
};

export default RootComponent;
