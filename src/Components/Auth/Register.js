import React from 'react'
import '../../Css/Register.css'
import SignIn from './SignIn'
import SignUp from './SignUp'

const Register = () => {
    return (
        <div className='Register'>
            <div class="login-wrap">
                <div class="login-html">
                    <input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label for="tab-1" class="tab">Sign In</label>
                    <input id="tab-2" type="radio" name="tab" class="sign-up" /><label for="tab-2" class="tab">Sign Up</label>
                    <div class="login-form">
                        <SignIn/>
                        <SignUp/>
                         
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Register