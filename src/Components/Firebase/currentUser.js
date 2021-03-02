import {auth} from './firebase'
import React,{createContext,useState,useEffect} from 'react';

export const AuthContext=createContext();





export const CurrentUser = ({children}) => {
    
    const [currentUser, setcurrentUser] = useState(null)

     useEffect(() => {
         auth.onAuthStateChanged(setcurrentUser);
     }, [])


    return <AuthContext.Provider value={{"currentUser":currentUser}}>
         {children}
         </AuthContext.Provider>;
}



