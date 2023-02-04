
import * as actionType from "../constants/productConstanst"
const getproductReducer = (state={products:[]}, action) => {
    switch (action.type) {
        case actionType.GET_PRODUCTS:
            return {products:action.payload}
        default: return state
    }

}

export default getproductReducer