import React from 'react';
import { AuthContext } from './Authcontext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


const provider=new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    //loader
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    // create user email password
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // signin user with email password
    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // create user with gmail
    const signInUserGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>unsubscribe()
    },[])

    const signOutUser=()=>{
        return signOut(auth)
    }
    const authInfo={
        createUser,
        user,
        setUser,
        loading,
        signInUser,
        signInUserGoogle,
        signOutUser
        
    }
    return (
        <AuthContext value={authInfo} >{children}</AuthContext>
    );
};

export default AuthProvider;