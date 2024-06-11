"use client"
import { IProduct } from "@/Types/Types";
import { createOrder } from "@/utils/order.helpers";
import Link from "next/link";
import Cookies from "js-cookie"
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import { useRouter } from "next/navigation";



const Cart = ()=>{
    // const cart:IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const router = useRouter()
    
    const [cart, setCart] = useState<IProduct[]>([]);
    const {token , setToken} = useAuth();
    let total=0

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(storedCart);
      }, []);
    
    async function handClick() {

        if(Cookies.get("token")){
            Swal.fire({
                title: "Do you want to finalize the purchase?",
                showDenyButton: true,
                background: "#1b1b1b",
                color:"#c5c5c5",
                // showCancelButton: true,
                confirmButtonColor: "rgb(22 163 74)",
                confirmButtonText: "buy",
                denyButtonText: `not buying`,
                backdrop: `rgba(0, 0, 0, 0.5)`
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    const productArray:number[] = [];
                    cart.forEach((product)=>{productArray.push(product.id) })
                    createOrder(productArray,token);
                    localStorage.setItem("cart", JSON.stringify([]));
                    total=0;
                  Swal.fire({
                    title:"purchase completed!",
                    icon: "success",
                    background: "#1b1b1b",
                    color:"#c5c5c5",
                    });
                    router.push("/orders")
                } else if (result.isDenied) {
                  Swal.fire({
                    title:"the purchase was not finalized!",
                    background: "#1b1b1b",
                    icon:"warning",
                    color:"#c5c5c5",});
                }
              });
        }else{
            Swal.fire({
                background: "#1b1b1b",
                color:"#c5c5c5",
                icon: "error",
                title: "Oops...",
                text: "Not logged in yet!",
                footer: '<a href="http://localhost:3000/signup">want to log in? sign me up!</a>'
              });
        }
        
    }

    const deleteProduct = (productId: number) => {
        const updatedCart = cart.filter((product) => product.id !== productId);
        setCart(updatedCart);
        cart.forEach((product)=>{total=total+product.price})
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      };

    cart.forEach((product)=>{total=total+product.price})
    return(
        <div className="flex flex-col justify-center items-center">
            <h1 className="flex justify-center w-auto md:w-[400px] items-center m-5 rounded-lg bg-secundary  p-2 ">You products in the cart:</h1>
            {  cart.length === 0 ? 
                <div className="flex flex-col justify-center items-center p-[20px]">
                    <h1 className="flex justify-center  w-auto md:w-[400px] items-center m-5 rounded-lg bg-secundary  p-2 ">there are no products in the cart!</h1>
                    <Link href={"http://localhost:3000/home"}><button className="bg-secundary p-2 m-2 rounded-lg border-2 border-terciary hover:border-secundary hover:bg-terciary">go back to home</button></Link>
                    <Link href={"http://localhost:3000/products"}><button className="bg-secundary p-2 m-2 rounded-lg border-2 border-terciary hover:border-secundary hover:bg-terciary">go to products</button></Link>
                </div>
                :
                <div className="flex flex-row justify-center items-center bg-primary border-secundary">
                <div>
                    {cart.map((product)=>(
                        <div className=" flex m-5 rounded-lg bg-secundary  p-2 hover:drop-shadow-xl hover:scale-110 transition duration-300 ease-in-out" key={product.id}>
                            <div className="">
                            <Image className="rounded-lg" src={product.image} alt={product.name} width={100} height={60}/>
                            </div>
                            <div className="p-5">
                            <h1 className="p-2">{product.name}</h1>
                            <h1 className="p-2">${product.price}</h1>
                            <button className="p-1 rounded-lg border-2 border-terciary transition dutation-500 ease-in-out hover:border-error " onClick={() => deleteProduct(product.id)}>delete</button>
                            </div>
                        </div>
                    ))}
                </div>
        
                <div>
                    <h1 className="text-secundary text-2xl" >Total: ${total}</h1>
                    <button onClick={handClick} className="bg-secundary p-2 rounded-lg border-2 border-terciary transition dutation-500  hover:border-secundary hover:bg-green-600 hover:text-black">CheckOut</button>
                </div>
                </div> 
        }
  </div>
    )
}

export default  Cart