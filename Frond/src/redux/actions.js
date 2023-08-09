import axios from "axios";
import { ALLBRANDS, ALLCATEGORIES, ALLCOLORS, ALLPRODUCTS, COPY_ALLPRODUCTS, ALLSIZES, ALLSUBCATEGORIES, CLEAN_DETAIL, PRODUCTS_DETAIL, PRODUCTS_FILTERED, POST_FAVORITES_API, POST_FAVORITES_LS, DELETE_FAVORITES } from "./action-types";

// aca la ruta directamente porque la url base ya esta osea que solo queda por la ruta ejemplo:/producto

//action que trae la data
export const products = ({ page, size }) => async (dispatch) => {
    const { data } = await axios.get("/producto", {
      params: {
        page,
        size,
      },
    });
    dispatch({
      type: ALLPRODUCTS,
      payload: data,
    });

};
// esta accion es provisional, solo para llamar a 50 productos

export const productsCopy = () => async (dispatch) => {
  const { data } = await axios.get("/producto", {
    params: {
      page: 0,
      size: 50,
    },
  });
  dispatch({
    type: COPY_ALLPRODUCTS,
    payload: data,
  });

};

export const categories = () => async dispatch => {
   const {data} =await axios.get("/categoria")
   dispatch({
      type: ALLCATEGORIES,
      payload: data
   })
  };
  export const subcategories = () => async dispatch => {
   const {data} =await axios.get("/subcategoria")
   dispatch({
      type: ALLSUBCATEGORIES,
      payload: data
   })
  };
  export const brands = () => async dispatch => {
   const {data} =await axios.get("/marca")
   dispatch({
      type: ALLBRANDS,
      payload: data
   })
  };
  export const colors = () => async dispatch => {
   const {data} =await axios.get("/color")
   dispatch({
      type: ALLCOLORS,
      payload: data
   })
  };
  export const sizes = () => async dispatch => {
   const {data} =await axios.get("/size")
   dispatch({
      type: ALLSIZES,
      payload: data
   })
  };
  export const getProductsByDetail = (id) =>{
   return async (dispatch) => {
     try {
       const { data } = await axios.get(`/producto/${id}`);
         return dispatch({
           type: PRODUCTS_DETAIL,
           payload: data,
         });
       } catch (error) {
       alert("Error: " + error.response.data.error);
     }
   }}
 
 
 export const cleanDetail = () => {
   return {
     type: CLEAN_DETAIL
   };
  }

  export const productFilter = (filtros) => {
    return{
      type : PRODUCTS_FILTERED,
      payload: filtros
  }
  }

  export const addFavoriteAPI = (favorito)=>{
    try {
      return async (dispatch) => {
        await axios.post('/favorito', favorito);
        const {data} = await axios.get('/favorito')
            return dispatch({
            type: POST_FAVORITES_API,
            payload: data,
          });
        };
    } catch (error) {
      console.log(error);
    }
  }

  export const addFavoriteLS = (favorito)=>{
    return {
      type: POST_FAVORITES_LS,
      payload: favorito
    }
  }

  export const deleteFavoriteAPI = (idFav) =>{
    try {
      return async (dispatch) => {
        await axios.delete('/favorito', idFav);
        const {data} = await axios.get('/favorito')
        return dispatch({
          type: POST_FAVORITES_API,
          payload: data,
        });
      };
    } catch (error) {
      console.log(error);
    }
  }
  
  export const deleteFavoriteLS = (idFav) =>{
    return {
      type: DELETE_FAVORITES,
      payload: idFav
    }
  }
  
  export const clearLocalFavorites = () => {
    return {
      type: POST_FAVORITES_LS,
      payload: [],
    };
  };
  
  export const syncFavoritesWithAPI = () => {
    return async (dispatch, getState) => {
      const localFavorites = getState().localFavorites;
      
      try {
        // Enviar los favoritos locales a la API
        await axios.post(`/favorito`, localFavorites);
        const {data} = await axios.get('/favorito')
        // Actualizar el estado con los datos de la API
        dispatch({
          type: POST_FAVORITES_API,
          payload: data,
        });
  
        // Limpiar los favoritos locales después de sincronizar con la API
        dispatch(clearLocalFavorites());
      } catch (error) {
        console.log(error);
      }
    };
  };