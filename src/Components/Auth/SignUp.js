import React from 'react'
import { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, setDoc, doc } from "firebase/firestore";


const SignUp = () => {

    const [Email, SetEmail] = useState('')
    const [Username, SetUsername] = useState('')
    const [Password, SetPassWord] = useState('')
    const [ConfirmPassWord, SetConfirmPassWord] = useState('')



    const onSubmit = () => {
        const auth = getAuth();
        const db = getFirestore();
        createUserWithEmailAndPassword(auth, Email, Password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
 
                try {
                    setDoc(doc(db, "Users", userCredential.user.uid), {
                      Name: Username,
                      Gold: 10000,
                      CurrentGameId: "None"
                    }).then((doc) => {

                        console.log("Document written with ID: ", doc.id);
                    });
                  } catch (e) {
                    console.error("Error adding document: ", e);
                  }
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error)
                // ..
            });
    }

    return (
        <div class="sign-up-htm">
            <div class="group">
                <label for="user" class="label">Username</label>
                <input onChange={(e) => SetUsername(e.target.value)} id="user" type="text" class="input" />
            </div>
            <div class="group">
                <label for="pass" class="label">Password</label>
                <input id="pass" onChange={(e) => SetPassWord(e.target.value)} type="password" class="input" data-type="password" />
            </div>
            <div class="group">
                <label for="pass" class="label">Repeat Password</label>
                <input id="pass" onChange={(e) => SetConfirmPassWord(e.target.value)} type="password" class="input" data-type="password" />
            </div>
            <div class="group">
                <label for="pass" class="label">Email Address</label>
                <input id="pass" onChange={(e) => SetEmail(e.target.value)} type="text" class="input" />
            </div>
            <div class="group">
                <input onClick={() => onSubmit()} type="submit" class="button" value="Sign Up" />
            </div>
            <div class="hr"></div>
            <div class="foot-lnk">
                <label for="tab-1">Already Member?</label>
            </div>
        </div>
    )
}

export default SignUp