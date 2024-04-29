"use client"
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie"


interface IAuthContext{
    token: string | null;
    setToken: (token:string | null)=> void;
}

const AuthContext = createContext<IAuthContext>({
    token: null,
    setToken:()=>{}
})

interface IAuthProvider{
    children : React.ReactNode;
}

export const AuthProvider: React.FC<IAuthProvider> = ({children})=>{
    
    const [token, setToken] = useState<string | null>(null);
    
    useEffect(()=>{
        // 
        const tokenFromCookie = Cookies.get("token")
        console.log(tokenFromCookie);
        
        if(tokenFromCookie){
            setToken(tokenFromCookie);
        }
    },[])

    return (
        <AuthContext.Provider value={{token,setToken}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = ()=> useContext(AuthContext)