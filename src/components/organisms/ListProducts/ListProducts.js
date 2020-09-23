import React, { useEffect } from "react";
import "../ListProducts/ListProducts.scss";
import {  Message } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAction } from "../../../actions/productsActions";
import Product from "../../molecules/Product/Product";
const ListProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getProducts = () => dispatch(getProductsAction());
    getProducts();
    //eslint-disable-next-line
  }, []);
  const products = useSelector(state => state.products.products);
  const error = useSelector(state=> state.products.error);
  const loading = useSelector(state=> state.products.loading);

  const renderList = ()=>(
          <>
      {products.length ===0 ? 'There is not products' : (products.map(product => 
          ( <Product product={product} key={product.id}/>)))}
          </>
  )
  return (
    <div className="listProducts">
     {loading && <p>Loading...</p>}
      {error && (
        <Message negative>
          <Message.Header>There was an error</Message.Header>
          <p>Error getting products</p>
        </Message>
      )}
      {renderList()}
    </div>
  );
};

export default ListProducts;
