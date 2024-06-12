import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Course from "./CourseModel.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize
const Enroll = db.define('enrollcourses', {
    userId:{
        type: DataTypes.INTEGER,
        references: {
            model: Users,
            key: 'id'
        }
    },
    courseId:{
        type: DataTypes.INTEGER,
        references: {
            model: Course,
            key: 'id'
        }
    }, 
})

Course.hasMany(Enroll, { foreignKey: 'courseId' });
Enroll.belongsTo(Course, { foreignKey: 'courseId' });
Users.hasMany(Enroll, { foreignKey: 'userId' });
Enroll.belongsTo(Users, { foreignKey: 'userId' });

export default Enroll;