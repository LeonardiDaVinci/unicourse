import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import User from "./UserModel.js";

const { DataTypes } = Sequelize;

const Course = db.define('courses', {
    name:{
        type: DataTypes.STRING,
    },
    teacherId:{
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
    },
    category:{
        type: DataTypes.STRING,
    },
    rating:{
        type: DataTypes.FLOAT,
    },
    price:{
        type: DataTypes.INTEGER,
    },
}, {
    freezeTableName: true
});

Course.belongsTo(User, { foreignKey: 'teacherId', as: 'teacher' });

export default Course;
