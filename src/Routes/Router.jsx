

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from "../Pages/MainPage";
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";
import HomePage from "../Pages/HomePage";


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
        }
    ]
    
  },
]);


const Router = () => {

  return <RouterProvider router={router} />
    
};

export default Router;