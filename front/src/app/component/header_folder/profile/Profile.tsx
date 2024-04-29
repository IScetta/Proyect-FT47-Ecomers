// "use client"

import Image from "next/image"
import styled from "styled-components"
import MenuProfile from "./menu_profile/MenuProfile"
import Link from "next/link"
import { useAuth } from "@/context/AuthContext"

const ProfileImage = styled.img`
width: 40px;
border-radius: 50%;
border: 4px solid rgba(46, 46, 46, 0.87);
&:hover{
    border: 4px solid #8324ff;
}
`

const Profile:React.FC = ():React.ReactElement=>{
    const {token , setToken} = useAuth();
    return (
        <>
        {token ?
            <div className="flex md:flex-col">
            <Link href={`/cart`}><Image className="w-10 h-10 p-0.5 m-0.5 rounded-full bg-white border-2 cursor-pointer hover:border-terciary" src="https://cdn-icons-png.flaticon.com/512/3514/3514491.png" alt="Cart" width={45} height={45} /> </Link>
            <MenuProfile/>
            </div>
            :
            <div className="flex md:flex-col justify-center items-center ">
                <Link className="  p-[5px] w-full rounded-lg m-2 border-2 border-primary text-primary  hover:border-terciary hover:text-terciary" href={"/signup"}>Login</Link>
                <Link className="p-[5px] w-full rounded-lg m-2 border-2 border-primary text-primary  hover:border-terciary hover:text-terciary" href={"/signin"}>Register</Link>
            </div>

        }
        </>
        
    )
}

export default Profile;