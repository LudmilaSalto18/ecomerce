import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './isLoading';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
export const favoritesPurchaseSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        setFavorites: (state,action) => {
            return action.payload;
        }
    }
})

export const favoriteThunk = () => (dispacth) => {
    dispacth(setIsLoading(true))
        axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/purchases', getConfig( ))
            .then((res) => dispacth(setFavorites(res.data)))
            .finally( () => dispacth(setIsLoading(false)))
    }
export const { setFavorites } = favoritesPurchaseSlice.actions;

export default favoritesPurchaseSlice.reducer;
