
import './App.css';
import Main from './Components/LudoGame/Main';
import LandingPage from './Components/LandingPage';
import { Route, Routes } from "react-router-dom";
import Auth from './Views/Auth';
import PrivateRoute from './Components/Auth/PrivateRoute';
import Home from './Views/Home';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { useState, useEffect } from "react";
import Loader from './Components/Loader';
import Offline from './Components/LudoGame/Offline';
import Multiplayer from './Views/Multiplayer';



function App() {


  const [CurrentUser, SetCurrentUser] = useState('NotLoaded')
  const [CurrentUserData, SetCurrentUserData] = useState('NoData')

  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {



    onAuthStateChanged(auth, (user) => {
      if (user) {

        const uid = user.uid;
        SetCurrentUser(user)
        const docRef = doc(db, "Users", user.uid);
        getDoc(docRef).then((docSnap) => {

          if (docSnap.exists()) {
            SetCurrentUserData(docSnap.data())
            console.log("Document data:", docSnap.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        });


        console.log("APP.JS    ", user)

        // ...
      } else {
        SetCurrentUser('')
        console.log("no current user")
      }

    });
  }, [])
  return (
    <div className="App">
      {CurrentUser == "NotLoaded" ? <Loader /> : <Routes>
        {CurrentUser ? <Route
          path="/"
          element={
            <PrivateRoute pr={"hi"}>
              <Home CurrentUser={CurrentUser} UserData={CurrentUserData} />
            </PrivateRoute>
          }
        /> : <Route path="/" element={<LandingPage />} />}

        <Route path="/auth" element={<Auth CurrentUser={CurrentUser} />} />
        <Route path="/main" element={<Main />} />


        <Route
          path="/home"
          element={
            <PrivateRoute pr={"hi"}>
              <Home CurrentUser={CurrentUser} UserData={CurrentUserData} />
            </PrivateRoute>


          }
        />

        <Route
          path="/multiplayer"
          element={
            <PrivateRoute pr={"hi"}>
              <Multiplayer CurrentUser={CurrentUser} UserData={CurrentUserData} />
            </PrivateRoute>


          }
        />

        <Route
          path="/Offline"
          element={
            <PrivateRoute pr={"hi"}>
              <Offline CurrentUser={CurrentUser} />
            </PrivateRoute>
          }
        />

      </Routes>
      }

    </div>
  );
}

export default App;
