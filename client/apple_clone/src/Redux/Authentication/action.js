import * as Types from "./actionType";

export const loginRequest = ()=>{
    return {
        type: Types.LOGIN_REQUEST
    }
}
export const loginSuccess = (payload)=>{
    return {
        type: Types.LOGIN_SUCCESS,
        payload: payload
    }
}
export const loginFaulure = ()=>{
    return {
        type: Types.LOGIN_FAILURE
    }
}


