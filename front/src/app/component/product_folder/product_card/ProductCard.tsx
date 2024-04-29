import styled from "styled-components"
import { IProductPreLoad } from "@/Types/Types"
import Image from "next/image"

const ProductCardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 20px;
cursor: pointer;
border-radius: 10px;
background-color: #1b1b1b;
color: #c5c5c5;
margin: 10px;
width: 220px;
transition: transform 0.3s ease;
&:hover{
    transform: scale(1.1);
    box-shadow: 5px 5px #8324ff96;
    img{
        border: 2px solid #8324ff86;                                                                                  
    }
}
 
h3{
    margin: 10px 0;
}
h4{
    margin: 10px 0;
    font-size: 13px;
}
`


const Name = styled.h3`
    /* font-size: 25px; */
    &:hover{
        color: #8324ff;
    }

`

const Price = styled.h3`
    font-size: 25px;

`


const ImageProduct = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 10px;
    border: 2px solid #333;
` 


const ProductCard=({product}: {product :IProductPreLoad}):React.ReactElement =>{
    return(
        <div  className="flex flex-col items-center justify-center p-[20px] cursor-pointer rounded-[10px] bg-secundary text-primary m-[10px] w-[220px] transition duration-300 ease-in-out hover:scale-110 hover:shadow-[0_5px_15px_0px_#8324ff]">
            <Image className="w-[150px] h-[150px] rounded-[10px] border-2 border-text" src={product.image} alt={product.name} width={150} height={150} />
            <h4 className="mb-[10px] hover:text-terciary">{product.name}</h4>
            <h3 className="mb-[10px] text-[25px]">$ {product.price}</h3>
            <h4>Stock: {product.stock}</h4>
        </div>
    )
}



export default ProductCard;
