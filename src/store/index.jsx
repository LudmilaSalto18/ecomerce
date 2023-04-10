import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/products.slice'
import isLoading from './slices/isLoading'
import favoritesPurchase from './slices/favoritesPurchase'
import cartSlice from './slices/cart.slice'


export default configureStore({
    reducer: {
        products : productsSlice,
        isLoading: isLoading,
        favorites: favoritesPurchase,
        cart : cartSlice
    }
})
