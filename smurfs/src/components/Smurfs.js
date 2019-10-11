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
      <h2>Welcome to Smurfs World!</h2>
      {props.rootReducer.isFetching && <p>Fetching your Smurfs</p>}
      <div>
        {props.rootReducer.smurfs.map(smurf => (
          <h4 key={smurf.url}>
            Smurf Name: {smurf.name} <br />
            {smurf.name} is {smurf.age} year old<br />
            {smurf.name} has a height {smurf.height}<br />
          </h4>
        ))}
      </div>
      {props.error && <p className="error">{props.rootReducer.error}</p>}
      {/* <button onClick={props.fetchSmurf}>Fetch Smurf!</button> */}
    </>
  );
}
