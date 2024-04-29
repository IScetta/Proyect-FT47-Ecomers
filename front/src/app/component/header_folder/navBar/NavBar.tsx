// "use client"

import Link from "next/link";
import React from "react";

const  itemNavBar = [
    "Home",
    "About",
    "Products",
    "Contact"
]

const NavBar:React.FC = ():React.ReactElement=>{
    return(
        <div className="flex flex-col md:flex-row md:justify-between items-center md:p-5">

       {itemNavBar.map((item,index)=>{
        return (
            <Link href={`/${item.toLocaleLowerCase()}`} key={index}>
        <div className="p-2.5 text-primary text-xl font-bold cursor-pointer hover:text-terciary"> {item} </div>
            </Link>
       )})}

        </div>

    )
}

export default NavBar