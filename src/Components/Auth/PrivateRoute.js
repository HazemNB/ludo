import React, { useEffect, useState } from 'react';
import { Route, Redirect, Navigate, RouteComponent } from 'react-router-dom';
// import { AuthContext } from './AuthCTX';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const PrivateRoute = ({ children }) => {

    const [CurrentUserState, SetCurrentUserState] = useState({})

    const auth = getAuth();

    useEffect(() => {
 
        onAuthStateChanged(auth, (user) => {
            if (user) {

                const uid = user.uid;
                SetCurrentUserState(user)
                // ...
            } else {
                SetCurrentUserState('')
            }
        });

    }, [])


    return CurrentUserState ? children : <Navigate to="/auth" />;

}

export default PrivateRoute;
