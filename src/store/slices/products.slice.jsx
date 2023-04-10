import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './isLoading';
import axios from 'axios';

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setNewProducts: (state, action) => {
            return action.payload;
        }
    }
})

export const getNewProductsThunk = () => dispacth  => {
    dispacth(setIsLoading(true))
        axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/products')
        .then(res => dispacth(setNewProducts(res.data)))
        .finally(() => dispacth(setIsLoading(false)) )
}

export const FilterCategoriesThunk = (id) => dispacth => {
    dispacth(setIsLoading(true))
        axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`)
            .then(res => dispacth(setNewProducts(res.data)))
            .finally(() => dispacth(setIsLoading(false)) )
    }         
export const FilterInputThunk = (inputSearch) => (dispatch) => {
    dispatch(setIsLoading(true));
     axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?title=${inputSearch}`)
        .then((res) => dispatch(setNewProducts(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}    
export const { setNewProducts } = productsSlice.actions;
 
export default productsSlice.reducer;
