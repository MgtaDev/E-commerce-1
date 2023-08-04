import axios from "axios";
import { ALLCOLORS, ALLPRODUCTS, ALLSIZES } from "./action-types";

// aca la ruta directamente porque la url base ya esta osea que solo queda por la ruta ejemplo:/producto

//action que trae la data
export const products = () => async dispatch => {
 const {data} =await axios.get("/producto")
 dispatch({
    type: ALLPRODUCTS,
    payload: data
 })
};
export const categories = () => async dispatch => {
   const {data} =await axios.get("/categoria")
   dispatch({
      type: ALLPRODUCTS,
      payload: data
   })
  };export const subcategories = () => async dispatch => {
   const {data} =await axios.get("/subcategoria")
   dispatch({
      type: ALLPRODUCTS,
      payload: data
   })
  };export const brands = () => async dispatch => {
   const {data} =await axios.get("/marca")
   dispatch({
      type: ALLPRODUCTS,
      payload: data
   })
  };export const sizes = () => async dispatch => {
   const {data} =await axios.get("/size")
   dispatch({
      type: ALLSIZES,
      payload: data
   })
  };export const colors = () => async dispatch => {
   const {data} =await axios.get("/color")
   dispatch({
      type: ALLCOLORS,
      payload: data
   })
  }