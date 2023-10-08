import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.init";



export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvdier = ({children}) => {
const [user, setUser] = useState(null);
const [loader, setLoader] = useState(true)

const creatUser = (email, password) =>{
   setLoader(true)

    return createUserWithEmailAndPassword(auth, email, password)
}

const signInUser = (email, password) =>{
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
}

useEffect(() =>{
    const unsubscrive = onAuthStateChanged(auth, (currentUser) =>{

           setUser(currentUser)
           setLoader(false)
           
    })

    return () =>{
        unsubscrive();
    }
},[])


const logout = () =>{
    setLoader(true)
    signOut(auth)
}

const authinfo = {user, loader, creatUser, signInUser, logout}
console.log(authinfo);

  
    return (
        <div>
            <AuthContext.Provider value={authinfo}>
                {children}
                
            </AuthContext.Provider>
        </div>
    );
};


export default AuthProvdier;
AuthProvdier.propTypes = {
    children: PropTypes.node
}