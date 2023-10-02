import CardsReviwers from "./CardsReviwers";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {cleanPreview, previewrsId} from "../../../redux/actions"

const ReviwerD = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const stateReviwerds = useSelector(state => state.AllRevierwsId);
  console.log(stateReviwerds)
  useEffect(()=>{
    dispatch(previewrsId(id))
    dispatch(cleanPreview())
  },[dispatch, id])
  return (
    <div>
      {Array.isArray(stateReviwerds) && stateReviwerds.length > 0 ? (
        stateReviwerds.map(({ nameClient, rating, fecha, comentario }) => (
          <CardsReviwers
            key={nameClient}
            nameClient={nameClient}
            rating={rating}
            fecha={fecha}
            comentario={comentario}
          />
        ))
      ) : (
        <div className="rounded-mg mt-2 py-2 border w-[921px] h-[100px]">
          <h2 className="text-center font-bold text-gray-700 py-7 align-center">Aún sin comentarios</h2>
        </div>
      )}
    </div>
  );
}

export default ReviwerD;