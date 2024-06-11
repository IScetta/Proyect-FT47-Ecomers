"use client"

import { IUserLogin, IUserRegister } from "@/Types/Types"
import { useAuth } from "@/context/AuthContext";
import { login } from "@/utils/helpers";
import validateLoginForm from "@/utils/validateLoginForm";
import Cookies from 'js-cookie'
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react"
import Swal from "sweetalert2";


export default function Login(){

    const router = useRouter()

    const [dataUser, setDataUser] = useState<IUserLogin>({
        email: "",
        password:"",
    })

    const [errorUser,serErrorUser] = useState<IUserLogin>({
        email: "",
        password:"",
    });


    useEffect(()=>{
        const errors = validateLoginForm(dataUser);
        serErrorUser(errors);
    },[dataUser])

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setDataUser({
            ...dataUser,
            [e.target.name]: e.target.value,
        }); 
    }

    const {token , setToken} = useAuth();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const response = await login(dataUser);
        // console.log(response)
        if(response){
            Swal.fire({
            background: "#1b1b1b",
            color:"#c5c5c5",
            title: "Login!",
            icon: "success",
            backdrop: `rgba(0, 0, 0, 0.5)`
          });
          Cookies.set("token", response.token)
            setToken(Cookies.get("token") || null);
          router.push("/home");
        }else{
            Swal.fire({
                background: "#1b1b1b",
                color:"#c5c5c5",
                icon: "error",
                title: "Oops...",
                text: "Error logging in",
                backdrop: `rgba(0, 0, 0, 0.5)`
              });
        }
        
        // window.location.reload();
       
        // localStorage.setItem("token",response.token);
        // sessionStorage.setItem("token",response.token);
        
    }

    return(
        <div className="flex justify-center">
            
            <div className="flex flex-col justify-center items-center w-[500px] bg-secundary m-[10px] p-[15px] rounded-xl">
                <h1 className="p-[20px] text-2xl">Login to TechShop</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="name">Email</label>
                <input 
                id="email"
                name="email"
                value={dataUser.email}
                type="text"
                required
                onChange={handleChange}
                placeholder="John-Doe@example.com"
                className="text-sm rounded-lg border-[1.5px] border-complementary focus:border-terciary block w-full p-2.5 bg-complementary
                placeholder-gray-400 text-white focus:outline-none focus:ring-1 focus:ring-terciary"
                />
                {errorUser.email && (
                    <p className="text-error font-bold">{errorUser.email}</p>
                )}
                </div>

               
                <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="name">Password</label>
                <input 
                id="password"
                name="password"
                value={dataUser.password}
                type="password"
                required
                onChange={handleChange}
                placeholder="**********"
                className="text-sm rounded-lg border-[1.5px] border-complementary focus:border-terciary block w-full p-2.5 bg-complementary
                placeholder-gray-400 text-white focus:outline-none focus:ring-1 focus:ring-terciary"
                />
                {errorUser.password && (
                    <p className="text-error font-bold">{errorUser.password}</p>
                )}
                </div>

                    <div>
                    <button type="submit" disabled={Object.keys(errorUser).length > 0} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                     focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600
                    dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-slate-400 disabled:hover:bg-slate-400">Submit</button>
                    </div>

            </form>
            <h1 className=" m-[10px]" >Dont have an account? <Link className="text-terciary hover:text-violet-500" href={"http://localhost:3000/signin"}>Sign Up!</Link></h1>
            </div>
        </div>
    )
}
