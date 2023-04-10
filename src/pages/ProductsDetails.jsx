import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getNewProductsThunk } from '../store/slices/products.slice';
import { Button, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useState } from 'react';
import { createCartThunk } from '../store/slices/cart.slice';

const ProductsDetails = () => {
    const { id } = useParams()
    const productsList = useSelector(state => state.products)
    const dispacth = useDispatch()
    useEffect(() => {
        dispacth(getNewProductsThunk())
    }, [])
    const product = productsList.find(newProduct => newProduct.id === Number(id))
    const releteProduct = productsList.filter(productItem =>
        productItem?.category.id == product.id
    )
    const [quantity, setQuantity] = useState('')
    const addProduct = () => {
        const productToCar = {
            productId: product.id,
            quantity: quantity
        }
        dispacth(createCartThunk(productToCar))
    }
    return (
        <div>
            <h1> {product?.title}  </h1>
            <input type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            />
            <button onClick={() => addProduct()}> add Product </button>
        <Row>
                <Col lg={9}>
                <img src={product?.images[1].url} className='img-fluid' />
                <p> {product?.description} </p>
                <p> Price: $<b> {product?.price} </b> </p>
                </Col>
                <Col xs={3} md={3} lg={3} className='g-4' >
                    <ListGroup variant='flush'>
                    {
                releteProduct.map(productItem => (
                    <ListGroupItem style={{background: 'white'}}> 
                    <Link key={productItem.id} to={`/products/${productItem.id}` } style={{background: 'white', color:'black'}}> 
                    {productItem.title} 
                        <img src={productItem.images[0].url} className='img-fluid' />
                    </Link> 
                    
                     </ListGroupItem>
                ))
            }
                    </ListGroup>
                </Col>
        </Row>
           
        </div>
    );
};

export default ProductsDetails;