import React from 'react';
import { Formik, Form} from 'formik';
import TextBar from './TextBar';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from "react-router-dom";
import base_url from '../../api/bootapi';
function RegisterForm(){
  const validate = Yup.object({
    
    name: Yup.string()
      .max(30, 'Must be 30 characters or less')
      .required('Name is Required'),
    username: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('username is Required'),
    mobile:Yup.string()
      .min(10,'should be 10 number')
      .max(10,'should be 10 number')
      .required('Mobile Number is Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
  })
  const postDatatoServer=(data)=>{
    axios.post(`${base_url}/signup`,data).then(
      (response)=>{
        console.log(response);
        console.log("success");
      
      },(error)=>{
        console.log(error);
        alert("email already exists");
        console.log("error");
      }
    )
  }
  return (
    <Formik
      initialValues={{
        
        name: '',
        username: '',
        mobile:'',
        email: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={values => {
      
        console.log(values);
        postDatatoServer(values);
      }}
    >
      {formik => (
        <div>
          <h1 className='mt-4'style={{fontWeight:"bold"}} >Register</h1>
          <Form>
          
            <TextBar label="Name" name="name" type="text" />
            <TextBar label="Username" name="username" type="text" />
            <TextBar label="Mobile" name="mobile" type="text" />
            <TextBar label="Email" name="email" type="email" />
            <TextBar label="password" name="password" type="password" />
            <span className="">
                  Already Have Account?
                  <nav>
                    <Link to="/Login"><h4 style={{color:'black'}}>login</h4></Link>
                  </nav>
                </span>
            <button className="btn btn-dark mt-3" type="submit">Register</button>
            
            <button className="btn btn-danger mt-3 ml-3"style={{marginLeft:15}} type="reset">Reset</button>
          </Form>

        </div>
      )}
    </Formik>
  )
} 
export default RegisterForm;
