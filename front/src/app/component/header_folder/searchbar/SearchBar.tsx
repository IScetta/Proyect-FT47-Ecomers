
'use client'
// import { SearchBarContainer, ButtonSearch, Input } from "./Search.style";

const SeachBar:React.FC =():React.ReactElement =>{
    return(
        <div className="flex w-[300] justify-between items-center p-[10]">
        <input className="p-2.5 w-full rounded-lg bg-text text-base text-primary border-2 border-text outline-0  hover:border-b-terciary" type="text" placeholder="Search" />
        <button className="bg-secundary rounded-lg text-primary border-2 border-terciary p-2.5 text-base hover:bg-terciary  hover:text-white active:bg-violet-900"> Search </button>
        </div>
    )

}

export default SeachBar;