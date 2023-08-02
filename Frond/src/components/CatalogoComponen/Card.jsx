import { AiFillHeart } from "react-icons/ai";

const Card = ({title, price, image }) => {
  return (
    <div className="grid grid-cols-1 rounded-lg bg-white px-5 py-10 relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" >
      <button><AiFillHeart className="absolute overflow-hidden group hover:scale-125 transition-transform duration-300 transform right-2 top-2 text-2xl text-slate-400" /></button>
      <img className="rounded-lg w-full m-auto shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" src={image} alt={title} />
      <h2 className="pt-5 font-bold capitalize text-xl">{title}</h2>
      <p className="font-semibold text-lg pb-5">{price}</p>
      <button className="bg-black rounded-lg py-3 px-5 m-auto hover:bg-slate-500 transition-colors text-white">agregar a mi bolsa</button>
    </div>
  );
};

export default Card;
