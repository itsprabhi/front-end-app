import { SET_USERS, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_USER, SET_AUTHENTICATED, SET_UNAUTHENTICATED, LOADING_USER } from '../type';
import { CardActions } from '@material-ui/core';

const initialState = {
    authenticated: false,
    loading: false,
    credentials: {},
    likes:[],
    notification:[]
}

export default function(state = initialState, action){
    switch(action.type){
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true
            };
        case SET_UNAUTHENTICATED:
            return initialState;
        case SET_USER:
            return{
                authenticated: true,
                loading:false,
                ...action.payload
            };
        case LOADING_USER:
            return{
                ...state,
                loading:true
            }
        default:
            return state;
    }
}