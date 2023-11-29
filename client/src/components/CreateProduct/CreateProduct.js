import {React, useContext } from 'react';
import { Form, Button, Container} from 'react-bootstrap';

import { useForm } from '../../hooks/useForm';

import { AuthContext } from '../../contexts/AuthContext';
import {ProductContext} from '../../contexts/ProductContext'




 const CreateProduct = () => {
    const {userId} = useContext(AuthContext)
    const {onCreateProductSubmit} = useContext(ProductContext)

    const { values, changeHandler, onSubmit } = useForm({
        userId: userId,
        title: '',
        brand: '',
        category: '',
        weigth: '',
        price:'',
        imageUrl: '',
        description:'',
    }, {} , onCreateProductSubmit);


    return (
<section id="create-page" className="auth">
    <Form id="create" method="post" onSubmit={onSubmit}>
      <Container>
        <h1>Create Product</h1>

        <Form.Group controlId="title">
          <Form.Label>Product title:</Form.Label>
          <Form.Control
            type="text"
            value={values.title}
            onChange={changeHandler}
            placeholder="Enter game title..."
            name="title"
          />
        </Form.Group>

        <Form.Group controlId="brand">
          <Form.Label>Brand:</Form.Label>
          <Form.Control
            type="text"
            value={values.brand}
            onChange={changeHandler}
            placeholder="Enter game category..."
            name="brand"
          />
        </Form.Group>

        <Form.Group controlId="category">
          <Form.Label>Category:</Form.Label>
          <Form.Control
            as="select"
            value={values.category}
            onChange={changeHandler}
            name="category"
          >
            <option value="">Select...</option>
            <option value="Drill machines">Drill machines</option>
            <option value="Electrical screwdrivers">Electrical screwdrivers</option>
            <option value="Rechargable kits">Rechargable kits</option>
            <option value="Jig saws">Jig saws</option>
            <option value="Grinders">Grinders</option>
            <option value="Hand tools">Hand tools</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="weigth">
          <Form.Label>Weight:</Form.Label>
          <Form.Control
            type="text"
            value={values.weigth}
            onChange={changeHandler}
            placeholder="1-100kg"
            name="weigth"
          />
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>Price:</Form.Label>
          <Form.Control
            type="text"
            value={values.price}
            onChange={changeHandler}
            placeholder="0-2000 EUR"
            name="price"
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Image:</Form.Label>
          <Form.Control
            as="textarea"
            value={values.description}
            onChange={changeHandler}
            placeholder="Short summary..."
            rows="4"
            cols="50"
            name="description"
          />
        </Form.Group>

        <Form.Group controlId="imageUrl">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            type="text"
            value={values.imageUrl}
            onChange={changeHandler}
            placeholder="Upload a photo..."
            name="imageUrl"
          />
        </Form.Group>

        <Button className="btn submit" type="submit">
          Create Product
        </Button>
      </Container>
    </Form>
</section>
    );
};

export default CreateProduct
