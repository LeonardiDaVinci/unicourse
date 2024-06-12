
import { Link } from "react-router-dom";

const price = "89";
const excenge = "Limited time offer";
const paymentTitle = "Secure Payment:";
const shareTitle = "Share This Course:";
const btnText = "Add to Cart";


const csdcList = [
    {
        iconName: 'icofont-ui-alarm',
        leftText: 'Course level',
        rightText: 'Beginner',
    },
    {
        iconName: 'icofont-book-alt',
        leftText: 'Course Duration',
        rightText: '4 weeks',
    },
    {
        iconName: 'icofont-signal',
        leftText: 'Online Class',
        rightText: '5',
    },
    {
        iconName: 'icofont-video-alt',
        leftText: 'Lessions',
        rightText: '13x',
    },
    {
        iconName: 'icofont-abacus-alt',
        leftText: 'Quizzes',
        rightText: '2',
    },
    {
        iconName: 'icofont-hour-glass',
        leftText: 'Pass parcentages',
        rightText: '100',
    },
    {
        iconName: 'icofont-certificate',
        leftText: 'Certificate',
        rightText: 'Yes',
    },
    {
        iconName: 'icofont-globe',
        leftText: 'Language',
        rightText: 'English',
    },
]

const socialList = [
    {
        siteLink: '#',
        iconName: 'icofont-instagram',
        className: 'instagram',
    },
    {
        siteLink: '#',
        iconName: 'icofont-twitter',
        className: 'instagram',
    },
    {
        siteLink: '#',
        iconName: 'icofont-linkedin',
        className: 'instagram',
    },
]

const CourseSideDetail = () => {
    return (
        <div className="course-side-detail">
            <div className="csd-content">
                <div className="csdc-lists">
                    <ul className="lab-ul">
                        {csdcList.map((val, i) => (
                            <li key={i}>
                                <div className="csdc-left"><i className={val.iconName}></i>{val.leftText}</div>
                                <div className="csdc-right">{val.rightText}</div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="sidebar-payment">
                    <div className="sp-title">
                        <h6>{paymentTitle}</h6>
                    </div>
                    <div className="sp-thumb">
                        <h6>VISA / MASTERCARD</h6>
                    </div>
                </div>
                <div className="sidebar-social">
                    <div className="ss-title">
                        <h6>{shareTitle}</h6>
                    </div>
                    <div className="ss-content">
                        <ul className="lab-ul">
                            {socialList.map((val, i) => (
                                <li key={i}><a href={val.siteLink} className={val.className}><i className={val.iconName}></i></a></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="course-enroll">
                    <Link to="/cart" className="lab-btn"><span>{btnText}</span></Link>
                </div>
            </div>
        </div>
    );
}
 
export default CourseSideDetail;