import { createSlice } from '@reduxjs/toolkit';
import { Product } from './cartSlice';

const initialState = {
	currentUser: null,
	isFetching: false,
	error: false,
	wishlist: [] as Product[],
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginStart: state => {
			state.isFetching = true;
		},
		loginSuccess: (state, { payload }) => {
			state.isFetching = false;
			state.currentUser = payload;
			state.error = false;
		},
		loginFailure: state => {
			state.isFetching = false;
			state.error = true;
		},
		userLogout: state => {
			state.currentUser = null;
		},
		addToWishlist: (state, { payload }) => {
			const product = state.wishlist.find(({ _id }) => _id === payload._id);
			!product
				? state.wishlist.push(payload)
				: (state = state.wishlist.map((product: Product) => product));
		},
		removeFromWishlist: (state, { payload }) => {
			const index = state.wishlist.findIndex(({ _id }) => _id === payload._id);
			state.wishlist.splice(index, 1);
		},
	},
});

export const {
	loginStart,
	loginSuccess,
	loginFailure,
	userLogout,
	addToWishlist,
	removeFromWishlist,
} = userSlice.actions;
export default userSlice.reducer;
