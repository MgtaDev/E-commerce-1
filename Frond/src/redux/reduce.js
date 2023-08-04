import { ALLPRODUCTS, SELECTEDCATEGORY} from "./action-types";


const InitialState = {
    Allproducts: [],
}

const reducer = (state = InitialState, {type, payload}) => {
    switch (type) {
        case ALLPRODUCTS :
            return{
                ...state,
                Allproducts: payload
            }
        case SELECTEDCATEGORY:
            return{
                ...state,
                SELECTEDCATEGORY:payload
            }   
        default:
            return state
    }
}

export default reducer;