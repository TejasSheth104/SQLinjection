import Users from "../models/UserModel.js";
import db from "../config/database.js";
import mysql from "mysql";
import express from "express";
import {QueryTypes} from "sequelize";


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'databasename'
});  
connection.connect((err) => {
    // if (err){console.log(err)};
  console.log('Connected to MySQL Server!');
});

 
export const getAllUsers = async(req,res)=>{
    try {
        const sql = "SELECT * FROM `users`";
        const users = await db.query(sql, { type: QueryTypes.SELECT });
        res.json(users);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const getUserById = async (req, res) => {
    try {
        const id = req.params.id
        const sql = "SELECT * FROM `users` where id="+id;
        const user = await db.query(sql, { type: QueryTypes.SELECT });
        // res.json(users[0]);
        res.json(user);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const getUserByUsername = async (req, res) => {
    try {
        const username = req.params.username
        const sql = "SELECT * FROM `users` where username='"+username+"'";
        const user = await db.query(sql, { type: QueryTypes.SELECT });
        res.json(user);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createUser = async (req, res) => {
    try {
        const username = req.body.username
        const password = req.body.password
        console.log(username+"  "+password)
        const sql = "insert into users (username,password) values ('"+username+"','"+password+"');";
        const user =! await db.query(sql, { type: QueryTypes.INSERT });
        res.json({
            "message": "User Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateUser = async (req, res) => {
    try {
        await Users.update(req.body, {
            where: {
                id: req.params.id 
            }
        });
        res.json({
            "message": "User Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const sql = "DELETE FROM `users` where id="+id;
        const user =! await db.query(sql, { type: QueryTypes.DELETE });
        res.json({
            "message": "User Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}