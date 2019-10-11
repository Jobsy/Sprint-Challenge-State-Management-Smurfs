
// // import React, { useState, useEffect } from "react";
// // import { Form as FormikForm, Field as FormikField } from "formik";
// // import { withFormik } from "formik";
// // import { Button, Checkbox, Form, Dropdown } from "semantic-ui-react";
// // import * as Yup from "yup";
// // import axios from "axios";

// // // import DonorForm from "./DonorForm";
// // // import CampaignForm from "./CampaignForm";
// // // import { axiosWithAuth } from "../utilities/axiosWithAuth";



// // function DonorForm({ errors, touched, values, status }) {
// //     const [users, setUsers] = useState([]);
 
// //     useEffect(() => {
// //       if (status) {
// //           console.log("stattt:, ",status)
// //         setUsers(users.concat(status));
// //       }
// //     }, [status]);
  
// //     return (
// //       <FormikForm>
// //         <Form style={{ width: 800, marginTop: 40, marginRight: "auto", marginBottom: 20, marginLeft: "auto" }}>
// //           <h1>Post Form</h1>
// //           <br />
// //           <Form.Group widths="equal">
// //             <Form.Field>
// //               <label>
// //                 First Name:
// //                 <FormikField type="text" name="name" placeholder="First Name" />
// //                 {touched.name && errors.name && <p>{errors.name}</p>}
// //               </label>
// //             </Form.Field>
// //             <br />
// //             <Form.Field>
// //               <label>
// //                 Middle Name:
// //                 <FormikField type="text" name="mName" placeholder="Middle Name" />
// //               </label>
// //             </Form.Field>
// //             <br />
// //             <Form.Field>
// //               <label>
// //                 Last Name:
// //                 <FormikField type="text" name="lName" placeholder="Last Name" />
// //               </label>
// //             </Form.Field>
// //           </Form.Group>
// //                     <Form.Field>
// //             <Button size="huge" animated="fade">
// //               <Button.Content visible style={{ width: 100 }}>
// //                 Submit
// //               </Button.Content>
// //               <Button.Content hidden>Click to Submit</Button.Content>
// //             </Button>
// //           </Form.Field>
// //           <br />
  
// //           {/* <Display1 users={users} /> */}
// //         </Form>
// //       </FormikForm>
// //     );
// //   }
  


// // const PostForm = withFormik({
// //   mapPropsToValues({ name, email }) {
// //     return {
// //       name: name || "",
// //       email: email || "",
// //     };
// //   },

// //   validationSchema: Yup.object().shape({
// //     name: Yup.string()
// //       .min(3)
// //       .required(),
// //     email: Yup.string()
// //       .email()
// //       .required()
// //   }),

// //   handleSubmit(values, { resetForm, setStatus }) {
// //     const sentData = {
// //       name: values.name,
// //       email: values.email,
// //     };

// //     // const authorization = localStorage.getItem('token')
// //     axios.post('http://localhost:3333/smurfs', sentData,
// //     //   { headers: { Authorization: authorization } }
// //     )
// //       .then(data => {
// //         setStatus(data.data)
// //         resetForm();
// //       }
// //       )
// //   }
// // })(DonorForm);

// // export default PostForm;



// import React from 'react';
// import { connect } from 'react-redux';
// import * as actionCreators from '../states/actionCreators';


// export default connect(
//     state => state,
//     actionCreators,
//   )(Form);


// export function Form({ formValues, changeInput }) {
//   const onValueChange = event => {
//     changeInput(event.target);
//   };

//   const onFormSubmit = event => {
//     event.preventDefault();
//     alert(`submitting ${formValues.name}, ${formValues.age}, ${formValues.height}`);
//   };

//   return (
//     <form className='component' onSubmit={onFormSubmit}>
//       <label>Name
//         <input value={formValues.name} onChange={onValueChange} name="name" />
//       </label><br />

//       <label>Age
//         <input value={formValues.age} onChange={onValueChange} name="age" />
//       </label><br />

//       <label>Height
//         <input value={formValues.height} onChange={onValueChange} name="age" />
//       </label><br />

//       <input type='submit' />
//     </form>
//   );
// }


