import decode from 'jwt-decode';
import { signIn } from '../../api/meetup';

export const authStart = () => ({
  type: actionType.AUTH_START,
});

export const authFail = () => ({

});

export const authSuccess = () => ({

});

export const auth = (email, password, isSignup) => async (dispatch) => {
  dispatch(authStart());

  const authData = {
    email,
    password,
    returnSecureToken: true,
  };
  try {
    const res = await signIn(authData);
    const { exp } = decode(res.data.access_token);
    const expDate = new Date();
    const tS = new Date().getTime();
    expDate.setTime(tS + exp / 10);
    localStorage.setItem('token', res.data.access_token);
    localStorage.setItem('expirationDate', expDate);
    localStorage.setItem('userId', res.data.user.id);
    dispatch(authSuccess(res.data));
  } catch (err) {
    dispatch(authFail(err));
  }
};
