import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from 'semantic-ui-react';
import {editProductAction} from '../../../actions/productsActions';
import { useParams } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const EditProducts = () => { 
  
  const distpatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const [product, saveProduct] = useState({
    name: '',
    price: ''
  })
  const productEdit = useSelector((state) => state.products.productEdit);
  useEffect(() => {
    saveProduct(productEdit);
  },[productEdit]);

  const onChangeForm = e => {
    saveProduct({
      ...product,
      [e.target.name] : e.target.value
    })
  }

  const {name, price} = product;

  const submitEditProduct = e => {
    e.preventDefault();

    distpatch(editProductAction(product));
    history.push('/');
  }

  return(
  <Form onSubmit={submitEditProduct}>
    <Form.Field >
      <label>Product Name</label>
      <input placeholder='Product Name' 
        name="name"
        value={name}
        onChange={onChangeForm}/>
    </Form.Field>
    <Form.Field>
      <label>Price Product</label>
      <input 
      placeholder='Product Price'  
      name="price"
      value={price} 
      onChange={onChangeForm}/>
    </Form.Field>
    <Button className="button" primary type='submit'>Save Product</Button>
  </Form>
)
}
export default EditProducts;