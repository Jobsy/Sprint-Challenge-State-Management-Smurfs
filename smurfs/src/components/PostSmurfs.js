
import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../states/actionCreators';

export default connect(
  state => state,
  actionCreators,
)(PostSmurfs);


export function PostSmurfs(props) {

  const [newSmf, setNewSmf] = useState(
    {
      name: "",
      age: "",
      height: "",
    }
  )

  const changeHandler = e => {
    setNewSmf({ ...newSmf, [e.target.name]: e.target.value })
  }

  const submitHandler = e => {
    e.preventDefault()
    props.postSmurf(newSmf)
  }

  return (
    <div>
      <h4>Post A Smurf</h4>
      <form onSubmit={submitHandler}>
        <div>
          <label>Smurf Name: </label>
          <input
            type="text"
            name="name"
            value={newSmf.name}
            onChange={changeHandler}
          />
        </div>
        <div>
        <label>Smurf Age: </label>
          <input
            type="text"
            name="age"
            value={newSmf.age}
            onChange={changeHandler}
          />
        </div>
        <div>
        <label>Smurf Height: </label>
          <input
            type="text"
            name="height"
            value={newSmf.height}
            onChange={changeHandler}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
