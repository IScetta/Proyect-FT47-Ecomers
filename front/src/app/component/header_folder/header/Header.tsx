"use client"

import NavBar from "../navBar";
import SeachBar from "../searchbar";
import Categories from "../../category_folder/categories"
import Profile from "../profile";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import React, { useState } from "react";



const Header:React.FC =():React.ReactElement =>{
    // const [isOpen, setIsOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    return(
        
        <header className="md:flex  bg-secundary md:justify-center items-center">
                <div className="flex flex-col ">
                    <div className="flex justify-between mx-[20px] md:justify-center items-center md:gap-[50px]">


                    <div className="flex flex-row items-center md:flex md:flex-col md:justify-between md:items-center md:p-[10px] md:w-[100px] ">
                        <Link href="/"><Image  className="h-auto w-[70px] md:w-[120px] p-[10px]" src="/online-shopping_12485562.png" alt="logo" width={70} height={70} /></Link>
                        <h1 className=" text-[15px]  font-bold md:text-[20px] text-terciary">ElectroShop </h1>
                    </div>
                
                            <div className=" md:hidden text-2xl text-gray-400 border-2 border-gray-400 px-2 rounded-lg">
                            <button onClick={toggleMenu}>☰</button>
                            </div>

                            
                    

                    <div className=" hidden md:flex md:flex-col md:mb-[20px] lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-[50px]">
                         <NavBar/>
                        <SeachBar/>
                    </div>
                       

            <div className=" hidden md:flex md:justify-between md:items-center ">
                <Profile/>
            </div>
                    </div>

                    <div className="lg:flex hidden lg:justify-center lg:items-center">
                        <Categories/>
                    </div>
                </div>
                            {isMenuOpen ? 
                             <div className="flex flex-col items-center pb-[20px]  md:hidden border-t-2 border-terciary">
                                <NavBar/>
                                <Profile/>
                                <SeachBar/>
                                </div>
                                :
                                <></>
                                }

        </header>

    )

}



export default Header;