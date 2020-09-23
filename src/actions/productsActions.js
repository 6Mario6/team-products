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
    START_EDIT_PRODUCT,
    EDIT_PRODUCT_SUCESS,
    EDIT_PRODUCT_ERROR
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


export function getProductsAction() {
    return async (dispatch) => {
        dispatch(getProducts());
        try {
            const response = await AxiosClient.get('/products');
            dispatch(getProductsSuccess(response.data));
        } catch (error) {
            console.log(error);
            dispatch(getProductsError());
        }
    }
}

const getProducts = () => ({
    type: START_GET_PRODUCTS,
    payload: true
});

const getProductsSuccess = products => ({
    type: GET_PRODUCTS_SUCCSESS,
    payload: products
});

const getProductsError = () => ({
    type: GET_PRODUCTS_ERROR,
    payload: true
});


export function removeProductsActions(id) {
    return async (dispatch) => {
        dispatch(getProductsRemove(id));
        try {
           AxiosClient.delete(`/products/${id}`);
            dispatch(productsRemoveSuccess());
            Swal.fire('Buy',' Your file has been purchased','success')
        } catch (error) {
            console.log(error);
            dispatch(productsRemoveError())
        }
    }
}

const getProductsRemove = id => ({
    type: GET_REMOVE_PRODUCT,
    payload: id
});

const productsRemoveSuccess = () => ({
    type: REMOVE_PRODUCT_SUCCESS
});

const productsRemoveError = () => ({
    type: REMOVE_PRODUCT_ERROR,
    payload: true
});

export function getEditProduct(product) {
    return async (dispatch) => {
        dispatch(getEditProductAction(product));
    }
}

const getEditProductAction = product => ({
    type: EDIT_PRODUCT,
    payload: product
});

export function editProductAction(product) {
    return async (dispatch) => {
        dispatch(editProduct());
        try {
           AxiosClient.put(`/products/${product.id}`, product);
           dispatch(editProductSuccess(product));
           Swal.fire(
            'Success',
            'the product was added successfully',
            'success'
            )
        } catch(error) {
            console.log(error);
            editProductError();
        }
    }
}

const editProduct = () => ({
    type: START_EDIT_PRODUCT
});

const editProductSuccess = (product) => ({
    type: EDIT_PRODUCT_SUCESS,
    payload: product
});

const editProductError = () => ({
    type: EDIT_PRODUCT_ERROR,
    payload: true
});