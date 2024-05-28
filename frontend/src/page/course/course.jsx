import { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../../component/footer";
import Header from "../../component/header";
import PageHeader from "../../component/pageheader";
import Container from "./container";

const Course = () => {
    return (
        <Fragment>
            <Header />
            <PageHeader />
            <Container />
            <Footer />
        </Fragment>
    );
};

export default Course;
