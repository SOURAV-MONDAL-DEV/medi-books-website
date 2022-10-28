import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({children}) => {

   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
   const [topic, setTopic] = useState(0)

    const providerLogin = (Provider) =>{
        setLoading(true);
        return signInWithPopup(auth, Provider)
    };

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };
     
    useEffect(()=>{
    //    const unsubscribe = 
       onAuthStateChanged(auth, (currentUser)=>{
            // console.log('user start xjuane', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        // return unsubscribe();
    },[]);

    const AuthInfo = {user, loading, topic, setTopic, providerLogin, createUser, logOut, signIn}
    return (
        <AuthContext.Provider value = {AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;