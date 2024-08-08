// interface Item {
//   id: number;
//   title: string;
//   local: string;
//   image: any;
//   price: string;
//   urgency: string;
//   link: string;
// }

// interface CarrouselProps {
//   itens: Item[];
// }

// const Patrimony = ({ itens }: CarrouselProps) => {
//   return (
//     <>
//       {" "}
//       <div className="bg-[#444]">
//         <h1 className="center">Lista De Compras IBP</h1>
//         {itens.map((item) => (
//           <div className="bg-[#f3f3f3] flex justify center rounded-lg m-[100px]">
//             <div className="ml-[50px]">
//               <p>
//                 {item.title}
//                 <span>- {item.local}</span>
//                 <img src={item.image} alt="" />
//                 <p>{item.price}</p>
//                 <p className="bg-red text-[#333] p-2 rounded-md w-[200px] p-2">Urgencia - {item.urgency}</p>
//                 <a className="text-white bg-[#444] p-2 rounded-lg " target="_blank" href={item.link}>
//                   Link
//                 </a>
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Patrimony;