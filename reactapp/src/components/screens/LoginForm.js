import React from 'react';
import { Formik, Form} from 'formik';
import TextBar from './TextBar';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from "react-router-dom";
import base_url from '../../api/bootapi';
function LoginForm(){
  const validate = Yup.object({
    
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      
      .required('Password is required'),
  })
  const sendData=(data)=>{
    axios.post(`${base_url}/login`,data).then(
      (response)=>{
        console.log(response);
        if(response.data==="invalid user")
        alert("Invalid credenetials try again!")
        else{
          if(response.data==="admin") window.location.replace('/admin/home');
          if(response.data==="user") window.location.replace('/user/home');
        }
      },(error)=>{
        console.log(error);
      }
    )
  }
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values);
        sendData(values);
      }}
    >
      {formik => (
        <div>
          <h1 className='mt-4'style={{fontWeight:"bold"}} >Login</h1>
          <Form>
          
            <TextBar label="Email" name="email" type="email" />
            <TextBar label="password" name="password" type="password" />
            <span className="">
                  New User
                  <nav>
                    <Link to="/Register"><h4 style={{color:'black'}}>Signup</h4></Link>
                  </nav>
                </span>
            <button className="btn btn-dark mt-3" type="submit">Login</button>
            <button className="btn btn-danger mt-3 ml-3"style={{marginLeft:15}} type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  )
} 
export default LoginForm;
