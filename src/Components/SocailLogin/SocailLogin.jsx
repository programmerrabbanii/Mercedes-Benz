import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const SocailLogin = () => {
  const{signWithGoogle}=useContext(AuthContext)
    const handlerGoogle=()=>{
      signWithGoogle()
         .then(result=>{
          
             console.log(result)
        //  ======================================================
        const name = result.user.displayName;
        const profileImage = result.user.photoURL;
        const email = result.user.email;
        const role = "customer";
        // collect the data
        const collectFormData = {
          name,
          profileImage,
          email,
          role,
        };

        axios
          .put(`http://localhost:5000/reUsers/${email}`, collectFormData)
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          });

        //  ======================================================
















        





              







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
