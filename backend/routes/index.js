import express from "express";
import { getUsers, register, login, logout } from "../controllers/UserController.js";
import { verifyToken } from "../middlewares/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { viewCourse, createCourse, viewCourseDetail, createCourseDetail, getEnrolledCourses } from "../controllers/CourseController.js"
import { addToCart, viewCart, checkoutCart } from "../controllers/CartController.js";

const router = express.Router();

router.get('/users', verifyToken ,getUsers);
router.post('/register', register);
router.post('/login', login);
router.get('/token', refreshToken);
router.delete('/logout', logout);
router.post('/addcourse', createCourse);
router.get('/courses', viewCourse);
router.post('/addcoursedetail', createCourseDetail);
router.get('/course-details/:courseId', viewCourseDetail);
router.post('/add-to-cart', addToCart);
router.get('/view-cart', viewCart);
router.post('/checkout-cart', checkoutCart);
router.get('/enroll-course', getEnrolledCourses)
export default router;