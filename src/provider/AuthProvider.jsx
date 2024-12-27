/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({children}) => {
     const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const [forgot,setForgot] = useState()

     const createNewUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
        
     }
     const userLogin = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
     }
     const logOut = () =>{
        setLoading(true);
        return signOut(auth)
     }
     const updateUserProfile = (updateData) =>{
        return updateProfile(auth.currentUser,updateData);
     }
     const newProfile = (updated) => {
        return updateProfile(auth.currentUser, updated)
          .then(() => {
            setUser({ ...auth.currentUser, ...updated });
            toast.success("Profile updated successfully!");
          })
          .catch((error) => {
            toast.error("Error updating profile:", error);
          });
      };
    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        loading,
        updateUserProfile,
        newProfile,
        forgot,
        setForgot
        
    }
    useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            unSubscribe()
        };
    },[])
    
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;