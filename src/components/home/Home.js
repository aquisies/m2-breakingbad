import React, { useState, useEffect } from "react";
import logo from "../../img/logo.png";
import "./Home.css";
import {addQuote} from "../../actions";
import {connect} from "react-redux";

// En props se cargan las propiedades y funciones (dispatch) del estado de la aplicacion.
function Home(props) {
//PISTA: podemos usar el hook useEffect para llamar a la api. Que haces useEffect? https://es.reactjs.org/docs/hooks-effect.html
const {quote, author, series}= props.quote;
  useEffect(()=>{
    props.addQuote();
  },[])  

  return (
    <div className="Home">
      <img src={logo} alt="" className="Home__logo" />
      
      <div>{/*Acá deberíamos poner la quote, con sus datos*/}</div>

    <h3>{quote}</h3>
    <p>{author}</p>
    <p>From: {series}</p>    
    
    </div>
  );
}

//Devolviendo un objeto, cuyo parámetro quote va a ser igual al quote del estado global
//Con connect ese objeto devuelto pasa a formar parte de las props

function mapStateToProps(state){
  return {
    quote : state.quote
  }
}


//Actions
function mapDispatchToProps(dispatch) {
  return {
    addQuote: () => dispatch(addQuote())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
