"use client";

import { commentsApi } from "../apis/comments";

type Comments = {
  id: number;
  nome: string;
  nota: number;
  data: string;
  comentario: string;
};

export const Comments = () => {

  return (

    <div className="bg-white rounded-lg mb-10 p-5  mt-10 justify-center items-center flex flex-col w-screean">
      <h2 className="flex w-screen max-w-[1000px] justify-center text-gray-500 font-bold text-2xl pb-10 border-b border-gray-400  ">Avaliações no Ifood </h2>
    
     
       
         {commentsApi.map((comment) => (
           <div key={comment.id} className="flex flex-col w-screen border-b border-gray-400 p-5  max-w-[1000px]  ">
         
             <span className="text-gray-600 font-bold text-xl">{comment.nome}</span>
             <div className="flex justify-between items-center gap-3">
               <div className="flex justify-center items-center gap-2">
                 <span className="text-gray-600 font-bold text-lg">{comment.nota}</span>
                 <div className="flex">
                   {(() => {
                     const stars = [];
                     const notaInteira = Math.floor(comment.nota); // força inteiro
                     for (let i = 0; i < 5; i++) {
                       stars.push(<span key={i}>{i < notaInteira ? '⭐' : ''}</span>);
                     }
                     return stars;
                   })()}
                 </div>
               </div>
               <div>
                 <span className="text-gray-400">{comment.data}</span>
               </div>
             </div>
             <div>
               <p className="text-gray-500">{comment.comentario}</p>
             </div>
           </div>
         ))
         }
     </div>
    
   
  )

}
