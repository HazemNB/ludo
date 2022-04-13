import React from 'react'

const FindGameTable = ({Games, JoinGame}) => {
    // console.log(Object.entries(Games).sort((a, b) => (a.TimeStamp > b.TimeStamp) ? 1 : -1)[0])
    // console.log("Games : ", Games)
    // console.log("TimeStamp : ", Games['bf449456-b023-4b4c-8b97-f16985210cf4'].TimeStamp.seconds)

    return (
    <table>
                <thead>
                    <tr>
                        <th>Game Name</th>
                        <th>Players</th>
                        <th>TimeStamp</th>
                        <th>Join</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        Object.entries(Games).sort(function(a, b){
                            // return new Date(b.TimeStamp) - new Date(a.TimeStamp);
                            // if(a[1].PlayerNames && b[1].PlayerNames){
                                if(a[1].TimeStamp.seconds && b[1].TimeStamp.seconds){
                                    // console.log(new Date(a[1].TimeStamp.seconds) -new Date(b[1].TimeStamp.seconds))
                                    return new Date(a[1].TimeStamp.seconds) -new Date(b[1].TimeStamp.seconds);
                                
                            // return a[1].PlayerNames.length - b[1].PlayerNames.length;

                            }
                            else 
                            return 0;

                        }).map((game => {
                        // Object.keys(Games).map((gameId => {
                            return (

                                <tr key={game[0]}>
                                    
                                    <td>
                                        {game[1].GameName}
                                    </td>
                                    <td>
                                        {game[1].PlayerNames.length}
                                    </td>

                                    <td>
                                    {new Date(game[1].TimeStamp.seconds * 1000).toLocaleString()}
                                    </td>

                                    <td>
                                        <button onClick={()=>JoinGame(game[0])} className='btn btn-outline-success'>JOIN GAME</button>
                                    </td>
                                    
                                </tr>
                            )
                        }))
                    }
                </tbody>
            </table>
  )
}

export default FindGameTable