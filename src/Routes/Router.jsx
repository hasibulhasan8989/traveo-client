

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from "../Pages/MainPage";
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";
import HomePage from "../Pages/HomePage";
import AddTouristSpot from "../Pages/AddTouristSpot";
import ProtectedRoute from "./ProtectedRoute";
import AllTouristSpot from "../Pages/AllTouristSpot";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    children:[
        {
            path:'/',
            element:<HomePage></HomePage>
        },
        {
            path:'/register',
            element:<RegisterPage></RegisterPage>
        },
        {
            path:'/login',
            element:<LoginPage></LoginPage>
        },
        {
          path:'/addTouristSpot',
          element:<ProtectedRoute><AddTouristSpot></AddTouristSpot></ProtectedRoute>
        },
        {
          path:'/allTouristSpot',
          element:<AllTouristSpot></AllTouristSpot>,
          loader:()=>fetch(`http://localhost:5000/touristSpot`)
        }

    ]
    
  },
]);


const Router = () => {

  return <RouterProvider router={router} />
    
};

export default Router;