import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";

const SocailLogin = () => {
  const{signWithGoogle}=useContext(AuthContext)
    const handlerGoogle=()=>{
      signWithGoogle()
         .then(result=>{
             console.log(result)
         })
         .catch(error=>{
             console.log(error)
         })
        
    }
  return (
    <div>
      <button
       onClick={handlerGoogle} className="btn btn-ghost">
        
        <FcGoogle />
        GOOGLE
      </button>
    </div>
  );
};

export default SocailLogin;
