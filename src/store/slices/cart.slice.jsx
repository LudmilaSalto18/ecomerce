import { createSlice } from '@reduxjs/toolkit';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isLoading';
import axios from 'axios';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCart: (state, action) => {
            return action.payload
        }
    }
})
export const cartSliceThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/cart', getConfig())
        .then((res) => dispatch(setCart(res.data.cart.products)))
        .catch(error => console.log(error.response.data))
        .finally(() => dispatch(setIsLoading(false)));
        
}
export const createCartThunk= (productToCar) => (dispatch) => {
    dispatch(setIsLoading(true))
    return axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/cart',productToCar, getConfig())
                .then(res => dispatch(cartSliceThunk()))
                .catch(error => console.log(error.response.data))
                .finally(() => dispatch(setIsLoading(false)))
}

export const cheeckoutCartThunk = () => (dispatch) => {
    dispatch(setIsLoading(true))
    return axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/purchases', {} , getConfig())
                .then(res => dispatch(setCart([])))
                .finally(() => dispatch(setIsLoading(false)))
}
export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
