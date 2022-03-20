import React from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react";


const SignIn = () => {

    const [Email, SetEmail] = useState('')
    const [Password, SetPassWord] = useState('')

    const onSubmit = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, Email, Password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    return (
        <div class="sign-in-htm">
            <div class="group">
                <label for="user" class="label">Username</label>
                <input onChange={(e) => SetEmail(e.target.value)} id="user" type="text" class="input" />
            </div>
            <div class="group">
                <label for="pass" class="label">Password</label>
                <input onChange={(e) => SetPassWord(e.target.value)} id="pass" type="password" class="input" data-type="password" />
            </div>
            <div class="group">
                <input id="check" type="checkbox" class="check" checked />
                <label for="check"><span class="icon"></span> Keep me Signed in</label>
            </div>
            <div class="group">
                <input onClick={() => onSubmit()} type="submit" class="button" value="Sign In" />
            </div>
            <div class="hr"></div>
            <div class="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
            </div>
        </div>
    )
}

export default SignIn