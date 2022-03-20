import React from 'react'
import { getFirestore, setDoc, doc, serverTimestamp, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import FindGameTable from './FindGameTable';
import CreatedGameDetails from './CreatedGameDetails';
import JoinedGameDetails from './JoinedGameDetails';
import { useNavigate  } from 'react-router-dom';


const FindGame = ({UserData, CurrentUser}) => {
    const [Games, SetGames] = useState({})
    const [GameDetails, SetGameDetails] = useState({})
    const [GameForTable, SetGameForTable] = useState([])


    const db = getFirestore()

    let navigate = useNavigate();


    useEffect(() => {

        GetGames()
    }, [])
    useEffect(() => {

        if(GameDetails.State === "In Progress"){
            navigate(
                '/Multiplayer',
                {
                  state: {
                    GameId : GameDetails.id
                  }
                }
              )

        }
    }, [GameDetails])

    const GetGames = () => {
        try {
            const GamesRef = doc(db, 'Games', "CreatedGames");
            // var GamesRes = await setDoc(CreatedGamesRef, GameData, { merge: true });

            // const UserRef = doc(db, "Users", CurrentUser.uid);
            // var UserRes = await setDoc(UserRef, { Games: GameData }, { merge: true });

            const unsub = onSnapshot(
                GamesRef,
                (doc) => {
                    SetGames(doc.data())
                });

        } catch (e) {
        }
    }

    const FindGame = (GameId) => {


        if(Games[GameId]){
            SetGameForTable([GameId, Games[GameId]])

            return [GameId, Games[GameId]]
        }
    }

    const JoinGame = async (GameId) =>{

        if(Games[GameId].PlayerIds.includes(CurrentUser.uid)){
            return;
        }
        var PlayerNamesVar = Games[GameId].PlayerNames.concat(UserData.Name)
        var PlayerIdsVar = Games[GameId].PlayerIds.concat(CurrentUser.uid)



        
        const GamesRef = doc(db, 'Games', "CreatedGames");

        var Res = await setDoc(GamesRef, {
            [GameId]: {
                PlayerNames: PlayerNamesVar,
                PlayerIds: PlayerIdsVar


        } }, { merge: true });

        //SetGameDetails(Games[GameId])

        const unsubJoinedGameDetails = onSnapshot(
            GamesRef,
            (doc) => {
                SetGameDetails(doc.data()[GameId])
            });

    }

    const LeaveGame = async (GameId) =>{

        
        var CurrentGame = Games[GameId]
        var CurrentPlayerNames = CurrentGame.PlayerNames
        var CurrentIds = CurrentGame.PlayerIds
        if(!CurrentIds.includes(CurrentUser.uid)){
            return;
        }

        var NamePos = CurrentPlayerNames.indexOf(UserData.Name);
        var IdPos = CurrentIds.indexOf(CurrentUser.uid);
  
        CurrentPlayerNames.splice(NamePos, 1);
        CurrentIds.splice(IdPos, 1);

        const GamesRef = doc(db, 'Games', "CreatedGames");

        var Res = await setDoc(GamesRef, {
            [GameId]: {
                PlayerNames: CurrentPlayerNames,
                PlayerIds: CurrentIds


        } }, { merge: true });



    }

    return (
        <div id="FindGamesDiv">
            <div id="FindGamesTableDiv" className='CreateGameFormDiv'>
                <div id="FindGameIdDiv">
                    
                    <input placeholder='Find game using Id' /><button className='btn btn-outline-dark'>Find</button>

                    <FindGameTable Games={GameForTable.length > 1 ? GameForTable : Games} JoinGame = {JoinGame}/>
                </div>

            </div>

            { Object.keys(GameDetails).length > 0 && <JoinedGameDetails GameDetails={GameDetails} LeaveGame={LeaveGame}/>}
        </div>
    )
}

export default FindGame