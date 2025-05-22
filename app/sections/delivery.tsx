import Image from "next/image";
import motoca from "@/public/image/motoca.png";

export const Delivery = () => {
  return (
    <div className="flex  justify-center items-center py-10 bg-gradient-to-t from-blue-500 to-purple-500 overflow-hidden">
      <div className="lg:flex  items-center justify-center   max-w-[1000px] h-full ">
        <div className="flex items-center justify-center text-4xl font-bold text-center text-white p-5 text-shadow-black text-shadow-lg/70">
          PEÇA JÁ O SEU PEDIDO E RECEBA NO CONFORTO DO SEU LAR
        </div>
        <div className="p-5 flex items-center justify-center ">
          <Image
            src={motoca}
            alt="motoca"
            width={500}
            height={500}
            className="  min-h-[300px] min-w-[300px]"
          />
        </div>
      </div>
    </div>
  );
};
