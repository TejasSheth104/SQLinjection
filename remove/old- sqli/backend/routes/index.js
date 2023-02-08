import express from "express";
// import mysql from "mysql";
 
import { 
    getAllUsers,
    createUser,
    getUserByUsername,
    getUserById,
    updateUser,
    deleteUser
} from "../controllers/Users.js";
 
const router = express.Router();
// const mysql = require('mysql');

router.get('/', getAllUsers);
router.get('/username/:username', getUserByUsername);
router.get('/:id', getUserById);
router.post('/', createUser);
router.patch('/:useername', updateUser);
router.delete('/:id', deleteUser);

//===========================================

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'user',
//     password: 'password',
//     database: 'databasename'
// });  
// connection.connect((err) => {
//     // if (err){throw err};
//   console.log('Connected to MySQL Server!');
// });
// router.get("/",(req,res) => {
//     connection.query('SELECT * from users', (err, rows) => {
//         // if(err) throw err;
//         console.log('The data from users table are: \n', rows);
//         connection.end();
//     });
// });

 
export default router;