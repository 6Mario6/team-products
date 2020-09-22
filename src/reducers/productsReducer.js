import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCESS,
    ADD_PRODUCT_ERROR,
    START_GET_PRODUCTS,
    GET_PRODUCTS_SUCCSESS,
    GET_PRODUCTS_ERROR,
    GET_REMOVE_PRODUCT,
    REMOVE_PRODUCT_SUCCESS,
    REMOVE_PRODUCT_ERROR,
    EDIT_PRODUCT,
    EDIT_PRODUCT_SUCESS,
    EDIT_PRODUCT_ERROR
} from '../types';

const initialState = {
    products: [],
    error: null,
    loading: false,
    productRemove: null,
    productEdit:null
}

export default function(state = initialState, action) {
    switch(action.type){
       case START_GET_PRODUCTS:
       case ADD_PRODUCT:
           return {
               ...state,
               loading: action.payload
           }
       case ADD_PRODUCT_SUCESS:
           return {
               ...state,
               loading: false,
               products: [...state.products, action.payload]
           }
           
        case GET_PRODUCTS_ERROR:
        case ADD_PRODUCT_ERROR:
        case REMOVE_PRODUCT_ERROR:
        case EDIT_PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case GET_PRODUCTS_SUCCSESS:
                return {
                    ...state,
                    loading: false,
                    error: null,
                   products: action.payload
        }
        case GET_REMOVE_PRODUCT:
            return {
                ...state,
                productRemove: action.payload 
        }
        case REMOVE_PRODUCT_SUCCESS:
            return {
                ...state,
                products: state.products.filter(product => product.id !== state.productRemove),
                productRemove: null
        }
        case EDIT_PRODUCT:
            return {
                ...state,
                productEdit: action.payload
        }
        case EDIT_PRODUCT_SUCESS:
            return  {
                ...state,
                productEdit: null,
                products: state.products.map(product => product.id === action.payload.id ? product = action.payload : product)
            }
       default:
           return state;     
    }
}