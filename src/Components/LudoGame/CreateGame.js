import React from 'react'
import { getFirestore, setDoc, doc, serverTimestamp, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import "../../Css/LudoGame/CreateGame.css"
import CreatedGameDetails from './CreatedGameDetails';
import { useNavigate } from 'react-router-dom';



const CreateGame = ({ UserData, CurrentUser }) => {

    const [GameName, SetGameName] = useState('')
    const [CreatedGame, SetCreatedGame] = useState({})
    const [GameId, SetGameId] = useState('')
    const [StatusText, SetStatusText] = useState('')

    const db = getFirestore()


    let navigate = useNavigate();

    useEffect(() => {

        return () => {
            //setState({}); // This worked for me
            SetGameName('')
            SetCreatedGame({})
            SetGameId('')
            SetStatusText('')
        };
    }, []);

    useEffect(() => {


        if (CreatedGame.State === "In Progress") {
            var newGameRef = doc(db, "Games", CreatedGame.id)

            setDoc(newGameRef, CreatedGame).then(() => {

                navigate(
                    '/Multiplayer',
                    {
                        state: {
                            GameId: GameId
                        }
                    }
                )
            })

        }


    }, [CreatedGame]);

    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    const CreateGameClick = async () => {

        SetStatusText('Creating Game...')

        var GameIdvar = uuidv4()

        try {
            var GameData = {
                [GameIdvar]: {
                    id: GameIdvar,
                    GameName: GameName,
                    HostName: UserData.Name,
                    HostId: CurrentUser.uid,
                    TimeStamp: serverTimestamp(),
                    PlayerIds: [CurrentUser.uid],
                    PlayerNames: [UserData.Name],

                    State: "Open"
                }
            }
            const CreatedGamesRef = doc(db, 'Games', "CreatedGames");
            var GameRes = await setDoc(CreatedGamesRef, GameData, { merge: true });

            const UserRef = doc(db, "Users", CurrentUser.uid);
            var UserRes = await setDoc(UserRef, { Games: GameData }, { merge: true });

            const unsub = onSnapshot(
                CreatedGamesRef,
                (doc) => {
                    let TempGameVar = doc.data()[GameIdvar]
                    SetGameId(GameIdvar)
                    SetCreatedGame(TempGameVar)
                });

            SetStatusText('Game Created')


        } catch (e) {
            SetStatusText("Error creating game: ", e);
        }

    }

    const StartGame = async (GameId) => {



        const GamesRef = doc(db, 'Games', "CreatedGames");

        var Res = await setDoc(GamesRef, {
            [GameId]: {
                State: "In Progress"
            }
        }, { merge: true });

        //SetGameDetails(Games[GameId])

        const unsubCreatedGame = onSnapshot(
            GamesRef,
            (doc) => {
                SetCreatedGame(doc.data()[GameId])
            });

    }

    return (
        <div id='CreateGameDiv'>
            <div className='CreateGameFormDiv'>
                <h1>Create New Game</h1>
                <div className="CreateGameInputDiv">
                    <label>Game Name : </label>
                    <input onChange={(e) => SetGameName(e.target.value)}></input>
                </div>

                {/* <div className="CreateGameInputDiv">
                    <label>Private Match  </label>
                    <input type="checkbox" onChange={(e) =>{}}></input>
                </div> */}
                <div id="CreateGameButtonDiv">
                    <button className='btn btn-outline-success' id="CreateGameButton" onClick={() => { CreateGameClick() }}>Create</button>
                    <span>{StatusText}</span>
                </div>
            </div>

            {(Object.keys(CreatedGame).length > 0) && <CreatedGameDetails StartGame={StartGame} GameDetails={CreatedGame} GameId={GameId} />}

        </div>
    )
}

export default CreateGame