import { Link } from "react-router-dom";
import SocailLogin from "../../Components/SocailLogin/SocailLogin";

const Login = () => {
    const handleLogin=e=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const allLoginuser={name,email,password}
        console.log(allLoginuser)
    }

    return (
        <div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-14 items-center px-14">
            <div>
                <img src="https://i.ibb.co/BjFsCxg/3094352.jpg" alt="" />
            </div>
            <div>
                <h2 className="text-2xl py-5">Pleass Login </h2>
                <form onSubmit={handleLogin}>
                    <input className="w-full border py-2 px-2 mb-2"  type="text" name="name" placeholder="Type Your NAme" /> <br />
                    <input  className="w-full border py-2 px-2 mb-2" type="email" name="email" placeholder="Type Your Name" /> <br />
                    <input  className="w-full border py-2 px-2 mb-2" type="password" name="password" placeholder="Type Your Password" /> <br />
                    <input className=" cursor-pointer w-full border py-2 px-2 mb-2"  type="submit" value="SUBMIT"/>
                </form>
                <SocailLogin></SocailLogin>
                <Link to='/register'>
                <p>Not registered? <button className="uppercase"> Create account</button></p>
                </Link>
            </div>
           </div>
            
        </div> 
    );
};

export default Login;