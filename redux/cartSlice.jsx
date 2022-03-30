import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		products: [],
		quantity: 0,
		total: 0,
	},
	reducers: {
		addProduct: (state, action) => {
			state.quantity += 1;
			state.products.push(action.payload);
			state.total += action.payload.price * action.payload.quantity;
		},
		removeProduct: (state, action) => {
			state.quantity -= 1;
			state.products.pop(action.payload.product);
			state.total -= action.payload.price;
		},
		addToQuantity: (state, action) => {
			state.quantity += 1;
			state.total = action.payload.total;
		},
	},
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;