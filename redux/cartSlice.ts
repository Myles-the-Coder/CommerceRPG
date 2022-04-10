import { createSlice } from '@reduxjs/toolkit';

interface CartState {
	products: [];
	quantity: number;
}

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

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		products: [] as Product[],
		quantity: 0,
	},
	reducers: {
		addProduct: (state, { payload }) => {
			const product = state.products.find(
				(product: Product) => product._id === payload._id
			);
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
			const index = state.products.findIndex(
				(product: { _id: any }) => product._id === payload._id
			);
			state.quantity -= 1;
			state.products.splice(index, 1);
		},
		incQuantity: (state, { payload }) => {
			const product = state.products.find(
				product => product._id === payload._id
			);
			product.quantity += 1;
		},
		decQuantity: (state, { payload }) => {
			const product = state.products.find(
				product => product._id === payload._id
			);
			const index = state.products.findIndex(
				product => product._id === payload._id
			);
			product.quantity > 1
				? product.quantity--
				: state.products.splice(index, 1);
		},
	},
});

export const { addProduct, removeProduct, incQuantity, decQuantity } =
	cartSlice.actions;
export default cartSlice.reducer;
