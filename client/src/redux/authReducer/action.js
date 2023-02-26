import * as Types from "./actionTypes";
import axios from "axios";
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
export const loginFailure = ()=>{
    return {
        type: Types.LOGIN_FAILURE
    }
}

export const signupRequest = () => {
    return {
      type: Types.SIGNUP_REQUEST,
    };
  };
  
export  const signupSuccess = (payload) => {
    return {
      type: Types.SIGNUP_SUCCESS,
      payload: payload,
    };
  };
 
 export const signupFailure = (payload) => {
    return {
      type: Types.SIGNUP_FAILURE,
      payload: payload,
    };
  };


export const Signup = ({Fname,
    phone,
    email,
    password,
    Lname,
    Dob,
    country}) => async (dispatch) => {
   
        const data = {
            Fname: Fname,
            phone: phone,
            email: email,
            password:password,
            Lname: Lname,
            Dob: Dob,
            country: country
          };
          console.log(data)
    try {
      dispatch(signupRequest());
   return   await axios
        .post(`http://localhost:4500/users/register`, data)
        .then((res) => 
        
        dispatch(signupSuccess(res.data)

        ));
    } catch (e) {
      dispatch(signupFailure(e.message));
    }
  };
  

  export const login = (data) => async (dispatch) => {
    console.log(data);
    try {
      dispatch(loginRequest());
  return    await axios
        .post("http://localhost:4500/users/login", data)
        .then((res) => {
            console.log(res); 
            localStorage.setItem("userID", res.data.data.id)
          return  dispatch(loginSuccess(res.data))
        });
    } catch (e) {
      dispatch(loginFailure(e.message));
    }
  };