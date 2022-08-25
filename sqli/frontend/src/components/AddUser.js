import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
 
const AddUser = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();
 
    const saveUser = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/users',{
            username: username,
            password: password
        });
        history("/");
        window.location.reload();
    }
 
    return (
        <div>
            <form onSubmit={ saveUser }>
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
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddUser;