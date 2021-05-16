import React  from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import "./Episodes.css";

import {loadEpisodes} from "../../actions";
import {connect} from "react-redux";

function Episodes(props) {

  const [query, setQuery] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
 
  React.useEffect(()=>{    
    props.loadEpisodes(query);   
    setIsLoading(false) 
  },[query]);  

  const handleChange = (q) => {
    setQuery(q);
  }   

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="Episodes">
      <h1>Episodes List</h1>
      
      <section>
        <form className="form-control" onSubmit={(e)=>handleSubmit(e)}>
          <input
          type="text"
          placeholder="Search by Series"
          onChange={(e)=>handleChange(e.target.value)}/>
        </form>
      </section>
                  
      <ul className="Episodes__list">
        {/*El loading le va a dar un efecto de carga hasta que la peticion de la API llegue, no tocar!.*/}
        {isLoading ? ( 
          <Spinner /> 
          ) :      
          props.episodes.map((c) => 
          <li key={c.episode_id}>
            <Link to={`/episodes/${c.episode_id}`}>
              {c.title}
            </Link>
          </li>
          )      
        }
 
      </ul>
    </div>
  );
}


function mapStateToProps(state){
  return {
    episodes : state.episodes
  }
}


//Actions
function mapDispatchToProps(dispatch) {
  return {
    loadEpisodes: (query) => dispatch(loadEpisodes(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Episodes);
