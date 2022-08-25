import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
 
const EditUser = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();
    const { id } = useParams();
 
    const updateUser = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/users/${id}`,{
            username: username,
            password: password
        });
        history("/");
    }
 
    useEffect(() => {
        getUserById();
    }, []);
 
    const getUserById = async () => {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setUsername(response.data.username);
        setPassword(response.data.password);
    }
 
    return (
        <div>
            <form onSubmit={ updateUser }>
                <div className="field">
                    <label className="label">Username</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Username"
                        value={ username }
                        onChange={ (e) => setUsername(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Password</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Password"
                        value={ password }
                        onChange={ (e) => setPassword(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
    )
}
 
export default EditUser;