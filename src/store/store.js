import { configureStore } from '@reduxjs/toolkit'

import productReducer from '../lib/productSlice'

export default configureStore({
  reducer: {
    product: productReducer,
  },
})
