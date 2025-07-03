"use client";
import React from "react";
import "./Banner.css";
import bannerImage from "../../../../assets/images/ironyFit Home Banner1.jpg";
import downArrrow from "../../../../assets/icons/downward-arrow.png";
import { useTypewriter } from "react-simple-typewriter";

const Banner = () => {
  
  const [text1] = useTypewriter({
    words: ["Hard", "Pays Off"],
    loop: 0,
  });
  const [text2] = useTypewriter({
    words: ["Good", "Proud"],
    loop: 0,
  });

  return (
    <div className="relative z-10">
      {/* Banner Image section  */}
      <div>
        <img
          src={bannerImage}
          alt="Banner Image"
          className=" w-full lg:h-[700px] md:h-[600px] sm: h-[550px] object-cover"
        />
      </div>
      {/* polygen div >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <div className="absolute
      lg:top-[40%] lg:left-[41%] 
      md:top-[20%] md:left-[28%] 
      sm: top-[20%] sm: left-[10%] 
      text-gray-900
      ">
        {/* Polygon 1 */}
        <div className="Bannerpolygen flex items-center justify-center 
        w-[350px] h-[200px]">
          <p className="w-[450px] h-[75px] text-center skew-y-[17deg] text-3xl font-extrabold uppercase ">
            <span>Work</span> <br />
            <span>{text1}</span>
          </p>
        </div>
        <div className="Transpolygen
        w-[350px] h-[40px]" />

        {/* Polygon 2 */}
        <div  className="Bannerpolygen flex items-center justify-center mt-24">
          <p className=" w-[450px] h-[75px] text-center skew-y-[17deg] text-3xl font-extrabold uppercase">
            <span>Feel</span> <br />
            <span>{text2}</span>
          </p>
        </div>
        <div className="Transpolygen
        w-[350px] h-[40px]" />

        {/* Polygon 3 */}
        <div  className="Bannerpolygen flex items-center justify-center mt-48">
          <p className="flex justify-center items-center  text-3xl font-extrabold uppercase">
            <img
            src={downArrrow}
            alt="down arrow icon"
            className="w-[50px] skew-y-[20deg] "
            />
          </p>
        </div>

      </div>
    </div>
  );
};

export default Banner;
