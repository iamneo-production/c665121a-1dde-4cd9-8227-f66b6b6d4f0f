import React, { useEffect, useState } from "react";
import axiosObject from "../../api/bootapi";
import NavbarUser from './NavbarUser';
import Table from '@mui/material/Table';
import { Modal,Button,OverlayTrigger,Tooltip } from "react-bootstrap";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";

import EditBooking from "./EditBooking";
import '../styles/MyBookings.css';


function ViewUserBookings(){
    const [data,setData] = useState([
        {
            book_id:'1',
            productName:"Sonata Service",
            bookingDate:"27/2/2022",
            bookingTime:"4pm to 6pm",
        },
    ]);
    let user=JSON.parse(localStorage.getItem('user'));
    const getUserBookings=()=>{
        axiosObject.get(`/getAppointments/${user.id}`).then(
            (response)=>{
              console.log("centers fetched");
              setData(response.data);
            },(error)=>{
              console.log(error);
            }
          );
    };
    const remove=(value)=>{
        axiosObject.delete(`/deleteAppointment/${value}`).then(
            (response)=>{
                console.log("User Deleted");
                console.log(response);
                refreshPage();
            },(error)=>{
                console.log(error);
            }
        )
    };
    const refreshPage=()=>{
        window.location.reload(false);
    }
    useEffect(()=>{
    document.title= "watchService || MyBookings" 
    getUserBookings();
    },[]);

    const [modalData,setModalData] = useState([
        {
            book_id:'1',
            productName:"Sonata Service",
            bookingDate:"27/2/2022",
            bookingTime:"4pm to 6pm",
        },
    ]);
    const[show,setShow]=useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
        return(
     <>
         <NavbarUser/>
     <div className="home-body"style={{color:"black",margin:'auto',fontWeight:'bolder'}}>
       
         <h1 style={{textAlign:'center',paddingTop:'10%'}}>Bookings</h1>
         
         <Table style={{width:'50%', margin:'auto'}}>
        
         <TableHead style={{fontWeight:"bolder"}}>
             <TableCell>Booking No.</TableCell>
         <TableCell>Product Name</TableCell>
         <TableCell>Date</TableCell>
         <TableCell>Time</TableCell>
         </TableHead>
                    <TableBody>
                       {
                           data.map(val => {
                               return(
                                
                                   <TableRow key="key">
                                       <TableCell>{val.book_id}</TableCell>
                                <TableCell>{val.productName}</TableCell>
                                <TableCell>{val.bookingDate}</TableCell>
                                <TableCell>{val.bookingTime}</TableCell>
                                <TableCell>
                                    <OverlayTrigger
                                    overlay={
                                        <Tooltip id={'tooltip-top'}>
                                            Edit
                                        </Tooltip>
                                    }>
                                        <Button onClick={()=>{handleShow();setModalData(val)}} data-toggle="modal"><i className="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i></Button>
                                        </OverlayTrigger></TableCell>
                                
                                <TableCell><button onClick={() => remove(val.book_id)}><i className="fa fa-trash fa-lg" aria-hidden="true"></i></button></TableCell>
                                </TableRow>
                                )})
                       }
                    </TableBody>
                    </Table>
                  
                    <Modal show={show} onHide={handleClose} >
                        <Modal.Header closeButton>
                            <Modal.Body>
                                <EditBooking booking={modalData}/>
                            </Modal.Body>
                        </Modal.Header>

                    </Modal>
     </div>
     
     </>
     )}

 

export default ViewUserBookings;