import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { createNewProductAction } from "../../../actions/productsActions";
import { showAlert, hideAlert } from "../../../actions/alertActions";
import { useDispatch, useSelector } from "react-redux";
import { Message } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const CreateProducts = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const alert = useSelector((state) => state.alert.alert);
  const addProduct = (product) => {
    dispatch(createNewProductAction(product));
  };

  const submitProduct = (e) => {
    e.preventDefault();

    if (name.trim() === "" || price <= 0) {
      const alert = {
        msg: "fields are required",
      };

      dispatch(showAlert(alert));
      return;
    }

    dispatch(hideAlert());

    addProduct({ name, price });

    history.push("/");
  };
  return (
    <div>
      {alert && (
        <Message negative>
          <Message.Header>
            Error
          </Message.Header>
          <p>{alert.msg}</p>
        </Message>
      )}
      <Form onSubmit={submitProduct}>
        <Form.Field>
          <label>Product Name</label>
          <input
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Price Product</label>
          <input
            type="number"
            placeholder="Product Price"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </Form.Field>
        <Button className="button" primary type="submit">
          Add Product
        </Button>
      </Form>
      {loading && <p>loading...</p>}
      {error && (
        <Message negative>
          <Message.Header>There was an error</Message.Header>
          <p>Error saving the product</p>
        </Message>
      )}
    </div>
  );
};

export default CreateProducts;
