import { 
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS, 
    PRODUCT_LIST_FAIL 
} from '../constants/productConstants'; // Constants for product actions

// Reducer for product list
// This reducer handles the state of the product list in the Redux store
export const productListReducer = (state = { products: [] }, action) => {
    switch(action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] }
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload }
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}