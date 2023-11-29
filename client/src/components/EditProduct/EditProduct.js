/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect,useContext } from "react";
import { useParams } from "react-router-dom";
import { Form, Button, Container } from 'react-bootstrap';


import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { productServiceFactory } from "../../services/productService";
import {ProductContext} from '../../contexts/ProductContext'

 const EditProduct = () => {
    
    const { productId } = useParams();
    const productService = useService(productServiceFactory);

    const {onProductEditSubmit} = useContext(ProductContext)
    

    const { values, errors , changeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        title: '',
        brand: '',
        category: '',
        weigth: '',
        price:'',
        imageUrl: '',
        description:'',
    }, {}, onProductEditSubmit);

    useEffect(() => {
        productService.getOne(productId)
            .then(result => {
                changeValues(result);
            });
                },[productId]);

    return (
        <section id="create-page" className="auth">
              <Form id="edit" method="post" onSubmit={onSubmit}>
      <Container>
        <h1>Edit Product</h1>

        <Form.Group controlId="title">
          <Form.Label>Product title:</Form.Label>
          <Form.Control
            type="text"
            value={values.title}
            onChange={changeHandler}
            placeholder="Enter product title..."
            name="title"
          />
          {errors.title && <Form.Text className="text-danger">{errors.title}</Form.Text>}
        </Form.Group>

        <Form.Group controlId="brand">
          <Form.Label>Brand:</Form.Label>
          <Form.Control
            type="text"
            value={values.brand}
            onChange={changeHandler}
            placeholder="Enter product brand..."
            name="brand"
          />
          {errors.brand && <Form.Text className="text-danger">{errors.brand}</Form.Text>}
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
          {errors.category && <Form.Text className="text-danger">{errors.category}</Form.Text>}
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
          {errors.weigth && <Form.Text className="text-danger">{errors.weigth}</Form.Text>}
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>Price:</Form.Label>
          <Form.Control
            type="text"
            value={values.price}
            onChange={changeHandler}
            placeholder="0-1000 EUR."
            name="price"
          />
          {errors.price && <Form.Text className="text-danger">{errors.price}</Form.Text>}
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Image:</Form.Label>
          <Form.Control
            as="textarea"
            value={values.description}
            onChange={changeHandler}
            placeholder="Short summary..."
            rows={4}
            cols={50}
            name="description"
          />
          {errors.description && <Form.Text className="text-danger">{errors.description}</Form.Text>}
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
          {errors.imageUrl && <Form.Text className="text-danger">{errors.imageUrl}</Form.Text>}
        </Form.Group>

        <Button className="btn submit" type="submit">
          Edit Product
        </Button>
      </Container>
    </Form>
        </section>
    );
};

export default  EditProduct