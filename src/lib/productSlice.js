import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    {
      id: '1',
      name: 'Blue  Denim shirt',
      img:
        'http://zalora-media-live-id.s3.amazonaws.com/product/39/45312/3.jpg',
      color: 'Blue',
      size: 'M',
      price: 17.99,
      quantity: 2,
    },
    {
      id: '2',
      name: 'Red  Denim shirt',
      img:
        'http://zalora-media-live-id.s3.amazonaws.com/product/56/29342/3.jpg',
      color: 'Red',
      size: 'L',
      price: 27.99,
      quantity: 1,
    },
  ],
  total: 63.97,
}

const countTotal = (items) =>
  items.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addQuantity(state, action) {
      const { id } = action.payload

      const existingProduct = state.items.find((product) => product.id === id)

      if (existingProduct) {
        existingProduct.quantity++

        state.total = countTotal(state.items)
      }
    },
    decreaseQuantity(state, action) {
      const { id } = action.payload

      const existingProduct = state.items.find((product) => product.id === id)

      if (existingProduct) {
        if (existingProduct.quantity === 0) {
          return
        }
        existingProduct.quantity--
        state.total = countTotal(state.items)
      }
    },
    removeItem(state, action) {
      const { id } = action.payload

      const item = state.items.find((item) => item.id === id)

      if (item) {
        state.items = state.items.filter((item) => id !== item.id)
        state.total = countTotal(state.items)
      }
    },
  },
})

export const {
  addQuantity,
  decreaseQuantity,
  removeItem,
} = productSlice.actions

export default productSlice.reducer
