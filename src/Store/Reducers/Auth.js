import * as ActionTypes from '../Actions/ActionTypes';

const initialState = {
    isAdmin : false,
    auth : false,
    loading : true,
    error : null,
    isOTP : false
}


const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ActionTypes.AUTH_START  :
            return{
                ...state,
                loading : true
            }
        case ActionTypes.AUTH_SUCCESS  :
            return{
                ...state,
                loading : false,
                auth : true,
                error : null,
                isAdmin : action.isAdmin
            }
        case ActionTypes.AUTH_FAIL  :
            return{
                ...state,
                loading : false,
                auth : false,
                error : action.error,
                isAdmin : action.isAdmin
            }
        case ActionTypes.AUTH_LOGOUT  :
                return { 
                    ...state,
                    loading : false,
                    auth : false,
                    error : null,
                    isAdmin : false
                }
        case ActionTypes.AUTH_OTP_ENABLED : 
                return {
                    ...state,
                    isOTP : true
                }
        case ActionTypes.AUTH_OTP_SUCCESS :
            return {
                ...state,
                loading : false,
                auth : true,
                error : null,
                isAdmin : action.isAdmin,
                isOTP : false
            }
        case ActionTypes.AUTH_OTP_FAIL :
            return {
                ...state,
                loading : false,
                auth : false,
                error : null,
                isAdmin : false,
                isOTP : false
            }
        default :
            return state
    }
}

export default reducer;