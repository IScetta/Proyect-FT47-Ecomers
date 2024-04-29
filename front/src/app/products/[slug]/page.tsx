// "use client"

import ProductPage from "@/app/component/product_folder/product_page/ProductPage";
import { getProductsById } from "@/utils/helpers";



async function ProductPages({params}:{params: any}){
    const {slug} = params;
    const product= await getProductsById(slug) 
    // console.log(product);
    
    return(

        <>
        <ProductPage  product={product}/>
        </>
    )
       
}

export default ProductPages