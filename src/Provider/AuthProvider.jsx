import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../Config/firebaseConfig';


export const AuthContext = createContext(null)
const googleprovider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
const [loading, setLoding] = useState(true)
// google login

const googleLogin = ()=>{
   return signInWithPopup(auth, googleprovider)

} 

// sign in

const creatUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}


// log in
const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

// sign out

const logout =()=>{
    
    return signOut(auth);
}
const authentication = {
    googleLogin,
    creatUser,
    login,
    logout,
    user,
}

//using obserber

useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        console.log(user);
        setUser(user);
        setLoding(false);
      });

},[]);


   



//google provider    
    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;