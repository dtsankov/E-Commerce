import { React, useContext} from "react";
import { Form, Button, Container } from "react-bootstrap";

import { useForm } from "../../hooks/useForm";

import { AuthContext } from "../../contexts/AuthContext";
import { ProductContext } from "../../contexts/ProductContext";

const CreateProduct = () => {
    const { userId } = useContext(AuthContext);
    const { onCreateProductSubmit } = useContext(ProductContext);

   

    const CreateFormKeys = {
        Title: "title",
        Brand: "brand",
        Category: "category",
        Weigth: "weigth",
        Price: "price",
        ImageUrl: "imageUrl",
        Description: "description",
    };

    const CreateFormErrors = {
        TitleError: "title",
        BrandError: "brand",
        CategoryError: "category",
        WeigthError: "weigth",
        PriceError: "price",
        ImageUrlError: "imageUrl",
        DescriptionError: "description",
    };

    const {
        values,
        errors,
        changeHandler,
        validateTitleHandler,
        validateBrandHandler,
        validateCategoryHandler,
        validateWeightHandler,
        validatePriceHandler,
        validateDescriptionHandler,
        validateImageUrlHandler,
        onSubmit,
    } = useForm(
        {
            userId: userId,
            [CreateFormKeys.Title]: "",
            [CreateFormKeys.Brand]: "",
            [CreateFormKeys.Category]: "",
            [CreateFormKeys.Weigth]: "",
            [CreateFormKeys.Price]: "",
            [CreateFormKeys.ImageUrl]: "",
            [CreateFormKeys.Description]: "",
        },
        {
            [CreateFormErrors.Title]: "",
            [CreateFormErrors.Brand]: "",
            [CreateFormErrors.Category]: "",
            [CreateFormErrors.Weigth]: "",
            [CreateFormErrors.Price]: "",
            [CreateFormErrors.ImageUrl]: "",
            [CreateFormErrors.Description]: "",
        },
        onCreateProductSubmit
    );

    return (
        <section className="create-page">
            <Form className="create" method="post" onSubmit={onSubmit}>
                <Container>
                    <h1>Create Product</h1>

                    <Form.Group
                        className={`mb-3 ${
                            errors[CreateFormErrors.TitleError]
                                ? "has-error"
                                : ""
                        }`}
                        controlId="title"
                    >
                        <Form.Label>Product title:</Form.Label>
                        <Form.Control
                            type="text"
                            name={CreateFormKeys.Title}
                            value={values[CreateFormKeys.Title]}
                            onChange={changeHandler}
                            onBlur={validateTitleHandler}
                            placeholder="Enter game title..."
                            className={
                                errors[CreateFormErrors.TitleError]
                                    ? "is-invalid"
                                    : ""
                            }
                        />
                       <Form.Control.Feedback type="invalid">
                            {errors[CreateFormErrors.TitleError]}
                        </Form.Control.Feedback>
                    </Form.Group>
                    

                    <Form.Group
                        className={`mb-3 ${
                            errors[CreateFormErrors.BrandError]
                                ? "has-error"
                                : ""
                        }`}
                        controlId="brand"
                    >
                        <Form.Label>Brand:</Form.Label>
                        <Form.Control
                            type="text"
                            name={CreateFormKeys.Brand}
                            value={values[CreateFormKeys.Brand]}
                            onChange={changeHandler}
                            onBlur={validateBrandHandler}
                            placeholder="Enter game category..."
                            className={
                                errors[CreateFormErrors.BrandError]
                                    ? "is-invalid"
                                    : ""
                            }
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors[CreateFormErrors.BrandError]}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                        className={`mb-3 ${
                            errors[CreateFormErrors.CategoryError]
                                ? "has-error"
                                : ""
                        }`}
                        controlId="category"
                    >
                        <Form.Label>Category:</Form.Label>
                        <Form.Control
                            as="select"
                            name={CreateFormKeys.Category}
                            value={values[CreateFormKeys.Category]}
                            onChange={changeHandler}
                            onBlur={validateCategoryHandler}
                            className={
                                errors[CreateFormErrors.CategoryError]
                                    ? "is-invalid"
                                    : ""
                            }
                        >
                            <option value="">Select...</option>
                            <option value="Drill machines">
                                Drill machines
                            </option>
                            <option value="Electrical screwdrivers">
                                Electrical screwdrivers
                            </option>
                            <option value="Rechargable kits">
                                Rechargable kits
                            </option>
                            <option value="Jig saws">Jig saws</option>
                            <option value="Grinders">Grinders</option>
                            <option value="Hand tools">Hand tools</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {errors[CreateFormErrors.CategoryError]}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                        className={`mb-3 ${
                            errors[CreateFormErrors.WeigthError]
                                ? "has-error"
                                : ""
                        }`}
                        controlId="weight"
                    >
                        <Form.Label>Weigth:</Form.Label>
                        <Form.Control
                            type="text"
                            name={CreateFormKeys.Weigth}
                            value={values[CreateFormKeys.Weigth]}
                            onChange={changeHandler}
                            onBlur={validateWeightHandler}
                            placeholder="1-100kg"
                            className={
                                errors[CreateFormErrors.WeigthError]
                                    ? "is-invalid"
                                    : ""
                            }
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors[CreateFormErrors.WeigthError]}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                        className={`mb-3 ${
                            errors[CreateFormErrors.PriceError]
                                ? "has-error"
                                : ""
                        }`}
                        controlId="price"
                    >
                        <Form.Label>Price:</Form.Label>
                        <Form.Control
                            type="text"
                            name={CreateFormKeys.Price}
                            value={values[CreateFormKeys.Price]}
                            onChange={changeHandler}
                            onBlur={validatePriceHandler}
                            placeholder="0-2000 EUR"
                            className={
                                errors[CreateFormErrors.PriceError]
                                    ? "is-invalid"
                                    : ""
                            }
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors[CreateFormErrors.PriceError]}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                        className={`mb-3 ${
                            errors[CreateFormErrors.DescriptionError]
                                ? "has-error"
                                : ""
                        }`}
                        controlId="description"
                    >
                        <Form.Label>Description:</Form.Label>
                        <Form.Control
                            as="textarea"
                            name={CreateFormKeys.Description}
                            value={values[CreateFormKeys.Description]}
                            onChange={changeHandler}
                            onBlur={validateDescriptionHandler}
                            placeholder="Short summary..."
                            rows="4"
                            cols="50"
                            className={
                                errors[CreateFormErrors.DescriptionError]
                                    ? "is-invalid"
                                    : ""
                            }
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors[CreateFormErrors.DescriptionError]}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                        className={`mb-3 ${
                            errors[CreateFormErrors.ImageUrlError]
                                ? "has-error"
                                : ""
                        }`}
                        controlId="imageUrl"
                    >
                        <Form.Label>Image:</Form.Label>
                        <Form.Control
                            type="text"
                            name={CreateFormKeys.ImageUrl}
                            value={values[CreateFormKeys.ImageUrl]}
                            onChange={changeHandler}
                            onBlur={validateImageUrlHandler}
                            placeholder="Upload a photo..."
                            className={
                                errors[CreateFormErrors.ImageUrlError]
                                    ? "is-invalid"
                                    : ""
                            }
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors[CreateFormErrors.ImageUrlError]}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button className="btn submit" type="submit">
                        Create Product
                    </Button>
                </Container>
            </Form>
        </section>
    );
};

export default CreateProduct;
