// "use client"

import styled from "styled-components"
import { categoriesToPreLoad } from "@/utils/preLoadData";
import Category from "../category/Category"

const CategoryListContainer = styled.div`
border-radius: 12px;
border-bottom: 2px solid #8324ff;
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 10px;
`


const CategoryList:React.FC = ():React.ReactElement=>{
    return(
        <div className="flex flex-wrap justify-center rounded-[12px] border-b-2 border-terciary gap-[10px]">
        {categoriesToPreLoad.map((category,index)=>{
            return <Category key={index} category={category}/>
         })}
        </div>
    )
}

export default CategoryList;