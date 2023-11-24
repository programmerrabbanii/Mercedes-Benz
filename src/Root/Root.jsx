import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Bannar from "../Components/Bannar/Bannar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Bannar></Bannar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;