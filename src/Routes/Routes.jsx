
import {createBrowserRouter,} from "react-router-dom";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import DashboardLayout from "../Layouts/DashboardLayout";
import AllTask from "../Dashboard/AllTask";
import AddTask from "../Dashboard/AddTask";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import Profile from "../Dashboard/Profile";
import PrivateRoute from "./PrivateRoutes";
import UpdateTask from "../Dashboard/UpdateTask";
import About from "../Pages/About";
import Report from "../Pages/Report";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";








  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <Error/>,
      children:[
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/about",
            element: <About/>,
        },
        {
            path: "/statistics",
            element: <Report/>,
        },
        {
            path: "/blog",
            element: <Blog/>,
        },
        {
            path: "/support",
            element: <Contact/>,
        },
      ],
      
    },
    {
        path: "/dashboard",
              element:<PrivateRoute> <DashboardLayout/> </PrivateRoute> ,
              children:[
                {
                  path: "/dashboard/all-task",
                        element:<PrivateRoute> <AllTask/> </PrivateRoute> ,
                },
                {
                  path: "/dashboard/add-task",
                        element:<PrivateRoute><AddTask/></PrivateRoute>  ,
                },
                {
                  path: "/dashboard/profile",
                        element:<PrivateRoute><Profile/></PrivateRoute> ,
                },
                {
                  path: "/dashboard/updateTask/:id",
                        element:  <UpdateTask/> ,
                        loader: ({params}) =>
          fetch(
            `https://task-management-server-pied-mu.vercel.app/task-update/${params?.id}`
          ),
                },
               
              ],
      },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> },
  ]);
  