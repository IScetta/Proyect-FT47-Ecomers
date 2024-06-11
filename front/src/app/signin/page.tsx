"use client"

import { IUserRegister } from "@/Types/Types"
import { register } from "@/utils/helpers";
import validateRegisterForm from "@/utils/validateRegisterForm";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import Swal from "sweetalert2";


export default function Register(){

    const router = useRouter();

    const [dataUser, setDataUser] = useState<IUserRegister>({
        email: "",
        password:"",
        confirmPassword:"",
        name:"",
        address:"",
        phone:""
    })

    const [errorUser,serErrorUser] = useState<IUserRegister>({
        email: "",
        password:"",
        confirmPassword:"",
        name:"",
        address:"",
        phone:""
    });

    useEffect(()=>{
        const errors = validateRegisterForm(dataUser);
        serErrorUser(errors);
    },[dataUser])

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setDataUser({
            ...dataUser,
            [e.target.name]: e.target.value,
        }); 
    }

   async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const response = await register(dataUser);
        // console.log(response)
        
        if(response){
            Swal.fire({
                background: "#1b1b1b",
                color:"#c5c5c5",
                title: "Create an account!",
                text: "you must login to continue",
                icon: "success",
                backdrop: `rgba(0, 0, 0, 0.5)`
            });
            setTimeout(()=>{
                router.push("/signup");
            },2000)
            


        }else{
            Swal.fire({
                background: "#1b1b1b",
                color:"#c5c5c5",
                icon: "error",
                title: "Oops...",
                text: "Error creating account",
                backdrop: `rgba(0, 0, 0, 0.5)`
              });
        }
    }

    return(
        <div className="flex justify-center">
            
            <div className="flex flex-col justify-center items-center w-[500px] bg-secundary m-[10px] p-[15px] rounded-xl">
                <h1 className="p-[20px] text-2xl">Register to TechShop</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-white" htmlFor="name">Name</label>
                <input 
                id="name"
                name="name"
                value={dataUser.name}
                type="text"
                required
                onChange={handleChange}
                placeholder="John Doe"
                className="  text-sm rounded-lg w-[400px] border-[1.5px] border-complementary focus:border-terciary block  p-2.5 bg-complementary
                  placeholder-gray-400 text-white focus:outline-none focus:ring-1 focus:ring-terciary"
                />
                {errorUser.name && (
                    <p className="text-error font-bold">{errorUser.name}</p>
                )}
                </div>

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
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="name">Address</label>
                <input 
                id="address"
                name="address"
                value={dataUser.address}
                type="text"
                required
                onChange={handleChange}
                placeholder="920 Broadway"
                className="text-sm rounded-lg border-[1.5px] border-complementary focus:border-terciary block w-full p-2.5 bg-complementary
                placeholder-gray-400 text-white focus:outline-none focus:ring-1 focus:ring-terciary"
                />
                {errorUser.address && (
                    <p className="text-error font-bold">{errorUser.address}</p>
                )}
                </div>

                <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="name">Phone</label>
                <input 
                id="phone"
                name="phone"
                value={dataUser.phone}
                type="phone"
                required
                onChange={handleChange}
                placeholder="(12)-123-123456"
                className="text-sm rounded-lg border-[1.5px] border-complementary focus:border-terciary block w-full p-2.5 bg-complementary
                placeholder-gray-400 text-white focus:outline-none focus:ring-1 focus:ring-terciary"
                />
                {errorUser.phone && (
                    <p className="text-error font-bold">{errorUser.phone}</p>
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


                <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="name">Password Confirm</label>
                <input 
                id="confirmPassword"
                name="confirmPassword"
                value={dataUser.confirmPassword}
                type="password"
                required
                onChange={handleChange}
                placeholder="**********"
                className="text-sm rounded-lg border-[1.5px] border-complementary focus:border-terciary block w-full p-2.5 bg-complementary
                placeholder-gray-400 text-white focus:outline-none focus:ring-1 focus:ring-terciary"
                />
                {errorUser.confirmPassword && (
                    <p className="text-error font-bold">{errorUser.confirmPassword}</p>
                )}
                </div>

                    <div>
                    <button type="submit" disabled={Object.keys(errorUser).length > 0} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                     focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600
                    dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-slate-400 disabled:hover:bg-slate-400">Submit</button>
                    </div>

            </form>
            <h1 className=" m-[15px]" >Already have an account? <Link className="text-terciary hover:text-violet-500" href={"/signin"}>Log in!</Link></h1>
            </div>
        </div>
    )
}
