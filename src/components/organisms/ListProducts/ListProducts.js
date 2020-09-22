import React, { useEffect } from "react";
import "../ListProducts/ListProducts.scss";
import { Table, Message } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAction } from "../../../actions/productsActions";
import Product from "../../molecules/Product/Product";
const ListProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getProducts = () => dispatch(getProductsAction());
    getProducts();
  }, []);
  const products = useSelector(state => state.products.products);
  const error = useSelector(state=> state.products.error);
  const loading = useSelector(state=> state.products.loading);

  return (
    <div className="listProducts">
     {loading && <p>Loading...</p>}
      {error && (
        <Message negative>
          <Message.Header>There was an error</Message.Header>
          <p>Error getting products</p>
        </Message>
      )}
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products.length ===0 ? 'There is not products' : (products.map(product => 
          ( <Product product={product} key={product.id}/>)))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ListProducts;
