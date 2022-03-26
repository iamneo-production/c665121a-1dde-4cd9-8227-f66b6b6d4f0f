import React, { useEffect, useState } from "react";
import axiosObject from "../../api/bootapi";
import NavbarUser from './NavbarUser';
import Table from '@mui/material/Table';
import { Modal,Button,OverlayTrigger,Tooltip } from "react-bootstrap";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Rating from "./Rating";
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
    const getUserBookings=()=>{
        axiosObject.get(`/getAppointments/user`).then(
            (response)=>{
              console.log("booking fetched");
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
    const[show1,setShow1]=useState(false);
    const handleShow = () => setShow(true);
    const handleShow1 = () => setShow1(true);

    const handleClose = () => setShow(false);
    const handleClose1 = () => setShow1(false);

    const today = new Date().toISOString().slice(0,10);
    //const time = new Date().toTimeString().slice(0,5);

    const[time,setTime]= useState("0:0");
      setInterval(updateTime,1000);
      function updateTime(){
          const obj = new Date();
           var current = obj.toTimeString().slice(0,5);
          setTime(current);
      }

    // console.log(time);
    // console.log(today);
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
                               {val.bookingDate <= today && val.bookingTime <= time
                            ?
                               <TableCell><button id="reviewappointmentbutton" onClick={() => {handleShow1()}}>Review</button>
                               
                               </TableCell>
                                
                           :  
                           <TableCell>
                                    <OverlayTrigger
                                    overlay={
                                        <Tooltip id={'tooltip-top'}>
                                            Edit
                                        </Tooltip>
                                    }>
                                        <Button id="editappointmentbutton" onClick={()=>{handleShow();setModalData(val)}} data-toggle="modal"><i className="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i></Button>
                                        </OverlayTrigger>
                                <button style = {{ marginLeft:20}} id="deleteappointmentbutton" onClick={() => remove(val.book_id)}><i className="fa fa-trash fa-lg" aria-hidden="true"></i></button>
                            </TableCell>
                              
                           
                                }
                                  </TableRow>
                                )})
                       }
                    </TableBody>
                    </Table>
                   {/*} <button onClick={() => {handleShow1()}}>
                        Reviews</button>*/}
                    <Modal show={show1} onHide={handleClose1} >
                        <Modal.Header closeButton>
                            <Modal.Body>
                                <Rating/>
                            </Modal.Body>
                        </Modal.Header>

                    </Modal>
                  
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