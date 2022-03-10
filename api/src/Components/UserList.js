import axios from 'axios';
import {useState,useEffect} from 'react';
import User from './User';
const UserList = () => {
     const [users, setUsers] = useState([]);
     useEffect(()=> {
     axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{setUsers(res.data)}).catch((err)=>console.log(err))
     },[]);
    return (
        
    <div className = "usersList"> 
    
        {
            users.map( el => <User  key = {el.id} el={el}/>)
        }

    </div>
           

    )

};

export default UserList;