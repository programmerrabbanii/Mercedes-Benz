import { NavLink, Outlet } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { IoIosSave } from "react-icons/io";
// import { MdPayments } from "react-icons/md";
// import { MdOutlineRateReview } from "react-icons/md";
// import { TbBrandBooking } from "react-icons/tb";
// import { IoMdSearch } from "react-icons/io";
// import { MdOutlineEmail } from "react-icons/md";
// import { FaUtensils } from "react-icons/fa";
// import { FaRegListAlt } from "react-icons/fa";
// import { FaUsers } from "react-icons/fa";

const Dashbord = () => {
    // TO DO: get isADmin value from the database
    const isAdmin=true;
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-gray-400 pt-10 text-white">
                <ul className="menu">
                    {
                        isAdmin ? <>
                        <li className="text-lg">
                        <NavLink to='/dashbord/adminHome'>
                        <IoIosHome />
                           <h3 className="uppercase"> ADMIN HOME</h3>
                        </NavLink>
                    </li>
                    

                        </>
                        :
                        <>
                        <li className="text-lg">
                        <NavLink to='/dashbord/cartHome'>
                        <IoIosHome />
                           <h3 className="uppercase"> USER HOMe</h3>
                        </NavLink>
                    </li>
                        
                        </>
                    }


                    {/* Share Navlink */}

                    <li className="text-lg">
                        <NavLink to='/'>
                        <IoIosHome />
                           <h3 className="uppercase"> HOME</h3>
                        </NavLink>
                    </li>

                </ul>

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
                
                 
            </div>
            
        </div>
    );
};

export default Dashbord;