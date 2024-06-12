import Courses from "../models/CourseModel.js";
import Details from "../models/CourseDetailModel.js";
import Users from "../models/UserModel.js";

export const createCourse = async (req, res) => {
  const { name, teacherId, category, rating, price } = req.body;

  try {
    await Courses.create({
      name: name,
      teacherId: teacherId,
      category: category,
      rating: rating,
      price: price,
    });
  } catch (err) {
    console.log(err);
  }
};

export const createCourseDetail = async (req, res) => {
  const {
    courseId,
    desc,
    duration,
    learning_outcomes,
    modules,
    students,
    language,
  } = req.body;

  try {
    await Details.create({
      courseId: courseId,
      description: desc,
      duration: duration,
      learning_outcomes: learning_outcomes,
      modules: modules,
      students: students,
      language: language,
    });
    res.status(201).json({ message: "Course detail added successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error", error: err });
  }
};

export const viewCourse = async (req, res) => {
  try {
    const courses = await Courses.findAll({
      include: [{ model: Users, as: "teacher", attributes: ["username"] }],
    });
    res.status(200).json(courses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const viewCourseDetail = async (req, res) => {
  const courseId = req.params.courseId;
  try {
    const details = await Details.findOne({
      where: { courseId: courseId },
      include: [
        {
          model: Courses,
          as: "course",
          attributes: ["name", "price"],
        },
      ],
    });
    if (!details) {
      return res.status(404).json({ message: "Course details not found" });
    }
    res.status(200).json(details);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getEnrolledCourses = async (req, res) => {
  const userId = req.query.userId; 

  try {
      const courses = await Enroll.findAll({
          where: { userId: userId },
          include: [{ model: Course, attributes: ['name'] }]
      });

      res.json(courses);
  } catch (error) {
      console.error('Failed to fetch enrolled courses:', error);
      res.status(500).json({ message: 'Failed to fetch enrolled courses', error: error });
  }
};

