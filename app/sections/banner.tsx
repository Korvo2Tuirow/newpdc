import Image from "next/image";
import logo from "@/public/image/logo/NewLogoPdC.png";
import React from "react";
import { NavBar } from "./navBar";
import bannerImg from "@/public/image/bannerImg01.jpg";
export const Banner = () => {
  return (
    <>
      <div className="flex  w-full h-[800px] overflow-hidden s">
        <div className="relative w-screen h-full z-0 ">
          <Image
            src={bannerImg}
            alt="Banner"
            width={1000}
            height={1000}
            className="object-cover w-screen h-[800px] "
          />

          {/*<div className="relative w-screen h-full z-0 -top-25">*/}
          {/*  <video
            width="1000"
            height="240"
            controls
            autoPlay
            muted
            loop
            className="w-screen justify-center object-cover h-250 "
          >
     
            <source src="/video/PDCvideo.mp4" type="video/mp4" />
          </video>
        */}
        </div>

        <div className="absolute flex items-center justify-center w-full h-[720px] z-10  object-cover ">
          <Image src={logo} alt="Logo" width={500} height={500} />
        </div>
      </div>
    </>
  );
};
