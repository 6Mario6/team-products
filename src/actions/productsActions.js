import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCESS,
    ADD_PRODUCT_ERROR
} from '../types';
import AxiosClient from '../config/axios';
import Swal from 'sweetalert2';

export function createNewProductAction(product) {
    return async(dispatch) => {
        dispatch(addProduct());
        try {
            await AxiosClient.post('/products', product);
            dispatch(addProductSucess(product));

            Swal.fire(
                'Success',
                'the product was added successfully',
                'success'
            )
        } catch (error) {
            console.log(error);
            dispatch(addProductError(true));
            Swal.fire(
               {
                   icon: 'error',
                   title: 'There was a error',
                   text: 'There was a error, loading the product'
               }
            )
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
});

const addProductSucess = (product) => ({
    type: ADD_PRODUCT_SUCESS,
    payload: product
});

const addProductError = state => ({
    type: ADD_PRODUCT_ERROR,
    payload: state
});