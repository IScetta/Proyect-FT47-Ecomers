"use client"
import ProductCards from "../../product_folder/product_cards/ProductCards"
import CategoryCards from "@/app/component/category_folder/category_cards/CategoryCards"
import styled from "styled-components"
import SlidersHome from "../home/sliders/Sliders"
import Publis from "../publis/Publis"
import PublisSlider from "./publis_slider/PublisSlider"


const Container=styled.div`
background-color: #c5c5c5 ;
`

const SliderContainer=styled.div`
    
    margin: 30px;   
`

const HomeContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: #c5c5c5;
`

const Home:React.FC =():React.ReactElement =>{
    return(
        <div className="bg-primary">
            <div className="m-[30px] mt-[40px]">
            <SlidersHome/>
            </div>
        <div className="flex flex-col items-center justify-center p-[10px] bg-primary">
            <div className=" hidden md:flex md:flex-col lg:flex lg:flex-row">
            <Publis/>
            </div>

            <div className=" md:hidden mt-[10px] p-[20px] bg-secundary w-[90%] rounded-xl flex justify-center">
            <PublisSlider/>
            </div>
            
            <CategoryCards/>
            <ProductCards/>
        </div>
        {/* <Footer/> */}
        </div>
    )
}

export default  Home