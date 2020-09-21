import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const EditProducts = () => (
  <Form>
    <Form.Field>
      <label>Product Name</label>
      <input placeholder='Product Name' />
    </Form.Field>
    <Form.Field>
      <label>Price Product</label>
      <input placeholder='Product Price' />
    </Form.Field>
    <Button className="button" primary type='submit'>Save Product</Button>
  </Form>
)

export default EditProducts;