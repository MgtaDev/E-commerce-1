import { ALLCATEGORIES, ALLPRODUCTS, COPY_ALLPRODUCTS, ALLBRANDS, ALLCOLORS, ALLSIZES, ALLSUBCATEGORIES, PRODUCTS_DETAIL, CLEAN_DETAIL, PRODUCTS_FILTERED, POST_FAVORITES_API, POST_FAVORITES_LS, DELETE_FAVORITES, ADD_TOCART, PRODUCTOS } from "./action-types";
const storedLocalFavorites = localStorage.getItem("localFavorites");
const initialLocalFavorites = storedLocalFavorites ? JSON.parse(storedLocalFavorites) : [];

const InitialState = {
    Allproducts: [],
    copyAllProducts: [],
    Allcategories: [],
    Allsubcategories: [],
    Allbrands: [],
    Allsizes: [],
    Allcolors: [],
    productsDetail: [],
    productsFiltered: [],
    productos: [],
    favorites: [],
    localFavorites: initialLocalFavorites,
    cartProducts: []
}

const reducer = (state = InitialState, {type, payload}) => {
    switch (type) {
        case ALLPRODUCTS :
            return{
                ...state,
                Allproducts: payload
            }
        case PRODUCTOS:
            return{
                ...state,
                productos: payload
            }
        //case provisional
        case COPY_ALLPRODUCTS:
            return{
                ...state,
                copyAllProducts: payload
            }
        case ALLCATEGORIES :
            return{
                ...state,
                Allcategories: payload
            }
        case ALLSUBCATEGORIES :
            return{
                ...state,
                Allsubcategories: payload
            }
        case ALLBRANDS :
            return{
                 ...state,
                Allbrands: payload
            }
        case ALLCOLORS :
            return{
                ...state,
                Allcolors: payload
            }
        case ALLSIZES :
            return{
                ...state,
                Allsizes: payload
            }
        case PRODUCTS_DETAIL:
            return {
                ...state,
                productsDetail: payload
            };
    
        case CLEAN_DETAIL:
            return {
                ...state,
               productsDetail: []
            }
        case POST_FAVORITES_API:
            return {
                ...state,
                favorites: payload
            }

        case POST_FAVORITES_LS:
            const productsFav = (id) => {
                return state.productos.find((prod) => prod.id === id);
            };

            if (payload.length > 0) {
                const newLocalFavorites = [...state.localFavorites, productsFav(payload)];
                // Actualiza el Local Storage con la nueva lista de favoritos
                localStorage.setItem("localFavorites", JSON.stringify(newLocalFavorites));
    
                return {
                    ...state,
                    localFavorites: newLocalFavorites,
                };
            } else {
                return {
                    ...state,
                    localFavorites: payload
                }
            }

        case DELETE_FAVORITES:
            const newLocalFavoritesAfterDelete = state.localFavorites.filter((item) => item.id !== payload);
            // Actualiza el Local Storage con la nueva lista de favoritos después de eliminar
            localStorage.setItem("localFavorites", JSON.stringify(newLocalFavoritesAfterDelete));
      
            return {
              ...state,
              localFavorites: newLocalFavoritesAfterDelete,
            };
                
        case PRODUCTS_FILTERED:
            const filtrarProductos = (productos, filtro) => {
                return productos.filter((producto) => {
                  if (filtro.categoriaId && filtro.categoriaId.length > 0) {
                    if (!filtro.categoriaId.includes(producto.categoriaId)) {
                      return false;
                    }
                  }
                  if (filtro.marcaId && filtro.marcaId.length > 0) {
                    if (!filtro.marcaId.includes(producto.marcaId)) {
                      return false;
                    }
                  }
              
                  if (filtro.precio_venta && filtro.precio_venta.min && filtro.precio_venta.max) {
                    const precioVenta = parseFloat(producto.precio_venta);
                    if (precioVenta < filtro.precio_venta.min || precioVenta > filtro.precio_venta.max) {
                      return false;
                    }
                  }
              
                  if (filtro.tamañoId && filtro.tamañoId.length > 0) {
                    if (!filtro.tamañoId.includes(producto.tamañoId)) {
                      return false;
                    }
                  }
                  return true;
                });
              };
              const productosFiltrados = filtrarProductos(state.copyAllProducts.productos, payload);
            return {
                ...state,
                productsFiltered: productosFiltrados
            }

            case ADD_TOCART:
                return {
                    ...state,
                    cartProducts: payload
                };
        
        default:
        return state
    }
}

export default reducer;