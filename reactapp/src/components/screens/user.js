import '../styles/user.css'
import NavBar from './Navbar';
const data = [
  { username: "user1", useremail: "user@gmail.com", userphoneno: "698745123" },
  {username: "user1", useremail: "user@gmail.com", userphoneno: "698745123" },
  
  
]
  
function user() {
  return (
    <><NavBar /><div className="App">
          <table >
              <tr >
                  <th>Name</th>
                
                  <th>Email</th>
                  <th>Phoneno</th>
                  
              </tr>
              {data.map((val, key) => {
                  return (

                      <tr key={key}>
                          <td>{val.username}</td>
                          <td>{val.useremail}</td>
                          <td colSpan={2}>{val.userphoneno}</td>

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
  
export default user;