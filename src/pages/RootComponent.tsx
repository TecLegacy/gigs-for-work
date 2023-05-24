import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Outlet } from "react-router-dom";
import TestPath from "@/components/TestPath";
type Props = {};

const RootComponent = (props: Props) => {
  return (
    <>
      <NavBar />
      {/* <TestPath /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default RootComponent;
