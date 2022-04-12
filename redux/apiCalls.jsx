import { publicRequest } from '../requestMethods';
import {loginStart, loginSuccess, loginFailure} from '../redux/userSlice'
import {registerStart, registerSuccess, registerFailure} from '../redux/userSlice'

export const formSubmit = async (dispatch, user, route) => {
  dispatch(loginStart())
  try {
    const {data} = await publicRequest.post(`/${route}`, user);
    dispatch(loginSuccess(data))
  } catch (error) {
    dispatch(loginFailure())
  }
}
