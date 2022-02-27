import React, { useEffect, useState } from "react";
import axios from "axios";
import base_url from "../../api/bootapi";
import '../styles/user.css'
import NavBar from './Navbar';
import Modal from 'react-modal';
import EditUser from "./EditUser";

const data = [
  { username: "user1", useremail: "user@gmail.com", userphoneno: "698745123" },
  {username: "user1", useremail: "user@gmail.com", userphoneno: "698745123" },  
]

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

Modal.setAppElement('#root');

const remove=(value)=>{
    axios.delete(`${base_url}/deleteuser/${value}`).then(
        (response)=>{
            console.log("User Deleted");
            console.log(response);
            refreshPage();
        },(error)=>{
            console.log(error);
        }
    )
}
const refreshPage=()=>{
    window.location.reload(false);
}
function User() {
    
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    
    function openModal() {
      setIsOpen(true);
    }
    
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
    
    function closeModal() {
      setIsOpen(false);
    }

    return (
    <><NavBar /><div className="App" id ="user-management">
          <table border>
              <tr>
                  <th>Name</th>
                
                  <th>Email</th>
                  <th>Phoneno</th>
                  
              </tr>
              {data.map((val, key) => {
                  return (
                    <>
                      <tr key={key}>
                          <td>{val.username}</td>
                          <td>{val.useremail}</td>
                          <td colSpan={2}>{val.userphoneno}</td>

                          <td><button onClick={() => remove(val.useremail)} className='action'>remove</button></td>
                          <td><button className='action' onClick={openModal}>edit</button>

                          </td>
                      </tr>
                      <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <EditUser name={val.username} email={val.useremail} phone={val.userphoneno} />
                    </Modal>
                      </>
                  );
              })}
          </table>
      </div></>
  );
}
  
export default User;