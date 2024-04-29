"use client"

import { IOrder } from "@/Types/Types";
import { getUserOrder } from "@/utils/order.helpers"
import Link from "next/link";
import Cookies from "js-cookie"
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

function Orders() {
    const [orders, setOrders] = useState<IOrder[]>([]);
    const {token, setToken} = useAuth()

  useEffect(() => {
    const interval = setInterval(() => {
      getUserOrder(Cookies.get("token")).then((orders) => {
        setOrders(orders);
      });
    }, 500);


    return () => clearInterval(interval);
  }, []);
    return(
        <div className="bg-primary flex flex-col justify-center items-center p-[20px]">
          <h1 className="flex justify-center w-auto md:w-[400px] items-center m-5 rounded-lg bg-secundary  p-2">User shopping list:</h1>
        { orders.length === 0 ?
          <div className="flex flex-col justify-center items-center p-[20px]">
                    <h1 className="flex justify-center w-auto md:w-[400px] items-center m-5 rounded-lg bg-secundary  p-2 ">There are no orders for the user!</h1>
                    <Link href={"/home"}><button className="bg-secundary p-2 m-2 rounded-lg border-2 border-terciary hover:border-secundary hover:bg-terciary">go back to home</button></Link>
                    <Link href={"/products"}><button className="bg-secundary p-2 m-2 rounded-lg border-2 border-terciary hover:border-secundary hover:bg-terciary">go to products</button></Link>
                </div>
            :
            <>
            {orders.map((order)=>(
            <div className="flex justify-center m-5 bg-primary" key={order.id}>
                <div className="flex flex-col p-4 rounded-lg border-2 border-terciary bg-text">
                <h1 className="text-white">Order ID: {order.id}</h1>
                <h1 className="text-white">Products: {order.products.length}</h1>
                <h1 className="text-white">Status: {order.status} </h1>
                <h1 className="text-white">Date: {order.date} </h1>
                </div>
            </div>
        ))}
            </>
        }
        </div>

    )
}

export  default Orders