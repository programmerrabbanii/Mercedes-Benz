import { useEffect, useState } from "react";
import FeatureDisply from "../FeatureDisply";


const Feature = () => {
    const [featur, getFeatur] = useState([])
    
    useEffect(()=>{
        fetch('https://assingmenttwelve-server.vercel.app/featur')
        .then(res=>res.json())
        .then(data=>getFeatur(data))
    },[])
    
 
    return (
        <div  className="mt-16 px-16 pb-14">
            <h2 className="text-center text-3xl py-12 font-semibold">Our Features Section  </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {
            featur.map((brandData) => (
            <FeatureDisply key={brandData.id} brandData={brandData}></FeatureDisply>
          ))}
            </div>
            
        </div>
    );
};

export default Feature;


