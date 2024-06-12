import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Course from "./CourseModel.js";

const { DataTypes } = Sequelize
const Details = db.define('coursedetails', {
    courseId: {
        type: DataTypes.INTEGER,
        references: {
            model: Course,
            key: 'id'
        }
    },
    description:{
        type: DataTypes.TEXT
    },
    duration:{
        type: DataTypes.INTEGER
    },
    learning_outcomes:{
        type: DataTypes.STRING
    },
    modules:{
        type: DataTypes.INTEGER
    },
    students:{
        type: DataTypes.INTEGER
    },
    language:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
})

Details.belongsTo(Course, { foreignKey: 'courseId', as: 'course' });

export default Details;