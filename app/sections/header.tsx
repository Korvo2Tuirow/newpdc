
import Image from "next/image"
import logo from "@/public/image/NewLogoPdC.png"

export const Header = () => {
  return (
    <>
      <div className="relative flex  w-full h-[600px] overflow-hidden ">
        <video
          className="absolute -top-15  items-center w-full h-full object-cover"
          src="https://pointdocanal.vercel.app/PDCvideo.mp4"
          autoPlay
          loop
          muted
        />

          <div  className="absolute flex  w-full z-10  object-cover">
            <Image
              src={logo}
              alt="Logo"
              width={550}
              height={550}
             
            
            />
          </div>

       
        
      </div>
    </>
  );
};
