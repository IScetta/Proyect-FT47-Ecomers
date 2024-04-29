import { IProduct, IUserLogin, IUserRegister } from "@/Types/Types";
import { productsToPreLoad } from "@/utils/preLoadData";
import { error } from "console";

const api_url=process.env.NEXT_PUBLIC_API_URL;
// console.log(api_url);


async function getProducts(){
    const res = await fetch(`${api_url}/products`);
    const data:IProduct[] = await res.json();
    return await PreloadImage(data);
   }

async function PreloadImage(data:IProduct[]) {
    for (let i = 0; i < data.length; i++) {
        data[i].image = productsToPreLoad[i].image;
        
    }return data;
}

async function getProductsById(id: string) {
    const products = await getProducts()
    const product = products.find((product)=>product.id.toString()===id)
    if(!product) throw new Error("Product no Found");
    // console.log(product)
    return product
}

async function login(userData:IUserLogin) {
    const response = await fetch(`${api_url}/users/login`,{
        method: "POST",
        headers:{
            "content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });

    if(response.ok){return response.json()}
    else {return undefined}
}


async function register(userData:IUserRegister) {
    const response = await fetch(`${api_url}/users/register`,{
        method: "POST",
        headers:{
            "content-Type": "application/json",
        },
        body: JSON.stringify(userData)
    })
    if(response.ok){return response.json()}
    else {return undefined}
}


   export {
    getProducts,
    getProductsById,
    login,
    register};