import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Banner from "../shared/homepage/Banner";
import Map from "../shared/homepage/Location";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
             <Banner></Banner>
             <Map></Map>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;