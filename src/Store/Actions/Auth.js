import axios from '../Interceptor';
import * as actionTypes from './ActionTypes';

const AuthStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

const AuthSuccess = (isAdmin) => {
    return {
        type:actionTypes.AUTH_SUCCESS,
        isAdmin : isAdmin
    }
}

const AuthFail = (err) => {
    return {
        type:actionTypes.AUTH_FAIL,
        error : err.error
    }
}

const OTPStart = (err) => {
    return {
        type:actionTypes.AUTH_OTP_ENABLED,
    }
}

export const OTPSuccess = (isAdmin) => {
    return {
        type:actionTypes.AUTH_OTP_SUCCESS,
        isAdmin : isAdmin
    }
}

export const OTPFail = () => {
    return {
        type:actionTypes.AUTH_OTP_FAIL,
    }
}

export const AuthStartAsync = (isSignup,authDetails,successFunc) => dispatch => {
    console.log(authDetails)
    let url =  `/auth/${authDetails.isAdmin ? 'admin' : 'user'}/${isSignup ? 'signup' : 'signin'}`; 
    //let url = `/auth/${isSignup ? 'signup' : 'signin'}`;
    dispatch(AuthStart())
    axios.post(url,{
        credientials: {
            ...authDetails
        }
    }).then(({data}) => {
            console.log(data);
            if(!data.isOTP){
                setLocalStorage(data);
                successFunc()
                dispatch(AuthSuccess(authDetails.isAdmin))
            }else{
                dispatch(OTPStart())
            }
        })
        .catch(err => {
            console.log(err);
            if(err.response && err.response.data){
                dispatch(AuthFail(err.response.data))    
            }else{
                dispatch(AuthFail(err.message))    
            }
        })
}

export const AuthCheckAsync = () => dispatch => {
    if(localStorage.getItem('token') && localStorage.getItem('name')){
        dispatch(AuthSuccess((localStorage.getItem('isAdmin') === 'true')))
    }
}



export const AuthLogout = () => {
    localStorage.clear()
    return {
        type : actionTypes.AUTH_LOGOUT
    }
}

const setLocalStorage = (data) => {
    localStorage.setItem('token',data.Token);
    localStorage.setItem('name',data.user.name);
    localStorage.setItem('email',data.user.email);
    localStorage.setItem('isAdmin',data.isAdmin);
    localStorage.setItem('authType',data.authType);
}