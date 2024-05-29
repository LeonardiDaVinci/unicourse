import { Sequelize } from "sequelize";

const db = new Sequelize('unicourse-database', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;