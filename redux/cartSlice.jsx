import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		products: [],
		quantity: 0,
		total: 0,
	},
	reducers: {
		addProduct: (state, {payload}) => {
      const product = state.products.find(({_id}) => _id === payload._id)
      if (!product) {
        state.quantity += 1;
        state.products.push(payload)
        state.total += payload.price * payload.quantity
      } else {
          state = state.products.map((product) =>
            product._id === payload._id
              ? {
                  ...product,
                  quantity: (product.quantity += payload.quantity),
                  total: state.total += payload.price * payload.quantity
                }
              : product
          );
      }
		},
		removeProduct: (state, {payload}) => {
      const index = state.products.findIndex(product => product._id === payload._id)
      state.quantity -= 1;
      state.products.splice(index, 1)
			state.total = payload.price * payload.quantity;
		},
    incQuantity: (state, {payload}) => {
      const product = state.products.find((product) => product._id === payload._id);
      product.quantity += 1;
      state.total = payload.price * payload.quantity
    },
    decQuantity: (state, {payload}) => {
      const product = state.products.find((product) => product._id === payload._id);
      const index = state.products.findIndex(product => product._id === payload._id)
      if (product.quantity > 1) {
        product.quantity--
        state.total = payload.price * payload.quantity
      } else {
        state.products.splice(index, 1)
      }
    },
    clearCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    }
	},
});

export const { addProduct, removeProduct, clearCart, incQuantity, decQuantity } = cartSlice.actions;
export default cartSlice.reducer;
