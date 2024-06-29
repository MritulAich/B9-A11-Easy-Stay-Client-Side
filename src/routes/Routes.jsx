import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";
import Error from "../layout/Error";
import Rooms from "../pages/Rooms";
import Home from "../shared/homepage/Home";
import RoomDetails from "../pages/RoomDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: 'rooms',
                element: <Rooms></Rooms>
            },
            {
                path: 'roomDetails/:id',
                element: <RoomDetails></RoomDetails>,
                // loader:({params})=>fetch(`http://localhost:5000/rooms/${params._id}`)
                loader: ()=>fetch('http://localhost:5000/rooms')
            }
        ]
    },
]);