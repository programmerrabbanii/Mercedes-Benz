import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className=" flex w-64 min-h-full bg-lime-500">
                <ul className="menu">
                    <li><NavLink to='/dashboard/cart'></NavLink></li>
                </ul>

          
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
                <h2>this my card</h2>
            </div>
            
        </div>
    );
};

export default Dashboard;