import axios from "axios";
import { ALLPRODUCTS } from "./action-types";

// aca la ruta directamente porque la url base ya esta osea que solo queda por la ruta ejemplo:/producto

//action que trae la data, hay que pasarle por query la cantidad de paginas 
export const products = (size, page) => async dispatch => {
   const { data } = await axios.get("/producto", {
      params: {
        size: size,
        page: page,
      },
    });
    dispatch({
      type: ALLPRODUCTS,
      payload: data,
    });
};