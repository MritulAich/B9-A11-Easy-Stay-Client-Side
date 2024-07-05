import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";
import Error from "../layout/Error";
import Rooms from "../pages/Rooms";
import Home from "../shared/homepage/Home";
import RoomDetails from "../pages/RoomDetails";
import MyBookings from "../pages/MyBookings";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Contact from "../pages/Contact";
import PrivateRoute from "./PrivateRoute";
import Review from "../pages/Review";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'rooms',
                element: <Rooms></Rooms>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: 'roomDetails/:id',
                element: <RoomDetails></RoomDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/rooms/${params.id}`)
            },
            {
                path: 'myBookings',
                element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>,
                loader: ()=>fetch(`http://localhost:5000/rooms`)
            },
            {
                path:'review',
                element: <Review></Review>
            }
        ]
    },
]);