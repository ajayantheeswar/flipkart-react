import React, { PureComponent } from 'react'
import classes from './OTPAuthentication.module.css';
import { useState } from 'react';
import axios from '../../Store/Interceptor';
import { connect } from 'react-redux';

import * as action from '../../Store/Actions/Auth';

const verifyOTP = (email,OTP,isAdmin,successFunc,failFunc) => {
    axios.post('/auth/verify-otp',{
        email : email,
        OTP : OTP,
        isAdmin : isAdmin
    }).then(successFunc).catch(failFunc);
}


const OTPAuthentication = props => {
    const [OTP,setOTP] = useState('');
    const [error,serError] = useState ('');

    return (
        <div className={classes['otp-container']}>
            <div className={classes['otp-info']}>
                <p>{`The One-Time Password Has Been Sent to Your Registered Email ${props.email}`}</p>
            </div>
            <div className={classes['otp-action']}>
                <input value={OTP} 
                        placeholder='OTP'
                       onChange={(event) => {
                           setOTP(event.target.value);
                       }} />
                <button 
                    onClick={() => verifyOTP(props.email,OTP,props.isAdmin,
                        ({data}) => props.authSuccess(data),
                        (err) => {
                            const {data} = err.response;
                            if(data.exceeded){
                                props.authFail(err.response.data)
                            }else{
                                serError(data.Message)
                            }
                        })} >Verify</button>
            </div>
            <p className={classes['input-error']}>{error}</p>
        </div>
    )
}

const mapPropsToState = state => {
    return {
        isAuth : state.auth.auth,
        isAdmin : state.auth.isAdmin,
        isOTP : state.auth.isOTP
    }
}
  
const mapPropsToDisPatch = dispatch => {
    return {
       authSuccess : (data) => {
        setLocalStorage(data);
        dispatch(action.OTPSuccess(data.isAdmin))
       },
       authFail : (err) => {
           dispatch(action.OTPFail(err))
       }
    }
}

const setLocalStorage = (data) => {
    localStorage.setItem('token',data.Token);
    localStorage.setItem('name',data.user.name);
    localStorage.setItem('email',data.user.email);
    localStorage.setItem('isAdmin',data.isAdmin);
    localStorage.setItem('authType',data.authType);
}


export default connect(mapPropsToState,mapPropsToDisPatch)(OTPAuthentication)
