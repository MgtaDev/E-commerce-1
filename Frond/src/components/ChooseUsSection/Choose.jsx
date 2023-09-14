import { BsSendCheck, BsBagCheckFill } from "react-icons/bs";
import { IoRibbonSharp } from "react-icons/io5";
import {BiGift} from "react-icons/bi"
import "../../index.css";

const ChooseUsSection = () => {
  return (
    <section className="bg-[#6d016e;] w-full h-full mt-20 mb-20">
      <div className="w-[80%] m-auto px-20 py-12">
        <h2 className=" text-center font-bold	text-3xl pb-10 text-white capitalize">por que escogernos?</h2>
        <div className=" container grid grid-rows-1 grid-cols-3 gap-20 items-center text-center capitalize	  text-white">
          <div className="flex flex-col items-center">
            <BsBagCheckFill className="text-7xl" />
            <h2 className="pt-5 text-2xl font-semibold">Conveniencia</h2>
            <p>
              Todas tus compras facil, rapido y online desde donde estes.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <IoRibbonSharp className="text-7xl" />
            <h2 className="pt-5 text-2xl font-semibold">Calidad</h2>
            <p>
              Productos certificados y avalados por expertos en belleza.
            </p>
          </div>
        
          <div className="flex flex-col items-center">
            <BsSendCheck className="text-7xl" />
            <h2 className="pt-5 text-2xl font-semibold">Global</h2>
            <p>
              Envíos internacionales seguros para llegar a donde estés.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUsSection;
