import React , {useState} from 'react'
import classes from './AuthContainer.module.css'
import Images from '../Assets/Images'
import AuthPage from './AuthForm/AuthPage';
import { connect } from 'react-redux';
import OTPAuthentication from './OTPAuthentication/OTPAuthentication';

import * as action from '../Store/Actions/Auth';

const AuthContainer = props => {

    const [isSignUp,setIsSignUp] = useState(false);
    const [isAdmin,setIsAdmin] = useState(false);
    const [email,setEmail] = useState('');

    return (
        <div className={classes['auth-container']}>
            <div className={classes['auth-modal']}>
                <div className={classes['auth-left']}>
                    <h2>Login</h2>
                    <p>Get access to your Orders, Wishlist and Recommendations</p>
                    <img src={Images.loginIMG} alt='Login' />
                </div>
                <div className={classes['auth-page-container']}>
                    {!props.isOTP ? <AuthPage
                        onSuccessLogin={() => props.authShowHandler(false)}
                        isAdmin={isAdmin}
                        onAdminChange={setIsAdmin}
                        setEmail = {setEmail}
                        isSignup ={isSignUp} 
                        setSignUp={setIsSignUp} /> : 
                            <OTPAuthentication 
                                email= {email}
                                isAdmin={isAdmin} />} 
                </div>
                <p className={classes['close-cross']}
                    onClick={() => {
                        props.authShowHandler(false);
                       if(props.isOTP) props.otpFail() 
                    }}>X</p>
            </div>
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

const mapDispatchToSProps = dispatch => {
    return {
        otpFail : () => dispatch(action.OTPFail())
    }
}

export default connect(mapPropsToState,mapDispatchToSProps)(AuthContainer)
