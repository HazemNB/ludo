import React, { useEffect, useState } from 'react'
import { getFirestore, doc, getDoc } from "firebase/firestore";


const JoinedGameDetails = ({GameDetails, LeaveGame}) => {
    console.log(GameDetails.PlayerNames)
    const db = getFirestore();
 
    useEffect(() => {

    }, [])

    const test = () => {
       
    }

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
                        {/* <button onClick={() => test()} className='btn btn-success'>Start</button> */}
                        <button onClick={() => LeaveGame(GameDetails.id)} className='btn btn-danger'>Leave</button>

                    </div>
                </div>
            </div>

        </>
    )
}

export default JoinedGameDetails