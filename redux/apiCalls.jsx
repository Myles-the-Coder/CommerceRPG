import { publicRequest } from '../requestMethods';
import {loginStart, loginFailure, loginSuccess} from './userSlice/loginStart';

export const login = async (dispatch, user) => {
  dispatch(loginStart())
  try {
    const {data} = await publicRequest.post('/login', user);
    dispatch(loginSuccess(data))
  } catch (error) {
    dispatch(loginFailure())
  }
}