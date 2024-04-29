"use client"

import CategoryCards from "@/app/component/category_folder/category_cards/CategoryCards"
import ProductCards from "@/app/component/product_folder/product_cards/ProductCards"

export default function productsPage(){
    return (
        <div className="bg-primary">
        <CategoryCards/>
        <ProductCards/>
        </div>
    )
}