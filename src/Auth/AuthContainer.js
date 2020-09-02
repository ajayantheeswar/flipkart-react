import React , {useState} from 'react'
import classes from './AuthContainer.module.css'
import Images from '../Assets/Images'
import AuthPage from './AuthForm/AuthPage';

const AuthContainer = props => {

    const [isSignUp,setIsSignUp] = useState(false);

    return (
        <div className={classes['auth-container']}>
            <div className={classes['auth-modal']}>
                <div className={classes['auth-left']}>
                    <h2>Login</h2>
                    <p>Get access to your Orders, Wishlist and Recommendations</p>
                    <img src={Images.loginIMG} alt='Login' />
                </div>
                <div className={classes['auth-page-container']}>
                    <AuthPage
                        isAdmin={false}
                        isSignup ={isSignUp} 
                        setSignUp={setIsSignUp} />
                </div>
                <p className={classes['close-cross']}
                    onClick={() => props.authShowHandler(false)}>X</p>
            </div>
        </div>
    )
}

export default AuthContainer
