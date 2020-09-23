import React from "react";
import "../Product/Product.scss";
import { Button } from "semantic-ui-react";
import "../Product/Product.scss";
import { useDispatch } from "react-redux";
import {
  removeProductsActions,
  getEditProduct,
} from "../../../actions/productsActions";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";


const Product = ({ product }) => {
  const { name, price, id } = product;
  const dispatch = useDispatch();
  const history = useHistory();
  const removeProduct = (id) => {
    dispatch(removeProductsActions(id));
  };

  const redirectEdition = (product) => {
    dispatch(getEditProduct(product));
    history.push(`/products/edit/${product.id}`);
  };

  const confirmRemoveProduct = (id) => {
    Swal.fire({
      title: "Are you sure buy product?",
      text: "You will buy this product!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, buy it!",
      cancelButtonText: "No, cancel it!",
    }).then((result) => {
      if (result.value) {
        removeProduct(id);
      }
    });
  };

  const renderCard = () => (
    <div className="card">
      <div onClick={() => confirmRemoveProduct(id)} className="card__buy-button"></div>
      <img src={require(`../../../assets/img/${Math.floor(Math.random() * 32) + 1 }.png`)} alt="" />
      <div className="card__description">
        <p className="card__description-name">{name}</p> 
        <p className="card__description-price">${price}</p>
      </div>
      <div className="card__button">
        <Button
          onClick={() => redirectEdition(product)}
          className="button"
          primary
          type="button"
        >Edit{" "}
        </Button>
      </div>
    </div>
  );

  return (
    <>
    {renderCard()}
    </>
  );
};

export default Product;
