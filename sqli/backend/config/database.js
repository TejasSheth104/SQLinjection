import { Sequelize } from "sequelize";

const db = new Sequelize('sqli_app', 'root', 'Abcd@1234', {
    host: "localhost",
    dialect: "mysql"
});

export default db;