import React from 'react';
import CreateProducts from '../../components/organisms/CreateProducts/CreateProducts';
import "../Create/Create.scss";
const Create = () => {
    return (
        <div className="create-page padding-layout">
          <div className="card-form">
            <div className="card-form__title">
              <h2>
                Add New Product
              </h2>
            </div>
            <CreateProducts/>
          </div>
        </div>
    )
}

export default Create;