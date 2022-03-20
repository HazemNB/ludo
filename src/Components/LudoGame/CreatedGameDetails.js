import React, { useEffect, useState } from 'react'
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { sendEmailVerification } from 'firebase/auth';

const CreatedGameDetails = ({ GameDetails, StartGame }) => {

    const db = getFirestore();

    const [IsLoaded, SetIsLoaded] = useState(true);


    useEffect(() => {

    }, [])

    return (
        <>

            <div id="CreatedGameDetailsDiv" className='CreateGameFormDiv'>
                <div className='CreatedGameDetailsDiv'>
                    <h1>Game Name: {GameDetails.GameName}</h1>
                    <span>Game Id: {GameDetails.id}</span>
                    {
                        GameDetails.PlayerNames.map((playerName) => {
                            return (<span>{playerName}</span>)
                        })
                    }


                    <div className='StartCancelButtonsDiv'>
                        <button onClick={() => StartGame(GameDetails.id)} className='btn btn-success'>Start</button>
                        <button className='btn btn-danger'>Cancel</button>

                    </div>
                </div>
            </div>


        </>
    )
}

export default CreatedGameDetails