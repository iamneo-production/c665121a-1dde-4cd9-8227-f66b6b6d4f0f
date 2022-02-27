import React, { useEffect, useState } from "react";
import '../styles/user.css'
import NavBar from './Navbar';
import axios from "axios";
import base_url from "../../api/bootapi";
  
function User() {
    const getAllUser=()=>{
        axios.get(`${base_url}/getOnlyUser`).then(
            (response)=>{
              console.log("user fetched");
              setData(response.data);
            },(error)=>{
              console.log(error);
            }
          );
    };
    useEffect(()=>{
        document.title= "watchService || User Management"
        getAllUser();
        },[]);
    const [data,setData]=useState([
        { name: "user1", email: "user@gmail.com", mobile: "698745123" },
        {name: "user1", email: "user@gmail.com", mobile: "698745123" },
    ])
  return (
    <><NavBar /><div className="App">
          <table >
              <tr >
                  <th>Name</th>
                
                  <th>Email</th>
                  <th>PhoneNo.</th>
                  
              </tr>
              {data.map((val, key) => {
                  return (

                      <tr key={key}>
                          <td>{val.name}</td>
                          <td>{val.email}</td>
                          <td colSpan={2}>{val.mobile}</td>

                          <td><button className='action'>delete</button></td>
                          <td><button className='action'>edit</button>

                          </td>
                      </tr>
                  );
              })}
          </table>
      </div></>
  );
}
  
export default User;