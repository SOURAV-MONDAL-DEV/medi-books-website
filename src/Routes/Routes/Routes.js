import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home";
import Course from "../../components/Course/Course";
import Main from "../../layouts/Main";
import Subject from "../../components/Subject/Subject";
import TopicDetails from "../../components/TopicDetails/TopicDetails";

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
                // children:[
                //     {
                //         path:'/course/:id',
                //         element: <Subject></Subject>

                //     }
                // ]
            }
        ]
    }
])