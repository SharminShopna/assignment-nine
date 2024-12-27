
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import AllFile from '../components/AllFile';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';

import CareerDetails from '../pages/CareerDetails';
import PrivateRouter from './PrivateRouter';
import Profile from '../pages/Profile';
import About from '../pages/About';
import Error from '../pages/Error';
import Development from '../pages/Development';
import ForgotPsw from '../pages/ForgotPsw';
import Mentoring from '../pages/Mentoring';
import Restart from '../pages/Restart';


const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      errorElement: <Error></Error>,
     children:[
        {
            path: "/",
            element: <AllFile></AllFile>,
        },
     ]
    },
    {
     path: "auth",
     element:<AuthLayout></AuthLayout>,
     children:[
        {
            path: "/auth/login",
            element: <Login></Login>,
        },
        {
            path: "/auth/register",
            element: <Register></Register>
        },
     ]
    },
    {
        path: "/cart/:id",
        element: (<PrivateRouter>
            <CareerDetails></CareerDetails>
            </PrivateRouter>),
        loader: ()=>fetch('../data.json'),
    },
    {
        path: "/profile",
        element:(<PrivateRouter>
            <Profile></Profile>
        </PrivateRouter>),
    },
    {
        path: "/about",
        element:(<PrivateRouter>
            <About></About>
        </PrivateRouter>),
        
    },
    {
        path: "/dev",
        element:<Development></Development>,
    },
    {
        path: "/forgot",
        element:<ForgotPsw></ForgotPsw>,
    },
    {
        path: "/mentor",
        element:<Mentoring></Mentoring>,
    },
    {
        path: "/restart",
        element:<Restart></Restart>,
    },
   
  
  ]);

export default router;