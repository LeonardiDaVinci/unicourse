import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Course from "./CourseModel.js";

const { DataTypes } = Sequelize;

const Carts = db.define('carts', {
    courseId: {
        type: DataTypes.INTEGER,
        references: {
            model: Course,
            key: 'id'
        }
    },
    name:{
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER,
    },
    totalPrice: {
        type: DataTypes.INTEGER
    }
})

export default Carts;