import { Link } from "react-router-dom";
import Image1 from "../assets/images/category/01.jpg";
import Image2 from "../assets/images/category/02.jpg";
import Image3 from "../assets/images/category/03.jpg";
import Image4 from "../assets/images/category/04.jpg";
import Image5 from "../assets/images/category/05.jpg";
import Image6 from "../assets/images/category/06.jpg";

const subTitle = "Choose Any One Course";
const title = "Learn Everything with Professor";
const btnText = "Get Started Now";

const categoryList = [
    {
        imgUrl: Image1,
        imgAlt: 'category image for Software',
        iconName: 'icofont-brand-windows',
        title: 'Software',
    },
    {
        imgUrl: Image2,
        imgAlt: 'category image for Design & Art',
        iconName: 'icofont-brand-windows',
        title: 'Design & Art',
    },
    {
        imgUrl: Image3,
        imgAlt: 'category image for Photography',
        iconName: 'icofont-brand-windows',
        title: 'Photography',
    },
    {
        imgUrl: Image4,
        imgAlt: 'category image for Language',
        iconName: 'icofont-brand-windows',
        title: 'Language',
    },
    {
        imgUrl: Image5,
        imgAlt: 'category image for Marketing',
        iconName: 'icofont-brand-windows',
        title: 'Marketing',
    },
    {
        imgUrl: Image6,
        imgAlt: 'category image for Music',
        iconName: 'icofont-brand-windows',
        title: 'Music',
    },
]

const Category = () => {
    return (
        <div className="category-section style-4 padding-tb">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle" style={{ "color":"#55ACEE" }}>{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1">
                        {categoryList.map((category, index) => (
                            <div className="col" key={index}>
                                <div className="category-item">
                                    <div className="category-inner">
                                        <div className="category-thumb">
                                            <img src={category.imgUrl} alt={category.imgAlt} />
                                        </div>
                                        <div className="category-content">
                                            <div className="cate-icon">
                                                <i className={category.iconName}></i>
                                            </div>
                                            <Link to="/course"><h6 className="test">{category.title}</h6></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-5">
                        <Link to="/course" style={{ "border": "#55ACEE solid"}} className="lab-btn"><span>{btnText}</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;