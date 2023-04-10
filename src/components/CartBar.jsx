import React, { useEffect } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { cartSliceThunk, cheeckoutCartThunk } from '../store/slices/cart.slice';

const CartBar = ({show, handleClose}) => {
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(cartSliceThunk())
    },[])
    const cartSide = useSelector(state => state.cart)
    return (
        <div>
            <h1> Hello wd </h1>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {cartSide.map(cart => (
                        <div> {cart?.product?.title} </div>
                    ))}
                    <Button  onClick={() => dispatch(cheeckoutCartThunk())} > Cheeckout </Button>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default CartBar;