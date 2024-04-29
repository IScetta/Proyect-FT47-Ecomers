"use client"

import { ICategory } from "@/Types/Types"
import PropTypes from "prop-types"
import styled from "styled-components"

const CategoryLink = styled.div`
padding: 10px;
border-radius: 10px;
font-size: 15px;
&:hover{
    background-color: #8324ff;
}
`

const Category = ({category}: {category:ICategory}):React.ReactElement=>{
    return (
       <div className="p-[10px] rounded-[10px] text-[15px] hover:bg-terciary"  >
        <h1>{category.name}</h1>
        {/* <img src={category.image} alt={category.name} /> */}
       </div> 
    )
}


// Category.propTypes = {
//     category:PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         image: PropTypes.string.isRequired
//     }).isRequired
// };

export default Category