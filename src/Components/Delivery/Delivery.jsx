import { useEffect, useState } from "react";
import DisplyDelivery from "../DisplyDelivery";

const Delivery = () => {
    const [delivery,setDelivery]=useState([])
    
    useEffect(()=>{
        fetch('http://localhost:5000/delivery')
        .then(res=>res.json())
        .then(data=>setDelivery(data))
    },[])
    

    
   
    return (
        <div>
            <h2 className="text-center text-3xl ">The Top Delivery Man</h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-14 my-12 px-14">
            {
            delivery.map((getDelivey) => (
            <DisplyDelivery key={getDelivey.id} getDelivey={getDelivey}></DisplyDelivery>
          ))}
            </div>
            
        </div>
    );
};

export default Delivery;