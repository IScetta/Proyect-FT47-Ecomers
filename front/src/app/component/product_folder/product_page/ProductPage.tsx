"use client"

import { IProduct, IProductPreLoad } from "@/Types/Types";
import Image from "next/image";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function ProductPage({product}: {product :IProduct}) {
    // console.log(product);
    
    const [showToast, setShowToast] = useState(false);

    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        const newProduct = { 
            id: product.id, 
            name: product.name,
            price: product.price,
            image: product.image,
            categoryId: product.categoryId,
            stock: product.stock
        }
        cart.push(product);
        localStorage.setItem("cart",JSON.stringify(cart));
        setShowToast(true)
        Swal.fire({
            background: "#1b1b1b",
            color:"#c5c5c5",
            title: "Added to cart!",
            icon: "success",
            backdrop: `rgba(0, 0, 0, 0.5)`
          });
    }

    return(
        <div className="flex justify-center bg-primary">
            <div className="rounded-lg md:flex md:flex-col lg:flex lg:flex-row md:w-2/3 m-5 p-8  bg-secundary sm:flex sm:justify-center sm:items-center">
                <Image className="rounded-lg border-2 border-terciary" src={product.image} alt={product.name} width={300} height={300}/>
                    <div className="flex-col text-primary m-4 p-4 ">
                        <h1 className="pb-3 text-xl">{product.name}</h1>
                        <p className="pb-3 text-3xl">${product.price}</p>
                        <button onClick={addToCart} className=" mb-3 p-2 border-2 rounded-lg border-white bg-terciary hover:bg-violet-600 active:bg-violet-950 text-white ">add to cart</button>
                        <p className="pb-3">{product.description}</p>
                        <p className="pb-3 text-terciary">Stock: {product.stock}</p>
                        <p ></p>
                    </div>
            </div>
        </div>
    )
}

export default ProductPage