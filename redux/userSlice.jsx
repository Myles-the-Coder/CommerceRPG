import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		currentUser: null,
		isFetching: false,
		error: false,
		wishlist: [],
	},
	reducers: {
		loginStart: state => {
			state.isFetching = true;
		},
		loginSuccess: (state, action) => {
			state.isFetching = false;
			state.currentUser = action.payload;
			state.error = false;
		},
		loginFailure: state => {
			state.isFetching = false;
			state.error = true;
		},
		userLogout: state => {
			state.currentUser = null;
		},
		addToWishlist: (state, action) => {
      state.wishlist.push(action.payload);
		},
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(({_id}) => _id !== action.payload._id);
    }
	},
});

export const {
	loginStart,
	loginSuccess,
	loginFailure,
	userLogout,
	addToWishlist,
  removeFromWishlist
} = userSlice.actions;
export default userSlice.reducer;
