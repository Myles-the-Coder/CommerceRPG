import { publicRequest } from '../requestMethods';
import {loginStart, loginSuccess, loginFailure} from '../redux/userSlice'

export const login = async (dispatch, user) => {
  dispatch(loginStart())
  try {
    const {data} = await publicRequest.post('/login', user);
    dispatch(loginSuccess(data))
  } catch (error) {
    dispatch(loginFailure())
  }
}