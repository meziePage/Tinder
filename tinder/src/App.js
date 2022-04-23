import React from "react";
import './App.css';
import SwipeButtons from "./SwipeButtons";
import {
    BrowserRouter as Router,
  Switch,
    Route
  } from "react-router-dom";
import Header from "./Header";
import TinderCards from "./TinderCards";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {
    return (
        <div className="app">
        
    <Router>
      <Switch>
     
        <Route path="/chat/:person">
        < Header backButton="/chats"/>
        <ChatScreen />
        </Route>
    
       
        <Route path="/chat">
        < Header backButton="/chats"/>
       <Chats />
        </Route>

        <Route path="/">
        < Header />
         < TinderCards />
         <SwipeButtons />
        </Route>
      </Switch>
    </Router>

        </div>
    )
}

export default App

