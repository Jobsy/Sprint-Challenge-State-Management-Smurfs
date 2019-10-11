

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
    setNewSmf( {...newSmf, [e.target.name]: e.target.value})
  }

  const submitHandler = e => {
    e.preventDefault()
   
    props.postSmurf(newSmf)
    // return  props.postSmurf(
    //       {
    //       "name": "ftftuuf",
    //       "age": 7788,
    //       "height": "5cm",
  
    //     })
    
    // axios
    //   .post('http://localhost:3333/smurfs', state)
    //   .then(response => {
    //     console.log(response)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })


  }


  return (
    <div>
    
      }
        <form onSubmit={submitHandler}>
          <div>
            <input
              type="text"
              name="name"
              value={newSmf.name}
              onChange={changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="age"
              value={newSmf.age}
              onChange={changeHandler}
            />
          </div>
          <div>
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




// import React, {Component} from 'react'
      // import axios from 'axios'
// class PostForm extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       "name": "",
//       "age": "",
//       "height": ""
//     }
//   }

//   changeHandler = e => {
//     this.setState({ [e.target.name]: e.target.value })
//   }

//   submitHandler = e => {
//     e.preventDefault()
//     console.log(this.state)
//     axios
//       .post('http://localhost:3333/smurfs', this.state)
//       .then(response => {
//         console.log(response)
//       })
//       .catch(error => {
//         console.log(error)
//       })
//   }

//   render() {
//     const { name, age, height } = this.state
//     return (
//       <div>
//         <form onSubmit={this.submitHandler}>
//           <div>
//             <input
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.changeHandler}
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="age"
//               value={age}
//               onChange={this.changeHandler}
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="height"
//               value={height}
//               onChange={this.changeHandler}
//             />
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     )
//   }
// }

// export default PostForm












