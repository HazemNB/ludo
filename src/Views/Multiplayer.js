import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { getFirestore, setDoc, doc, serverTimestamp, onSnapshot } from "firebase/firestore";
import MultiPlayerGame from '../Components/LudoGame/Multiplayer_V1.0';


const Multiplayer = ({CurrentUser, UserData}) => {
    const { state } = useLocation();
    const [Game, SetGame] = useState({})


    const db = getFirestore()

    console.log(state.GameId)

    useEffect(()=>{

        const GameRef = doc(db, 'Games', state.GameId);

        const unsub = onSnapshot(
            GameRef,
            (doc) => {
                SetGame(doc.data())
            });

    },[])
  return (
    <div>
        <MultiPlayerGame GameData={Game}/>
    </div>
  )
}

export default Multiplayer