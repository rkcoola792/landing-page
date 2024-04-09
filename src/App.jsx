

import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LandingPage1 from "./LandingPage1/LandingPage1";
import Page2 from "./Page2/Page2";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage1></LandingPage1>,
    
    },
    {
      path: "/page2",
      element: <Page2/>
    
    },
  
  ]);

  return (
    <div className="App  ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;