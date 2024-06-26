import { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./rating";
import Image16 from "../assets/images/course/16.jpg";
import Image17 from "../assets/images/course/17.jpg";
import Image18 from "../assets/images/course/18.jpg";
import Image19 from "../assets/images/course/19.jpg";
import Image20 from "../assets/images/course/20.jpg";
import Image21 from "../assets/images/course/21.jpg";
import Image22 from "../assets/images/course/22.jpg";
import Image23 from "../assets/images/course/23.jpg";
import Author1 from "../assets/images/course/author/01.jpg";
import Author2 from "../assets/images/course/author/02.jpg";
import Author3 from "../assets/images/course/author/03.jpg";
import Author4 from "../assets/images/course/author/04.jpg";
import Author5 from "../assets/images/course/author/05.jpg";
import Author6 from "../assets/images/course/author/06.jpg";

const title = "Recommended Courses";

const CourseData = [
    {
        imgUrl: Image18,
        imgAlt: 'course webdev',
        cate: 'Web Development',
        title: 'Create The Strongest Web Like Jujutsu',
        author: Author1,
        authorName: 'Richard',
        price: 'Rp3.333.000',
        id: 1,
    },
    {
        imgUrl: Image17,
        imgAlt: 'course webdev',
        cate: 'Web Development',
        title: 'Tips and Trick to Make Smooth Websites',
        author: Author2,
        authorName: 'Jess',
        price: 'Rp2.222.000',
        id: 2,
    },
    {
        imgUrl: Image16,
        imgAlt: 'course dummy',
        cate: 'Design',
        title: 'Logo Design in Adobe Illustrator',
        author: Author3,
        authorName: 'Sajahan Sagor',
        price: 'Rp2.999.000',
        id: 3,
    },
    {
        imgUrl: Image19,
        imgAlt: 'course dummy',
        cate: 'Photography',
        title: 'Digital Photography for Beginner',
        author: Author4,
        authorName: 'Ummi Nishat',
        price: 'Rp2.999.000',
        id: 4,
    },
    {
        imgUrl: Image20,
        imgAlt: 'course dummy',
        cate: 'Marketing',
        title: 'Advance Social Media Marketing',
        author: Author5,
        authorName: 'Rassel Hossin',
        price: 'Rp2.999.000',
        id: 5,
    },
    {
        imgUrl: Image21,
        imgAlt: 'course dummy',
        cate: 'Music',
        title: 'A Guidelines Complete Guitar System',
        author: Author6,
        authorName: 'Zinat Zaara',
        price: 'Rp2.999.000',
        id: 6,
    },
    {
        imgUrl: Image22,
        imgAlt: 'course dummy',
        cate: 'Design',
        title: 'Learn Piano Guidelines System A to Z',
        author: Author1,
        authorName: 'Richard',
        price: 'Rp2.999.000',
        id: 7,
    },
    {
        imgUrl: Image23,
        imgAlt: 'course dummy',
        cate: 'Software',
        title: 'Advance Professional Graphic Design',
        author: Author3,
        authorName: 'Sajahan Sagor',
        price: 'Rp2.999.000',
        id: 8,
    },
]


const Course = () => {

    const [items, setItems] = useState(CourseData);
    const filterItem = (categItem) => {
        const updateItems = CourseData.filter((curElem) => {
            return curElem.cate === categItem;
        });
        setItems(updateItems);
    }

    return (
        <div className="course-section style-3 padding-tb">
            <div className="container">
                <div className="section-header">
                    <h2 className="title">{title}</h2>
                    <div className="course-filter-group">
                        <ul className="lab-ul">
                            <li onClick={() => setItems(CourseData) }>All</li>
                            <li onClick={() => filterItem('English') }>English</li>
                            <li onClick={() => filterItem('Software') }>Software</li>
                            <li onClick={() => filterItem('Design') }>Design</li>
                            <li onClick={() => filterItem('Photography') }>Photography</li>
                            <li onClick={() => filterItem('Music') }>Music</li>
                            <li onClick={() => filterItem('Marketing') }>Marketing</li>
                        </ul>
                    </div>
                </div>
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter">
                        { items.map((elem) => {
                            const { id, imgUrl, imgAlt, cate, title, author, authorName, price } = elem;
                            return (
                                <div className="col" key={id}>
                                    <div className="course-item style-4">
                                        <div className="course-inner">
                                            <div className="course-thumb">
                                                <img src={imgUrl} alt={imgAlt} />
                                                <div className="course-category" style={{ "background": "#55ACEE" }}>
                                                    <div className="course-cate">
                                                        <a href="#">{cate}</a>
                                                    </div>
                                                    <div className="course-reiew">
                                                        <Rating />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="course-content">
                                                <Link to="/course1"><h5>{title}</h5></Link>
                                                <div className="course-footer">
                                                    <div className="course-author">
                                                        <img src={author} alt={imgAlt} />
                                                        <Link to="/team-single" className="ca-name">{authorName}</Link>
                                                    </div>
                                                    <div className="course-price">{price}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Course;

