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

const title = "My Cart";

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
]


const Cartitem = () => {

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
                    <br />
                    <h4>Total:</h4>
                    <h3>Rp3.333.000</h3>
                    <div className="course-enroll">
                        <Link to="/mylearning" className="lab-btn"><span>Checkout</span></Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
 
export default Cartitem;

