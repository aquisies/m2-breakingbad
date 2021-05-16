import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import Characters from './components/characters/Characters';
import CharacterDetail from './components/characterDetails/CharacterDetail';
import Episodes from './components/episodes/Episodes';



function App() {
  return (
    <BrowserRouter>
      <Route path = "/" component = {NavBar}/>
      <Route exact path = "/" component = {Home}/>
      <Route path = "/characters/:id" component = {CharacterDetail}/>
      <Route exact path = "/characters" component = {Characters}/> 
      <Route exact path = "/episodes" component = {Episodes}/>
    </BrowserRouter>
  );
}
export default App;
