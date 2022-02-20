import React from 'react';
import { Formik, Form} from 'formik';
import TextBar from './TextBar';
import * as Yup from 'yup';
import axios from 'axios';
import base_url from '../../api/bootapi';
function EditServiceForm(){

  let center=JSON.parse(localStorage.getItem('data'));
  const validate = Yup.object({
    id:Yup.string()
      .required('Id is required'),
    name: Yup.string()
      .max(30, 'Must be 30 characters or less')
      .required('Name is Required'),
    mobile:Yup.string()
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
    details: Yup.string()
      .max(250, 'Must be 250 characters or less')
      .required('Description is required'),
  })
  const sendData=(data)=>{
    axios.put(`${base_url}/updateCenter`,data).then(
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
        id:center.id,
        name:center.name,
        mobile: center.mobile,
        address:center.address,
        imageurl: center.imageurl,
        email: center.email,
        details: center.details,
      }}
      validationSchema={validate}
      onSubmit={values => {
      
        console.log(values);
        sendData(values);
        localStorage.setItem('data',JSON.stringify(values));
      }}
    >
      {formik => (
        <div>
          <h1 className='mt-4'style={{fontWeight:"bold"}} >Edit Center </h1>
          <Form>
          
            <TextBar label="Center Id"   name="id" type="number" id="editId" />
            <TextBar label="Name"   name="name" type="text" id="editName" />
            <TextBar label="Mobile"   name="mobile" type="number" id="editNumber" />
            <TextBar label="Address" name="address" type="text" id="editAddress" />
            <TextBar label="ImageUrl"  name="imageurl" type="text" id="editImageUrl" />
            <TextBar label="Email"   name="email" type="email" id=" editEmail"/>
            <TextBar  label="Description"  name="details" type="text" id="editCenterDescription" style={{height:"80px"}}/>

            
           <button className="btn btn-dark mt-3" type="submit">Update</button>
            <button className="btn btn-danger mt-3 ml-3"style={{marginLeft:15}} type="reset">Reset</button>
            
            
          </Form>

        </div>
      )}
    </Formik>
  )
} 
export default EditServiceForm;