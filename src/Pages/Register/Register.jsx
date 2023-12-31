import { Link, useNavigate } from "react-router-dom";
import SocailLogin from "../../Components/SocailLogin/SocailLogin";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../Components/Hok/UserAxios";
import Swal from "sweetalert2";


const Register = () => {
    const navigat=useNavigate()
    const axiosPublic = useAxiosPublic()
    const [registerError,setRegisterError]=useState('')
    const {createUser}=useContext(AuthContext)
    const handleRegister= e=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const photoURL=form.photoURL.value;
        const  allRegisteruser={name,email,password,photoURL}
        const newUser= {
            name,email,password,photoURL
            
        }
        
        axiosPublic.post("/reUsers", newUser).then((res) => {
            if (res.data.insertedId) {
              console.log(res.data);
              Swal.fire({
                title: "Good Job",
                text: "Your Data Added the database",
                icon: "Succes"
              });
             
            }
          });
       
       

        if(password.length <6){
            setRegisterError('Password Should Be At Least 6 Characters')
            return false
        }
        console.log(allRegisteruser)
        createUser(email,password)
        .then(result=>{
            navigat(location?.state ? location.state : '/' )
            console.log(result)
            
        }) 
      
        
    }
        
    
    return (
       <div className="registerBg px-14 mt-36">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 ">
            <div>
                <h2 className="text-2xl capitalize py-5">Registe Now</h2>
                <form onSubmit={handleRegister}>
                    <input className="w-full py-2 px-2 border mb-2" type="text" name="name" placeholder="Type Your Name" /> <br />
                    <input className="w-full py-2 px-2 border mb-2" type="email" name="email" placeholder="Type Your Email"/> <br />
                    <input className="w-full py-2 px-2 border mb-2" type="password" placeholder="Type Your Password"name="password" /> <br />
                    <input className="w-full py-2 px-2 border mb-2" type="text" name="photoURL" placeholder="PhotoURL" /><br /> 
                    <input className=" uppercase cursor-pointer w-full py-2 px-2 border mb-2" type="submit" value="sumbit" />
                </form>

                {
                    registerError && <p className="text-red-600  capitalize">{registerError}</p>
                }
                <SocailLogin></SocailLogin>
                <Link to='/login'>
                <p>Already have an account? <button className="uppercase"> Login here</button></p>
                
                </Link>

            </div>
            <div>
                <img className="h-screen w-full bg-cover" src="https://i.ibb.co/BjFsCxg/3094352.jpg" alt="" />
            </div>
        </div>

        


       </div>
    );
};

export default Register;