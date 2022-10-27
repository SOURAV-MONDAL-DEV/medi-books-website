import React, { createContext, useEffect, useState } from 'react';
import {getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({children}) => {

   const [user, setUser] = useState(null)

    const providerLogin = (Provider) =>{
        return signInWithPopup(auth, Provider)
    };

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('user start xjuane', currentUser);
            setUser(currentUser);
        });
        return unsubscribe();
    },{})

    const AuthInfo = {user, providerLogin}
    return (
        <AuthContext.Provider value = {AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;