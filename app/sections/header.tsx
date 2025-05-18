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
            className="w-screen justify-center object-cover h-250 "
          />
        </div>

        <div className="absolute flex items-center justify-center w-full h-[550px] z-10  object-cover ">
          <Image src={logo} alt="Logo" width={500} height={500} />
        </div>

      </div>

      <div className="flex flex-col items-center justify-center ">
        <div className="p-5 mt-5 text-3xl font-bold flex justify-center text-center  w-screen max-w-[1000px] text-gray-700">🍔🔥 Bem-vindo ao Point do Canal – O Sabor que Conquista!</div>
        
        <div className="p-5  flex  w-screen text-2xl text-center text-gray-600 w-screen  max-w-[1500px]">Se você busca hambúrgueres suculentos com pão de fabricação própria, pastéis crocantes, caldos irresistíveis e aquele açaí cremoso para refrescar o dia, você está no lugar certo! 😍 Aqui, cada detalhe faz a diferença. Nosso pão é artesanal, feito diariamente para garantir frescor e sabor incomparáveis. Cada ingrediente é escolhido com carinho, resultando em uma experiência gastronômica única e inesquecível. 📍 Peça agora e descubra o verdadeiro sabor! 🚀 Delivery rápido | 🏠 Ambiente aconchegante | ❤️ Feito com paixão 🔽 Faça seu pedido agora mesmo!</div>
      </div>
    </>
  );
};
