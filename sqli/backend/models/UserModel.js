import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Users = db.define('users',{
    id:{
        type: DataTypes.DOUBLE,
        primaryKey: true
    },
    username:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default Users;