import Image from "next/image";
import logo from "@/public/image/NewLogoPdC.png";

export const Header = () => {
  return (
    <>
      <div className="flex  w-full h-[550px] overflow-hidden ">

        <div className="relative w-screen h-full z-0 -top-25">
          <video
            src="https://pointdocanal.vercel.app/PDCvideo.mp4"
            autoPlay
            loop
            muted
            className="w-screen justify-center object-cover h-250"
          />
        </div>

        <div className="absolute flex items-center justify-center w-full h-[550px] z-10  object-cover ">
          <Image src={logo} alt="Logo" width={500} height={500} />
        </div>

      </div>
    </>
  );
};
