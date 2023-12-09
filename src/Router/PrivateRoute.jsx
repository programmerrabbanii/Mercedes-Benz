import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'; // ES6
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    if(loading){
        return <progress className="progress w-56"></progress>

    }
    if(user){
        return children
    }
    return ( 
    <Navigate to='/login' state={{from: location}} replace ></Navigate>
            
        
    )

};
PrivateRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoute;