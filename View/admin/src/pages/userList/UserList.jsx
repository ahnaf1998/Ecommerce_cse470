import { Table } from "@material-ui/core";
import Axios from "axios";
import { useEffect, useState } from "react";
import "./userList.css";
export default function UserList() {
  // const [data, setData] = useState(userRows);
  const[userList,setUserList]=useState([]);
  useEffect(()=>{
    Axios.get("http://localhost:5001/api/users").then((response)=>{
      setUserList(response.data);
    })

  },[userList])

  
  
 

  return (
    <>
    <div className="productList">
    <Table>
      <tr style={{fontSize:"2rem"}}>
        <td>ID</td>
        <td>Image</td>
        <td>Username</td>
        <td>Email</td>
        </tr>
      
      {userList.map((items)=>
        <tr>
          <td>{items._id}</td>
          <td><img  className='userListImg'src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif" alt=''/></td>
          <td>{items.username}</td>
          <td>{items.img}</td>
          <td>{items.email}</td>
          

        </tr>
      )}
    </Table>
    </div>
    </>
  );
}
