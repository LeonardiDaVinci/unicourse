import { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../../component/footer";
import Header from "../../component/header";
import PageHeader from "../../component/pageheader"
import CourseHeader from "../../component/courseheader";
import Container from "./container";

const Course = () => {
    return (
        <Fragment>
            <Header />
            <PageHeader title={"Course"} curPage={"Course"} />
            <CourseHeader/>
            <Container />
            <Footer />
        </Fragment>
    );
};

export default Course;
