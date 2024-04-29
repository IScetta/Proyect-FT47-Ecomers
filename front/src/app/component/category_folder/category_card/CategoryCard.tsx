import { ICategory } from "@/Types/Types";
import Image from "next/image";
import styled from "styled-components";

const CategoryCardContainer = styled.div`
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f8f9fa;
    /*  */
    border-radius: 10px;
    padding: 10px;
    transition: transform 0.5s ease;
    /*  */
    h2{
        margin: 10px;
        font-size: 15px;
    }
     &:hover{
        transform: scale(1.15);
        img{
            transform: scale(1.1);
            border: 2px solid #8324ff;
           /* border-radius: 10px ; */
        }
       
     }
`
const CategoryImg = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border: 2px solid #333;
    transition: border-radius 0.5s ease;
    &:hover {
    border-radius: 10px;
  } 
`


const CategoryCard = ({category}:{category : ICategory}):React.ReactElement=>{
    return(
            <div className="flex flex-col w-[150px] h-[150px] items-center justify-center bg-primary rounded-[10px] p-[10px] transition duration-300 ease-in-out hover:scale-110">
                <Image className="h-[100px] w-[100px] rounded-full border-2 border-secundary transition duaration-300 ease-in-out hover:border-terciary" src={category.image} alt={category.name} width={100} height={100}/>
                <h2>{category.name}</h2>
            </div>

        )
}

export default CategoryCard;