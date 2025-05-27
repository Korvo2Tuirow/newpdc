import Image from "next/image";
import motoca from "@/public/image/delivery/motoca.png";
import ifood from "@/public/image/delivery/logo-smile.png";
import whatsapp from "@/public/image/delivery/logo-whatsapp.png";
import Link from "next/link";

// bg-gradient-to-t from-blue-500 to-purple-500
export const Delivery = () => {
  return (
    <div className="flex  justify-center items-center py-10 bg-gradient-to-t from-blue-500  overflow-hidden">
      <div className="lg:flex  items-center justify-center   max-w-[1000px] h-full ">
        <div>
          <div className="flex items-center justify-center text-4xl font-bold text-center text-white p-5 text-shadow-black text-shadow-lg/70 font-bold">
            FAÇA JÁ O SEU PEDIDO E RECEBA NO CONFORTO DO SEU LAR
          </div>

          <div className="flex items-center justify-center ">
            <Link href={"https://www.ifood.com.br/delivery/praia-grande-sp/hamburgueria-point-do-canal-ribeiropolis/40862c7c-d13b-4fe4-b51f-a03718c7e360"} target="_blank" >
              <Image
                src={ifood}
                alt="ifood"
                width={200}
                height={200}
                className=" min-h-[100px] min-w-[100px] p-5 rounded-full cursor-pointer"
              />
            </Link>
            <Link href="https://wa.me//5513997893815" target="_blank">
            <Image
              src={whatsapp}
              alt="whatsapp"
              width={250}
              height={250}
              className=" min-h-[100px] min-w-[100px] cursor-pointer "
            />
            </Link>
          </div>
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
