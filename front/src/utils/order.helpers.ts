
import axios from "axios";

const api_url = process.env.NEXT_PUBLIC_API_URL;
// const token = process.env.NEXT_PUBLIC_TOKEN_AUTHORIZARION;



const createOrder = async(products: number[],token :string | null)=>{

    try {
        if(!products.length){throw new Error("No products in the order")}
        else if(!token){throw new  Error("No token privided")}
        else if(!api_url){throw new Error("No API URL provided")}
        const response = await axios.post(`${api_url}/orders`, 
        {products},
        {headers: {
            Authorization: token,
        }});
        return response.data;
    } catch (error) {
        throw error;
    }

}


// const createOrder = async (products:number[])=>{
//     try {
//         // console.log(products)
//         const product = [1,2,3]
//         console.log("Token: ", token);
//         console.log("API URL :", api_url);
//         console.log("array: ", products)
//         if(!product.length){throw new Error("No products in the order")}
//         else if(!token){throw new  Error("No token privided")}
//         else if(!api_url){throw new Error("No API URL provided")}

//         const response = await fetch(`${api_url}/orders`,{
//             method: "POST",
//             body:JSON.stringify(product),
//             headers:{"Authorization": token},
//         });
//         const data = await response.json()
//         console.log(data)
//         return data;

//     } catch (error) {
//         throw error;
//     }

// }

const getUserOrder = async (token:string | undefined)=>{
    try {
        if(!token){throw new Error("No token provided")}
        else if(!api_url){throw new Error("No API URL provided")}
        const response = await fetch(`${api_url}/users/orders`,{
            method: "GET",
            headers:{"Authorization":token}
        });
        const data = await response.json() 
        console.log(data)
        return data;
    } catch (error) {
        throw error;
    }

}


  
export {
    createOrder,
    getUserOrder,
}