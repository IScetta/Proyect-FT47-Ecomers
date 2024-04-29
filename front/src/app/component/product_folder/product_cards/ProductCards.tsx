// "use client"

import ProductCard from "../product_card/ProductCard";
import styled from "styled-components"
import { getProducts } from "@/utils/helpers";
import Link from "next/link";



const ProductCardsContainer = styled.div`
background-color: #c5c5c5;
display: flex;
flex-wrap:wrap ;
justify-content: center;
gap: 20px;
text-decoration: none;
`

  
async function ProductCards(){
    const products = await getProducts();
    
    return(
        
        <div className="flex flex-wrap justify-center gap-[20px]">
            {products.map((product)=>(
                <Link href={`/products/${product.id}`} key={product.id}>
                <ProductCard product={product}/>       
                </Link>
            ))}
        </div>
    ) 
}




export default ProductCards;