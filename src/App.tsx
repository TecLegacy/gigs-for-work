import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TestPath from "@/components/TestPath";
import PageNotFound from "@/pages/PageNotFound";
import RootComponent from "@/pages/RootComponent";
import HomePage from "@/pages/HomePage";
import Comb from "./components/TestPath/Comb";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootComponent />,
    errorElement: <PageNotFound />,

    children: [
      {
        path: "/contact",
        element: <TestPath />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/gigs",
        element: <TestPath />,
      },
      {
        path: "/gig/:id",
        element: <TestPath />,
      },
      {
        path: "/messages",
        element: <TestPath />,
      },
      {
        path: "/messages/:id",
        element: <TestPath />,
      },
      {
        path: "/orders",
        element: <Comb/>,
      },
      {
        path: "/mygigs",
        element: <TestPath />,
      },
      {
        path: "/add",
        element: <TestPath />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
