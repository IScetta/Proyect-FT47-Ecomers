"use client"

import Swal from "sweetalert2";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useAuth } from "@/context/AuthContext";
import Cookies from "js-cookie"


const MenuProfile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {token, setToken} = useAuth();
  // console.log(token);
  

  const logout = ()=>{
    Swal.fire({
      title: "Do you want to finalize the purchase?",
      showDenyButton: true,
      background: "#1b1b1b",
      color:"#c5c5c5",
      // showCancelButton: true,
      confirmButtonColor: "rgb(22 163 74)",
      confirmButtonText: "logout",
      denyButtonText: `not logout`,
      backdrop: `rgba(0, 0, 0, 0.5)`
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title:"logout completed!",
          icon: "success",
          background: "#1b1b1b",
          color:"#c5c5c5",
          backdrop: `rgba(0, 0, 0, 0.5)`
        });
        Cookies.remove('token')
        // Cookies.set("token","")
        setToken(null);
        setIsOpen(false)
      } else if (result.isDenied) {}
    });
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left ">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
        >
            <Image className="w-10 h-10 p-0.5 m-0.5 rounded-full border-2 cursor-pointer bg-white hover:border-terciary" src="   https://cdn-icons-png.flaticon.com/512/456/456212.png" alt="Profile" width={40} height={40} />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 w-[125px] rounded-md shadow-lg bg-text border-2 border-terciary ring-1 ring-black ring-opacity-5 focus:outline-none z-10" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <div className="py-1" role="none">
            {token ?
                <>
                <Link href="/orders" onClick={()=>{setIsOpen(false)}} className="block px-4 py-2 text-sm text-white hover:bg-gray-700 " role="menuitem">My Orders</Link>
                <Link href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-700 " role="menuitem">Help</Link>
                <Link href="/" onClick={logout} className="block px-4 py-2 text-sm text-white hover:bg-gray-700 " role="menuitem">Logout</Link>
                </>
                :
                <>
                <Link href="/signup" onClick={()=>{setIsOpen(false)}} className="block px-4 py-2 text-sm text-white hover:bg-gray-700 " role="menuitem">Login</Link>
                <Link href="/signin" onClick={()=>{setIsOpen(false)}} className="block px-4 py-2 text-sm text-white hover:bg-gray-700 " role="menuitem">Register</Link>
                </>        
        }
            
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuProfile;
