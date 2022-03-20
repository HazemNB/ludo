import React from 'react'
import CustomNav from '../Components/CustomNav'
import { useState, useEffect } from "react";
import CreateGame from '../Components/LudoGame/CreateGame';
import HomeContent from '../Components/HomeContent';
import FindGame from '../Components/LudoGame/FindGame';



 


const Home = ({CurrentUser, UserData}) => {
 

    const [ShowHomeContent, SetShowHomeContent] = useState(true)
    const [ShowCreateGame, SetShowCreateGame] = useState(false)

    const [CurrentView, SetCurrentView] = useState('HomeContent')
 
    
    const SetCurrentViewClick = (CurrentViewIn) =>{
        SetCurrentView(CurrentViewIn)
    }

    const GetView = () => {
         
        switch(CurrentView){
            case "HomeContent": return <HomeContent/>; 
            case "FindGame": return <FindGame UserData = {UserData} CurrentUser = {CurrentUser}/>;
            case "CreateGame": return <CreateGame UserData = {UserData} CurrentUser = {CurrentUser}/>;
            default:      return <HomeContent/> 
        }
      }
    return (
        <div className='Home bg-spring'>
           <CustomNav CurrentUser={CurrentUser} UserData = {UserData} SetCurrentViewClick={SetCurrentViewClick}></CustomNav>
           {/* {ShowCreateGame ? <CreateGame/> : <HomeContent/>} */}
           { GetView() }
        </div>
    )
}

export default Home