import React from 'react';
import { Formik, Form} from 'formik';
import TextBar from './TextBar';
import * as Yup from 'yup';
import axios from 'axios';
import base_url from '../../api/bootapi';
import '../styles/Appointments.css';
import '../styles/EditCenter.css';

  
function EditUser({user}) {


    const validate = Yup.object({
        name: Yup.string()
          .max(15, 'Must be 15 characters or less'),
        mobile:Yup.string()
          .min(10,'should be 10 number')
          .max(10,'should be 10 number'),
        email: Yup.string()
          .email('Email is invalid'),
        password:Yup.string()
          .min(8,'should contain 8 characters'),
})

const sendData=(data)=>{
    axios.put(`${base_url}/editUser`,data).then(
      (response)=>{
        console.log(response);
        window.location.replace('/admin/usermanagement');
      },(error)=>{
        console.log(error);
      }
    )
  }
 return(
     <>
    <Formik
    initialValues={{
      id:user.id,
      name:user.name,
      mobile:user.mobile,
      email:user.email,
      role:user.role,
      username:user.username,
      password:user.password,
    }}
    validationSchema={validate}
    onSubmit={values => {
      console.log(values);
    sendData(values);
    
    }}
  >
    {formik => (
      <div className='edit-temp edit-user'>
        <h1 className='mt-4'style={{fontWeight:"bold"}} >Edit User Details </h1>
        <Form>
        
          <TextBar label="Name"   name="name" type="text" id="editName"/>
          <TextBar label="username"   name="username" type="text" id="editusername"/>
          <TextBar label="Email"   name="email" type="email" id=" editEmail"/>
          <TextBar label="Mobile"   name="mobile" type="number" id="editNumber" />
          <TextBar label="Password"   name="password" type="text" id="editpassword"/>
         <button className="btn btn-dark mt-3" type="submit">Update</button>
          <button className="btn btn-danger mt-3 ml-3"style={{marginLeft:15}} type="reset">Reset</button>
          
          
        </Form>

      </div>
    )}
  </Formik></>
 )}
export default EditUser

