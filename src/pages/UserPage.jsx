import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const UserPage = () => {
    const [users,setUsers] = useState([])
    useEffect(()=>{
      axios.get('https://dummyjson.com/users')
          .then(response => {
          setUsers(response.data.users)
        })
          .catch(err =>{console.log(err)})
    },[])


    if (!users){
        return <p>Загрузка</p>
    }
    return (
        <div>
            <h1>USERS</h1>
            <ul>
                {users.map(user => (
                    <li>
                        <Link to={`./${user.id}`}  key={user.id}>
                            {user.firstName} {user.lastName}
                        </Link>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default UserPage;