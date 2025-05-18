"use client";
import { Header } from './sections/header';

import React from 'react';

import { Carrousel } from './sections/carroussel';

export default function Home() {
  return (
   <>
   <Header />
         <div className="flex flex-col items-center justify-center ">
        <div className="p-8 mt-5 text-3xl font-bold flex justify-center text-center  w-screen max-w-[1000px] text-gray-700">
          🍔🔥 Bem-vindo ao Point do Canal – O Sabor que Conquista!
        </div>

        <div className="p-8 -mt-8 flex  w-screen text-2xl text-center text-gray-600 w-screen  max-w-[1200px]">
          Se você busca hambúrgueres suculentos com pão de fabricação própria,
          pastéis crocantes, caldos irresistíveis e aquele açaí cremoso para
          refrescar o dia, você está no lugar certo! 😍 Aqui, cada detalhe faz a
          diferença. Nosso pão é artesanal, feito diariamente para garantir
          frescor e sabor incomparáveis. Cada ingrediente é escolhido com
          carinho, resultando em uma experiência gastronômica única e
          inesquecível. 📍 Peça agora e descubra o verdadeiro sabor! 🚀 Delivery
          rápido | 🏠 Ambiente aconchegante | ❤️ Feito com paixão 🔽 Faça seu
          pedido agora mesmo!
        </div>
      </div>

     <Carrousel/>
   </>
  )
}
