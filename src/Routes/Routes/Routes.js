import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home";
import Course from "../../components/Course/Course";
import Main from "../../layouts/Main";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import CheakOut from "../../Pages/CheakOut/CheakOut";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Blog from "../../Pages/Blog/Blog";
import NotFound from "../../Pages/NotFound/NotFound";
import Faq from "../../Pages/FAQ/Faq";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/course',
                element: <Course></Course>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/cheakout',
                element: <PrivateRoute><CheakOut></CheakOut></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path:'*',
                element: <NotFound></NotFound>
            }
        ]
    },
    {
        path:'*',
        element: <NotFound></NotFound>
    }
])