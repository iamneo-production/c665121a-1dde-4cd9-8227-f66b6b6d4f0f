import React from 'react';
import { Formik, Form} from 'formik';
import TextBar from './TextBar';
import * as Yup from 'yup';
import axios from 'axios';
import base_url from '../../api/bootapi';
function AddServiceForm(){
  const validate = Yup.object({
    id:Yup.string()
      .required('Id is required'),
    name: Yup.string()
      .max(30, 'Must be 30 characters or less')
      .required('Name is Required'),
    phone:Yup.string()
      .min(10,'should be 10 number')
      .max(10,'should be 10 number')
      .required('Phone Number is Required'),
    address:Yup.string()
      .max(50, 'Must be 30 characters or less')
      .required('Address is Required'),
    imageurl:Yup.string()
      .required('Image url required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    description: Yup.string()
      .max(250, 'Must be 250 characters or less')
      .required('Description is required'),
  })
  const sendData=(data)=>{
    axios.post(`${base_url}/addCenter`,data).then(
      (response)=>{
        console.log(response);
      },(error)=>{
        console.log(error);
      }
    )
  }
  return (
    <Formik
      initialValues={{
        id:'',
        name: '',
        phone: '',
        address:'',
        imageurl: '',
        email: '',
        description: '',
      }}
      validationSchema={validate}
      onSubmit={values => {
      
        console.log(values);
        sendData(values);
      }}
    >
      {formik => (
        <div>
          <h1 className='mt-4'style={{fontWeight:"bold"}} >Add Center </h1>
          <Form>
          
            <TextBar label="Center Id"  placeholder="Enter the id" name="id" type="number" id="addId" />
            <TextBar label="Name"  placeholder="Enter the Name" name="name" type="text" id="addName" />
            <TextBar label="Mobile"  placeholder="Enter the Phone number" name="phone" type="text" id="addNumber" />
            <TextBar label="Address"  placeholder="Enter the address" name="address" type="text" id="addAddress" />
            <TextBar label="ImageUrl"  placeholder="Enter the Image Url" name="imageurl" type="text" id="addImageUrl" />
            <TextBar label="Email"  placeholder="Enter the mail id" name="email" type="email" id=" addEmail"/>
            <TextBar  label="Description" placeholder="Description about Service center" name="description" type="text" id="addCenterDescription" style={{height:"80px"}}/>

            
            <button className="btn btn-dark mt-3" type="submit">Add</button>
            <button className="btn btn-danger mt-3 ml-3"style={{marginLeft:15}} type="reset">Reset</button>
            
            
          </Form>

        </div>
      )}
    </Formik>
  )
} 
export default AddServiceForm;
