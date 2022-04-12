import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { purgeStoredState } from 'redux-persist';
import { persistor } from './store';

export interface Product {
	categories: string[];
	createdAt: string;
	desc: string;
	img: string;
	inStock: boolean;
	price: number;
	title: string;
	updatedAt: string;
	_id: string;
	quantity: number | undefined;
}

const initialState = {
	products: [] as Product[],
	quantity: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct: (state, { payload }) => {
			const product = state.products.find(({ _id }) => _id === payload._id);
			if (!product) {
				state.quantity += 1;
				state.products.push(payload);
			} else {
				state = state.products.map((product: Product) =>
					product._id === payload._id
						? {
								...product,
								quantity: (product.quantity += payload.quantity),
						  }
						: product
				);
			}
		},
		removeProduct: (state, { payload }) => {
			const index = state.products.findIndex(({ _id }) => _id === payload._id);
			state.quantity -= 1;
			state.products.splice(index, 1);
		},
		incQuantity: (state, { payload }) => {
			const product = state.products.find(({ _id }) => _id === payload._id);
			product.quantity += 1;
		},
		decQuantity: (state, { payload }) => {
			const product = state.products.find(({ _id }) => _id === payload._id);
			const index = state.products.findIndex(({ _id }) => _id === payload._id);
			product.quantity > 1
				? product.quantity--
				: state.products.splice(index, 1);
		},
		clearCart: state => state = initialState,
	},
});

export const {
	addProduct,
	removeProduct,
	incQuantity,
	decQuantity,
	clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
