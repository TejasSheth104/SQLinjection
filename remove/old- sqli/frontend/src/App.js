import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import LoginUser from "./components/LoginUser";
  

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          {/* <UserList></UserList> */}
          {/* <LoginUser></LoginUser> */}
          <h1>Working</h1>

          <Routes>
            <Route path="users/" element={<LoginUser/>}>
              
            </Route>
            <Route path="users/add" element={<AddUser/>}>
             
            </Route>
            <Route path="users/edit/:id" element={<EditUser />}>
             
            </Route>
            <Route path="*" element={<LoginUser/>}>
             
            </Route>
              
            
          </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}
 
export default App;