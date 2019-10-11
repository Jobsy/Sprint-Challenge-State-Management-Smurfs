import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../states/actionCreators';

export default connect(
  state => state,
  actionCreators,
)(Smurfs);


export function Smurfs(props) {
    useEffect(() => {
     
      props.getSmurf();
    }, []);
    return (
        <>
          <h2>Welcome to Pokémon World!</h2>
          {console.log("ppp: ", props)}
          {props.rootReducer.isFetching && <p>Fetching your Pokémon</p>}
          <div>
            {props.rootReducer.smurf.map(smurf => (
              <h4 key={smurf.url}>{smurf.name}</h4>
            ))}
          </div>
          {props.error && <p className="error">{props.rootReducer.error}</p>}
          <button onClick={props.fetchSmurf}>Fetch Smurf!</button>
        </>
      );
  }
  