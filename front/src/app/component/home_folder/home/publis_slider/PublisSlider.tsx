
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"


const PublisImg=[
    "/oie_Xn0paeymRMBE.jpg",
    "/oie_rXcoxLdPkZxA.jpg",
    "/oie_r0gBBjSw1vqj.jpg"
]
// {PublisImg.map((url,index)=>(
//     <div key={index} className="m-[20px]">
//         <Image className=" rounded-lg transition duration-300 hover:scale-110" src={url} alt={index.toString()} width={200} height={357} />
//     </div>
// ))}


export default function PublisSlider(){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2000
      };
    return(
        <div className="flex flex-col items-center bg-secundary w-[80]">
            <Image className="md:m-[20px] m-[10px] w-auto rounded-lg md:transition md:duration-300 md:hover:scale-110 " src="https://img.freepik.com/vector-premium/fondo-cyber-monday-futurista-isometrico_23-2149100687.jpg?w=740" alt="" width={450} height={450} />

            <Slider className="bg-secundary items-center w-[200px]" {...settings}>
                <div>
                    <img className="bg-secundary items-center h-[357px] w-full rounded-[20px]" src={PublisImg[0]} alt="0" />
                </div>
                <div>
                    <img className="bg-secundary items-center  h-[357px] w-full rounded-[20px]" src={PublisImg[1]} alt="1" />
                </div>
                <div>
                    <img className="bg-secundary items-center h-[357px] w-full rounded-[20px]" src={PublisImg[2]} alt="2" />
                </div>
            </Slider>
        </div>
    )
} 



