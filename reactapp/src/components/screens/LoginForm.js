import React from 'react';
import { Formik, Form} from 'formik';
import TextBar from './TextBar';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from "react-router-dom";
import base_url from '../../api/bootapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        localStorage.setItem("user",JSON.stringify(response.data));
        if(response.data==="")
        toast.error('Invalid credentials',{autoClose: 2000});
        else{
          if(response.data.role==="admin") {
            toast.success('Welcome Admin',{autoClose: 2000});
            setTimeout(() => { window.location.replace('/admin/home'); }, 2000);
            
          };
          if(response.data.role==="user") {
            toast.success('Welcome User',{autoClose: 2000});
            setTimeout(() => {  window.location.replace('/user/home'); }, 2000);
          }
         
        }
      },(error)=>{
        console.log(error);
        toast.error('OOPs... Server is busy try again',{autoClose: 2000});
      }
    )
  }
  return (
    <>
    <ToastContainer/>
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
    </>
  )
} 
export default LoginForm;
