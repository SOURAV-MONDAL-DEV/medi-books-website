import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home";
import Course from "../../components/Course/Course";
import Main from "../../layouts/Main";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";

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
            }
        ]
    }
])