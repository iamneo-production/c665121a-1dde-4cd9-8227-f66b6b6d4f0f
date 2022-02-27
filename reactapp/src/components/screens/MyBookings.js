import React from "react";
import NavbarUser from './NavbarUser';
import Table from '@mui/material/Table';
import '../styles/MyBookings.css';

import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";

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
function MyBookings(){

 return(
     <>
         <NavbarUser/>
     <div className="home-body"style={{color:"black",margin:'auto',fontWeight:'bolder'}}>
         <h1 style={{textAlign:'center',paddingTop:'10%'}}>Bookings</h1>
         

         
         <Table style={{width:'50%', margin:'auto' }}>
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
                                </TableRow>
                                )})
                       }
                    </TableBody>
                    </Table>
                    
     </div>
     </>
 )
}
export default MyBookings;