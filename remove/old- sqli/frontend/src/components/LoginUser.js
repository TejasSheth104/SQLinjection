import { useState } from 'react'
import axios from "axios";
import { useNavigate,Link } from 'react-router-dom';
import AddUser from "./AddUser";

const LoginUser = () => {
    const [user, setUser] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginState, setLoginState] = useState(false);
    const history = useNavigate();


    const login = async (e) => {
        e.preventDefault();
        const response = await axios.get('http://localhost:5000/users/username/'+username);
        setUser(response.data);
        if(user.password === password){
            setLoginState(true)
        }else{
            setLoginState(false)
        }
        history("/");
    }
 
    return (
        <div>
            <h1>ADD USER</h1>
            <AddUser></AddUser>
            <h1>LOGIN</h1>
            <form >
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
                    <button className="button is-primary" onClick={login}>Login</button>
                </div>
            </form>
            <br></br>
            <br></br>
            
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    { user.map((user, index) => (
                        <tr key={ user.id }>
                            <td>{ user.id }</td>
                            <td>{ user.username }</td>
                            <td>{ user.password }</td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </div>
    )
}
 
export default LoginUser;