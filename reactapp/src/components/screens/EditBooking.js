import React from 'react';
import { Formik, Form} from 'formik';
import TextBar from './TextBar';
import * as Yup from 'yup';
import axios from 'axios';
import base_url from '../../api/bootapi';

function EditBooking({booking}){

    const validate = Yup.object({
        
        contactNumber:Yup.string()
        .min(10,'should be 10 number')
        .max(10,'should be 10 number')
        .required('Phone Number is Required'),
        bookingTime:Yup.number()
        .required('Please mention time for your booking')
        .min(10,'choose a time between 10am to 5pm')
        .max(17,'choose a time between 10am to 5pm')
      
    })
    const sendData=(data)=>{
      axios.put(`${base_url}/editAppointment`,data).then(
        (response)=>{
          console.log(response);
          window.location.replace('/user/mybooking');
        },(error)=>{
          console.log(error);
        }
      )
    }
    
    return (
      <Formik
        initialValues={{
          book_id:booking.book_id,
          u_id:booking.u_id,
          sc_id:booking.sc_id,
          productName:booking.productName,
          productModelNo:booking.productModelNo,
          purchaseDate:booking.purchaseDate,
          bookingDate:booking.bookingDate,
          contactNumber:booking.contactNumber,
          bookingTime:booking.bookingTime,
          problemStatement:booking.problemStatement,
        }}
        validationSchema={validate}
        onSubmit={values => {
        
          console.log(values);
          sendData(values);
          
        }}
      >
        {formik => (
          <div>
            <h1 className='mt-4'style={{fontWeight:"bold"}} >Enter the Product Details </h1>
            <Form>
            
              <TextBar label="Product Name"   name="productName" type="text" id="editName" />
              <TextBar label="ModelNumber"   name="productModelNo" type="text" id="editNumber" />
              <TextBar label="DateOfPurchase" name="purchaseDate" type="date" id="editDate" />
              <TextBar label="DateOfBooking" name="bookingDate" type="date" id="editDate" />
              <TextBar label="Contact"  name="contactNumber" type="text" id="editContact" />
              <TextBar  label="Slot Time"  name="bookingTime" type="text" id="editSlot" />
              <TextBar label="Problem"   name="problemStatement" type="text" id=" editProblem"style={{height:"80px"}}/>
  
              
             <button className="btn btn-dark mt-3" type="submit">Update</button>
              <button className="btn btn-danger mt-3 ml-3"style={{marginLeft:15}} type="reset">Reset</button>
              
              
            </Form>
  
          </div>
        )}
      </Formik>
    )
  } 
export default EditBooking;
