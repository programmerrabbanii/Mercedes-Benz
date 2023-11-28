import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";


 export const AuthContext=createContext(null)
 const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoding]=useState(true)

    const createUser=(email,password)=>{
        setLoding(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signin=(email,password)=>{
        setLoding(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    const logOut=()=>{
        setLoding(true)
        return signOut(auth)
    }



    const provider = new GoogleAuthProvider()
    const signWithGoogle = () => {
        return signInWithPopup(auth,provider)
    }


    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoding(false)
        });
        return()=>{
            return unsubscribe()
        }
    },[]);

    const authInfo={
        user,
        loading,
        createUser,
        signin,
        logOut,
        signWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;