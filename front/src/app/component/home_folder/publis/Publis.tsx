import Image from "next/image"


const PublisImg=[
    "/oie_Xn0paeymRMBE.jpg",
    "/oie_rXcoxLdPkZxA.jpg",
    "/oie_r0gBBjSw1vqj.jpg"
]


export default function Publis(){
    return(
        <div className="md:flex md:flex-col lg:flex lg:flex-row p-[20px] items-center bg-secundary rounded-xl">
            <div>
            <Image className=" md:m-[20px] m-[10px] h-auto rounded-lg md:transition md:duration-300 md:hover:scale-110 " src="https://img.freepik.com/vector-premium/fondo-cyber-monday-futurista-isometrico_23-2149100687.jpg?w=740" alt="" width={510} height={450} />
            </div>
            <div className="flex flex-row">
            {PublisImg.map((url,index)=>(
                <div key={index} className="m-[10px]">
                    <Image className=" rounded-lg transition duration-300 hover:scale-110" src={url} alt={index.toString()} width={200} height={357} />
                </div>
            ))}
            </div>

        </div>
    )
} 