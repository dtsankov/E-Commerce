import { useEffect, useReducer } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { productServiceFactory } from '../../services/productService';
import * as commentService from '../../services/commentService';
import { useService } from '../../hooks/useService';
import { useAuthContext } from '../../contexts/AuthContext';

import { AddComment } from './components/AddComment';
import { productReducer } from '../../reducers/productReducer';

export const ProductDetails = () => {
    const { productId } = useParams();
    const { userId, isAuthenticated, userEmail } = useAuthContext();
    const [product, dispatch] = useReducer(productReducer, {});
    const productService = useService(productServiceFactory)
    const navigate = useNavigate();

    useEffect(() => {
        Promise.all([
            productService.getOne(productId),
            commentService.getAll(productId),
        ]).then(([productData, comments]) => {
            const productState = {
                ...productData,
                comments,
            };
            
            dispatch({type: 'PRODUCT_FETCH', payload: productState})
        });
    }, [productId]);

    const onCommentSubmit = async (values) => {
        const response = await commentService.create(productId, values.comment);

        dispatch({
            type: 'COMMENT_ADD',
            payload: response,
            userEmail,
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
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={product.imageUrl} alt='' />
                    <h1>{product.title}</h1>
                    <span className="levels">MaxLevel: {product.maxLevel}</span>
                    <p className="type">{product.category}</p>
                </div>

                <p className="text">{product.summary}</p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {product.comments && product.comments.map(x => (
                            <li key={x._id} className="comment">
                                <p>{x.author.email}: {x.comment}</p>
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