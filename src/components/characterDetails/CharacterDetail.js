import React, { useEffect, useState } from "react";
//import { useParams } from "react-router";
import "./CharacterDetail.css";

import {getCharacterDetail} from "../../actions";
import {connect} from "react-redux";

function CharacterDetail(props) {
  const id= props.match.params.id; // Alternativa const {id} = useParams();
  
  useEffect(()=>{    
    props.getCharacterDetail(id);
    //setIsLoading(false)
  },[id]);  

  /*
    PISTA: podemos obtener lo que llegue por parametros con el hook useParams.
    Que hace useParams? https://reactrouter.com/web/example/url-params
    */

  return (
    <div className="CharacterDetail">
    <h1>Character Details</h1>
    <h3>{props.characterDetail.name}</h3>       
    <img className="CharacterDetail__Photo" src={props.characterDetail.img} alt="" />
    <ul>
        {
        props.characterDetail.occupation && 
            props.characterDetail.occupation.map((elem, index)=> 
              <li key={index}> {elem} </li>
            )
        }
    </ul>

  </div>
);
}

function mapStateToProps(state){
return {
  characterDetail : state.characterDetail
}
}

//Actions
function mapDispatchToProps(dispatch) {
return {
  getCharacterDetail: (id) => dispatch(getCharacterDetail(id))
}
}

export default connect(mapStateToProps, mapDispatchToProps) (CharacterDetail) ;
