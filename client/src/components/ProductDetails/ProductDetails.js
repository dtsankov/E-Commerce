import { useEffect, useReducer } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { toast } from "react-toastify";


import { productServiceFactory } from '../../services/productService';
import * as commentService from '../../services/commentService';
import { useService } from '../../hooks/useService';
import { useAuthContext } from '../../contexts/AuthContext';

import { AddComment } from './components/AddComment';
import { productReducer } from '../../reducers/productReducer';

 const ProductDetails = () => {
    const { productId } = useParams();

    const { userId, isAuthenticated, userEmail } = useAuthContext();
    const [product, dispatch] = useReducer(productReducer, {});
    const productService = useService(productServiceFactory)
    const navigate = useNavigate();

    
   useEffect(() => {
        productService.getOne(productId)
        .then((productData) => {
            const productState = {
                ...productData,
            };
            dispatch({type: 'PRODUCT_FETCH', payload: productData })// tova da e productData})
        })
    }, [productId]);

    const onCommentSubmit = async (values) => {

        const comment = {
            userId: userId,
            author: userEmail,
            text: values.comment,
        }
        const newComment = await commentService.update(comment,productId);
        toast.success('Comment successfully added')

        dispatch({
            type: 'PRODUCT_FETCH',
            payload: newComment,
        });
    };

    const isOwner = product._ownerId === userId;

    const onDeleteClick = async () => {
        await productService.delete(product._id);

        // TODO: delete from state

        navigate('/catalog');
    };

    return (
        <section id="game-details">
            <h1>Product Details</h1>
            <div className="info-section">

                <div className="product-header">
                    <img className="game-img" src={product.imageUrl} alt='' />
                    <h1>{product.title}</h1>
                    <span className="brand">Brand: {product.brand}</span>
                    <p className="type">Category: {product.category}</p>
                </div>

                <p className="weigth">Weigth: {product.weigth}</p>

                <p className="price">Price: {product.price} EUR</p>

                <p className="description">Description: {product.description}</p>



                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {product.comments && product.comments.map(x => (
                            
                            <li key={x._id}  className="comment">
                                
                                <p>{x.author}: {x.text}</p>
                            </li>
                        ))}
                    </ul>

                    {!product.comments?.length && (
                        <p className="no-comment">No comments.</p>
                    )}
                </div>

                {isOwner && (
                    <div className="buttons">
                        <Link to={`/catalog/${product._id}/edit`} className="button">Edit</Link>
                        <button className="button" onClick={onDeleteClick}>Delete</button>
                    </div>
                )}
            </div>

            {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
        </section>
    );
};

export default ProductDetails;


