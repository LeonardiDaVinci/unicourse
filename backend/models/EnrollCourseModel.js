import { Sequelize } from "sequelize";
import db from "../config/Database";
import Course from "./CourseModel";

const { DataTypes } = Sequelize
const EnrollCourse = db.define('enrollcourses', {
    courseId:{
        type: DataTypes.INTEGER,
        references: {
            model: Course,
            key: 'id'
        }
    },
    
})