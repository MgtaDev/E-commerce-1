import Rating from "react-rating";
import { FaStar , FaRegStar} from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';



const CardsReviwers = ({ nameClient, rating, fecha, comentario }) => {
  const formattedFecha = new Date(fecha).toISOString().split("T")[0];
  return (
    <div className="border border-gray-300 rounded shadow-md p-4">
    <div className="flex items-center mb-4">
    <FaUserAlt className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-xl" />
      <h2 className="text-xl font-semibold ml-5 text-gray-700">{nameClient}</h2>
    </div>
    <Rating
        initialRating={rating}
        emptySymbol={<FaRegStar className="text-gray-400 text-lg"/>}
        fullSymbol={<FaStar className="text-yellow-300 text-lg"/>}
        readonly={true}
      />
      <div className="flex justify-between">
      <p className="text-gray-600">{comentario}</p>
      <p className="text-sm font-medium text-gray-500">{formattedFecha}</p>
      </div>

  </div>
  );
};

export default CardsReviwers;
