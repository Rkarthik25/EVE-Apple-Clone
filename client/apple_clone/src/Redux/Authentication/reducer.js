import * as Types from "./actionType";

const initialState = {
    isAuth: false,
    token: "",
    userid: "",
    user: [],
    isLoading: false,
    isError: false
}

export const reducer = (state= initialState, action) => {
 
    const {type, payload} = action

switch(type){
    case Types.LOGIN_REQUEST: 
    return {
       ...state, 
       isLoading: true,
       isError: false,
    }
    case Types.LOGIN_SUCCESS: 
    return {
       ...state, 
       isAuth: true,
       isLoading: false,
       token: payload,
       isError: false,
    }
    case Types.LOGIN_FAILURE: 
    return {
       ...state, 
       isLoading: true,
       isError: true,
    }
    case Types.SIGNUP_REQUEST: 
    return {
       ...state, 
       isLoading: true,
       isError: false,
    }
    case Types.SIGNUP_SUCCESS: 
    return {
       ...state, 
       isLoading: false,
       user: payload,
       isError: false,
    }
    case Types.SIGNUP_FAILURE: 
    return {
       ...state, 
       isLoading: true,
       isError: true,
    }
    default: return state;
}


}
