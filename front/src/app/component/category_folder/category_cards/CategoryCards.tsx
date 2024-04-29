import {categoriesToPreLoad} from "@/utils/preLoadData"
import styled from "styled-components"
import CategoryCard from "../category_card/CategoryCard"

const CategoryCardsContainer = styled.div`
background-color: #1b1b1b;
color: #1b1b1b;
display: flex;
flex-wrap:wrap ;
justify-content: center;
gap: 20px;
margin: 20px;
border-radius: 10px;
/* cursor: pointer; */
padding: 30px;
`

const CategoryCards =()=>{
    
    return(
        <div className="flex flex-wrap justify-evenly  bg-secundary text-secundary gap-[20px] p-[30px] m-[20px] rounded-[10px]">
            {categoriesToPreLoad.map((category,index)=>
            <CategoryCard key={index} category={category} />
            )}
        </div>
    )
}

export default CategoryCards