import React from 'react';
import '../Product/Product.scss';
import { Button, Table } from "semantic-ui-react";
import '../Product/Product.scss';
import {useDispatch} from "react-redux";
import {removeProductsActions, getEditProduct} from '../../../actions/productsActions';
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom";

const Product = ({product}) => {
    const {name, price, id} = product;
    const dispatch = useDispatch();
    const history = useHistory();
    const removeProduct = id => {
        dispatch(removeProductsActions(id))
    }

    const redirectEdition = product => {
        dispatch(getEditProduct(product));
        history.push(`/products/edit/${product.id}`)
    }

    const confirmRemoveProduct = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, delet it!',
            cancelButtonText: "No, cancel it!"
        }).then((result)=> {
            if(result.value) {
                removeProduct(id);
            }
        })
    }

    return (
    <Table.Row className="table-row">
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell  className="table-price">${price}</Table.Cell>
        <Table.Cell className="table-actions">
        <Button onClick={()=> redirectEdition(product)} className="button" primary type="button"> Edit </Button>
        <Button 
        onClick={()=> confirmRemoveProduct(id)}
        className="button" primary type="button">
            Eliminar
        </Button>
        </Table.Cell>
      </Table.Row>
    );
}

export default Product;