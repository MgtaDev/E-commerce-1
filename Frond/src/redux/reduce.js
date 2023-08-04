import { ALLCATEGORIES, ALLPRODUCTS, ALLBRANDS, ALLCOLORS, ALLSIZES, ALLSUBCATEGORIES, SELECTEDCATEGORY} from "./action-types";


const InitialState = {
    Allproducts: [],
    Allcategories: [],
    Allsubcategories: [],
    Allbrands: [],
    Allsizes: [],
    Allcolors: []
}

const reducer = (state = InitialState, {type, payload}) => {
    switch (type) {
        case ALLPRODUCTS :
            return{
                ...state,
                Allproducts: payload
            }
        default:
        return state
    }
}

export default reducer;