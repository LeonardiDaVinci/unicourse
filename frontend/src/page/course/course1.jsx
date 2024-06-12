import React, { Component, Fragment } from 'react'
import Headerlog from "../../component/headerlog";
import Footerlog from "../../component/footerlog";
import CourseSideDetail from "../../component/sidebar/course-detail";

const Course1 = ({name, tags}) => {
  return (
    <Fragment>
      <Headerlog />
        <div className="course-single-section padding-tb section-bg">
            <div className="container">
              <br />
              <br />
              <h1>Create The Strongest Web Like Jujutsu</h1>
              <h5>By Richard</h5>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="main-part">
                            <div className="course-item">
                                <div className="course-inner">
                                    <div className="course-content">
                                        <h3>What Will I Learn?</h3>
                                        <ul className="lab-ul">
                                            <li><i className="icofont-tick-mark"></i>Build 10 front-end and back-end projets for your portfolio, ready to apply for your junior developer jobs or freelance or build startup.</li>
                                            <li><i className="icofont-tick-mark"></i>You will be able to build THE STRONGEST website you want.</li>
                                            <li><i className="icofont-tick-mark"></i>Master front end development with MERN.</li>
                                            <li><i className="icofont-tick-mark"></i>Learn professional developer best practices.</li>
                                            <li><i className="icofont-tick-mark"></i>Animations with CSS & JavaScript plus HTML5 Canvas, Speech API, and Audio Video.</li>
                                            <li><i className="icofont-tick-mark"></i>Beginner friendly.</li>
                                        </ul>

                                        <h4>Overview</h4>
                                        <p>I create “Create The Strongest Web Like Satoru” project, inspired by Gojo Satoru’s quote on Jujutsu Kaisen chapter 75, “Throughout heaven and earth, I alone am the honored one.” Hence, right now, it is just that everything feels right. At 75+ hours, this course is without a doubt the strongest comprehensive web development course available online. Unless, Sukuna comes back and says, “Stand proud. You are strong.” Jokes aside, please enjoy this course. You will save yourself over McLaren Senna by enrolling, and constantly updated with new content and modules determined by students - YOU ARE MY SPECIALZ!</p>
                                    </div>
                                </div>
                            </div>

                            <div className="course-video">
                                <div className="course-video-title">
                                    <h4>Course Content</h4>
                                </div>
                                <div className="course-video-content">
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item">
                                            <div className="accordion-header" id="accordion01">
                                                <button className="d-flex flex-wrap justify-content-between" data-bs-toggle="collapse" data-bs-target="#videolist1" aria-expanded="true" aria-controls="videolist1"><span>1. Front-End Web Development</span> <span>5 lessons, 10 hours</span> </button>
                                            </div>
                                            <div className="accordion-collapse show">
                                                <ul className="lab-ul video-item-list">
                                                    <li className=" d-flex flex-wrap justify-content-between">
                                                        <div className="video-item-title">1.1 After Rain - 2 hours</div>
                                                        <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                    </li>
                                                    <li className=" d-flex flex-wrap justify-content-between">
                                                        <div className="video-item-title">1.2 Young Fish and Reverse Punishment - 2 hours</div>
                                                        <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                    </li>
                                                    <li className=" d-flex flex-wrap justify-content-between">
                                                        <div className="video-item-title">1.3 Perfect Preparation - 2 hours</div>
                                                        <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                    </li>
                                                    <li className=" d-flex flex-wrap justify-content-between">
                                                        <div className="video-item-title">1.4 Heading South - 2 hours</div>
                                                        <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                    </li>
                                                    <li className=" d-flex flex-wrap justify-content-between">
                                                        <div className="video-item-title">1.5 Uzuhiko - 2 hours</div>
                                                        <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <div className="accordion-header" id="accordion02">
                                                <button className="d-flex flex-wrap justify-content-between" data-bs-toggle="collapse" data-bs-target="#videolist2" aria-expanded="true" aria-controls="videolist2"> <span>2. Back-End Web Development</span> <span>8 lessons, 20 hours</span> </button>
                                            </div>
                                            <div className="accordion-collapse show">
                                                <ul className="lab-ul video-item-list">
                                                    <li className=" d-flex flex-wrap justify-content-between">
                                                        <div className="video-item-title">2.1 The Whereabouts of the Sun - 3 hours</div>
                                                        <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                    </li>
                                                    <li className=" d-flex flex-wrap justify-content-between">
                                                        <div className="video-item-title">2.2 The Awakening - 3 hours</div>
                                                        <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                    </li>
                                                    <li className=" d-flex flex-wrap justify-content-between">
                                                        <div className="video-item-title">2.3 Ask No Questions - 3 hours</div>
                                                        <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                    </li>
                                                    <li className=" d-flex flex-wrap justify-content-between">
                                                        <div className="video-item-title">2.4 Smaller and More Useful - 3 hours</div>
                                                        <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                    </li>
                                                    <li className=" d-flex flex-wrap justify-content-between">
                                                        <div className="video-item-title">2.5 Countermeasure - 2 hours</div>
                                                        <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                    </li>
                                                    <li className=" d-flex flex-wrap justify-content-between">
                                                        <div className="video-item-title">2.6 Towards the Future - 2 hours</div>
                                                        <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                    </li>
                                                    <li className=" d-flex flex-wrap justify-content-between">
                                                        <div className="video-item-title">2.7 Lack of Ability - 2 hours</div>
                                                        <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                    </li>
                                                    <li className=" d-flex flex-wrap justify-content-between">
                                                        <div className="video-item-title">2.8 Interlude - 2 hours</div>
                                                        <div className="video-item-icon"><a href="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg" className="popup" target="_blank"><i className="icofont-play-alt-2"></i></a></div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  <div className="col-lg-4">
                    <div className="sidebar-part">
                      <CourseSideDetail />
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <Footerlog />
    </Fragment>
  );
}

export default Course1;
