// "use client"

import styled from "styled-components"
import CategoryList from "../category_list/CategoryList"



const CategoryContainer = styled.div`
color: #c5c5c5;
padding:  20px;
border-radius: 5px ;
cursor: pointer;
font-weight: bold;
`


const Categories:React.FC = ():React.ReactElement=>{
    return(
        <div className="p-[20px] bg-secundary rounded-[5px] cursor-pointer font-bold">

           <CategoryList/> 

        </div>

    )
}

export default Categories;