

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
import ViewDetails from "../Pages/ViewDetails";
import MyList from "../Pages/MyList";
import UpdatePage from "../Pages/UpdatePage";
import ErrorElement from "../Pages/ErrorElement";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    errorElement:<ErrorElement></ErrorElement>,
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
        },
        {
          path:`/viewDetails/:id`,
          element:<ProtectedRoute><ViewDetails></ViewDetails></ProtectedRoute>,
          loader:({params})=>fetch(`http://localhost:5000/viewDetails/${params.id}`)
          
          
        },

        {
          path:"/myList/:email",
          element:<ProtectedRoute> <MyList></MyList> </ProtectedRoute>,
          loader:({params})=>fetch(`http://localhost:5000/myList/${params.email}`)
        },
        {
          path:'/update/:id',
          element:<ProtectedRoute> <UpdatePage></UpdatePage> </ProtectedRoute>,
          loader:({params})=>fetch(`http://localhost:5000/viewDetails/${params.id}`)
        }


        

    ]
    
  },
]);


const Router = () => {

  return <RouterProvider router={router} />
    
};

export default Router;