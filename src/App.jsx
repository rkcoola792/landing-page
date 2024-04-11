

import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LandingPage1 from "./LandingPage1/LandingPage1";
// import Page2 from "./Page2/Page2";
function App() {
  const router = createBrowserRouter([
    {
      path: "/Digital-Marketing-Agency",
      element: <LandingPage1></LandingPage1>,
    },
    {
      path: "/",
      element: <LandingPage1></LandingPage1>,
    },
    {
      path: "/",
      element: <LandingPage1></LandingPage1>,
    },
    {
      path: "/",
      element: <LandingPage1></LandingPage1>,
    },
    {
      path: "/",
      element: <LandingPage1></LandingPage1>,
    },
    {
      path: "/",
      element: <LandingPage1></LandingPage1>,
    },
    {
      path: "/",
      element: <LandingPage1></LandingPage1>,
    },
    {
      path: "/",
      element: <LandingPage1></LandingPage1>,
    },
    {
      path: "/",
      element: <LandingPage1></LandingPage1>,
    },
    {
      path: "/",
      element: <LandingPage1></LandingPage1>,
    },
    {
      path: "/",
      element: <LandingPage1></LandingPage1>,
    },
    {
      path: "/",
      element: <LandingPage1></LandingPage1>,
    },
    {
      path: "/",
      element: <LandingPage1></LandingPage1>,
    },
    {
      path: "/",
      element: <LandingPage1></LandingPage1>,
    },
    {
      path: "/",
      element: <LandingPage1></LandingPage1>,
    },
    {
      path: "/",
      element: <LandingPage1></LandingPage1>,
    },
    {
      path: "/",
      element: <LandingPage1></LandingPage1>,
    },
    {
      path: "/",
      element: <LandingPage1></LandingPage1>,
    },
    {
      path: "/",
      element: <LandingPage1></LandingPage1>,
    },
    {
      path: "/",
      element: <LandingPage1></LandingPage1>,
    },
 
  
  ]);

  return (
    <div className="App  ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;