// "use client"

import React from "react";
import styled  from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ImageView = [
"/oie_GE9tBVElK9cv.jpg",
"https://i.ebayimg.com/thumbs/images/g/cjsAAOSwJRNlqAa5/s-l1200.webp",
"/oie_VpXqZK2ZZ8Nz.jpg"
]


const ImageSlider = styled.img`
  background-color: #5a5a5a;
  align-items: center;
  width: 100%;
  height: 400px;
  border-radius: 20px;
  /* border: 2px solid red; */
`



const SlidersHome:React.FC = ()=>{
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
      <div className=" ">
    <Slider className="bg-[rgba(46, 46, 46, 1)]" {...settings}>
      <div>
        <img className="bg-secundary items-center w-full h-[170px] md:h-[300px] rounded-[20px]" src={ImageView[0]} alt="0" />
      </div>
      <div>
      <img className="bg-secundary items-center w-full h-[170px] md:h-[300px] rounded-[20px]" src={ImageView[1]} alt="1" />
      </div>
      <div>
      <img className="bg-secundary items-center w-full h-[170px] md:h-[300px] rounded-[20px]" src={ImageView[2]} alt="2" />
      </div>
    </Slider>
      </div>
    )
}

export default SlidersHome;
