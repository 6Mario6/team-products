import React from "react";
import "../Header/Header.scss";
import { Button } from "semantic-ui-react";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <div className="header__container">
        <div className="header__title">
          <Link to={`/`}>
          <h1>Products App</h1>
          </Link>
        </div>
        <Link to={`/products/create`}>
            <Button className="button" primary type="button">
              Create Product
            </Button>
          </Link>
      </div>
    </nav>
  );
};

export default Header;
