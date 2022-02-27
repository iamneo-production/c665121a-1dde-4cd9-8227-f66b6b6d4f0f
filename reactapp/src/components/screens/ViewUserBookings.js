import React,{useState} from "react";
import NavbarUser from './NavbarUser';
import Table from '@mui/material/Table';
import { Modal,Button,OverlayTrigger,Tooltip } from "react-bootstrap";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";

import EditBooking from "./EditBooking";
import '../styles/MyBookings.css';

const data = [
    {
        id:'1',
        name:"Sonata Service",
        date:"27/2/2022",
        time:"4pm to 6pm",
    },
    {
        id:'2',
        name:"Sonata Service",
        date:"27/2/2022",
        time:"4pm to 6pm",
    }
]
function ViewUserBookings(){
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
             <TableCell>S.No.</TableCell>
         <TableCell>Name</TableCell>
         <TableCell>Date</TableCell>
         <TableCell>Time</TableCell>
         </TableHead>
                    <TableBody>
                       {
                           data.map(val => {
                               return(
                                
                                   <TableRow key="key">
                                       <TableCell>{val.id}</TableCell>
                                <TableCell>{val.name}</TableCell>
                                <TableCell>{val.date}</TableCell>
                                <TableCell>{val.time}</TableCell>
                                <TableCell>
                                    <OverlayTrigger
                                    overlay={
                                        <Tooltip id={'tooltip-top'}>
                                            Edit
                                        </Tooltip>
                                    }>
                                        <Button onClick={handleShow} data-toggle="modal"><i className="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i></Button>
                                        </OverlayTrigger></TableCell>
                                
                                <TableCell><button><i className="fa fa-trash fa-lg" aria-hidden="true"></i></button></TableCell>
                                </TableRow>
                                )})
                       }
                    </TableBody>
                    </Table>
                  
                    <Modal show={show} onHide={handleClose} >
                        <Modal.Header closeButton>
                            <Modal.Body>
                                <EditBooking/>
                            </Modal.Body>
                        </Modal.Header>

                    </Modal>
     </div>
     
     </>
     )}

 

export default ViewUserBookings;