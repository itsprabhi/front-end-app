import { SET_USERS,SET_UNAUTHENTICATED, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_USER, LOADING_USER } from '../type'
import axios from 'axios';

export const loginUser = (userData,history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios
    .post('/login',userData)
    .then(res => {
        console.log(res.data);
        setAuthorizationHeader(res.data.token)
        dispatch(getUserData());
        dispatch({ type: CLEAR_ERRORS});
        history.push('/')
    })
    .catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    })
}

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('FBIdToken');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type:SET_UNAUTHENTICATED })
}

export const signupUser = (newUserData,history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios
    .post('/login',newUserData)
    .then(res => {
        console.log(res.data);
        setAuthorizationHeader(res.data.token)
        dispatch(getUserData());
        dispatch({ type: CLEAR_ERRORS});
        history.push('/')
    })
    .catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    })
}

export const getUserData = () => (dispatch) => {
    dispatch({ type: LOADING_USER });
    axios.get('/user')
    .then(res => {
        dispatch({
            type: SET_USER,
            payload: res.data
        })
    })
    .catch(err => console.log(err));
}

const setAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`;
    localStorage.setItem('FBIdToken', FBIdToken);
    axios.defaults.headers.common['Authorization'] = FBIdToken;
}