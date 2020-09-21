import React from 'react';
import EditProducts from '../../components/organisms/EditProducts/EditProducts';
import "../Edit/Edit.scss";

const Edit = () => {
    return (
      <div className="edit-page padding-layout">
          <div className="card-form">
            <div className="card-form__title">
              <h2>
                Edit Product
              </h2>
            </div>
            <EditProducts/>
          </div>
        </div>
    )
}

export default Edit;