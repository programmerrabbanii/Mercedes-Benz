import { Link } from "react-router-dom";
import SocailLogin from "../../Components/SocailLogin/SocailLogin";

const Register = () => {
    const handleRegister= e=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const photoURL=form.photoURL.value;
        const  allRegisteruser={name,email,password,photoURL}
        console.log(allRegisteruser)
        
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