import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
// import mysql from "mysql";

import AddUser from "./AddUser";

const UserList = () => {


    // ------------------------------------

    const [users, setUser] = useState([]);
 
    useEffect(() => {
        getUsers();
    }, []);
 
    const getUsers = async () => {
        const response = await axios.get('http://localhost:5000/users');
        setUser(response.data);
    }
 
    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:5000/users/${id}`);
        // window.location.reload();
        getUsers();
    }
 
    return (
        <div>
            <AddUser></AddUser>

            <br></br>
            <br></br>

            <Link to="users/add" className="button is-primary mt-2">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { users.map((user, index) => (
                        <tr key={ user.id }>
                            <td>{ index + 1 }</td>
                            <td>{ user.username }</td>
                            <td>{ user.password }</td>
                            <td>
                                {/* <Link to={`users/edit/${user.id}`} className="button is-small is-info">Edit</Link> */}
                                <button onClick={ () => deleteUser(user.id) } className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}
 
export default UserList;