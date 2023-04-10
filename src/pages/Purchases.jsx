import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { favoriteThunk } from '../store/slices/favoritesPurchase';
import { Link } from 'react-router-dom';

const Purchases = () => {
    const dispacth = useDispatch()
    const favorites = useSelector(state => state.favorites)
    useEffect(() => {
        dispacth(favoriteThunk())
    }, [])
    return (
        <div>
            <h1> Purchases </h1>
            <ul>
                {
                    favorites.map(favorite => (
                        <ul>
                            {favorite.cart.products.map(product => (
                                <li key={product.id}>
                                    <Link to={`/products/${product.id}`}>
                                        <h5><b>Purchase Date: </b >{product.createdAt}</h5>
                                        <h5><b>Product: </b>{product.title}</h5>
                                        <h5><b>Price: </b>${product.price}</h5>
                                    </Link>


                                </li>

                            ))}
                        </ul>
                    ))
                }
            </ul>
        </div>
    );
};

export default Purchases;