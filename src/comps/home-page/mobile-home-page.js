import React, { useEffect, useState } from 'react'
import './home-page.css'
import airport from '../../mobile-img/airport-mobile.png'
import logo from '../../mobile-img/logo-mobile.png'
import nav from '../../mobile-img/nav.png'
import speaker from '../../mobile-img/mobile-speaker.png'
import room1 from '../../mobile-img/mobile-room-1.png'
import room2 from '../../mobile-img/room-2.png'
import room3 from '../../mobile-img/room-3.png'
import boy from '../../mobile-img/mobile-boy.png'
import phoneIcon from '../../img/icon-phone.png'
import mailIcon from '../../img/icon-mail.png'
import locationIcon from '../../img/icon-location.png'
import arrow from '../../img/Mask Group 74.png'
import mongo from '../../img/mongo.png'
import express from '../../img/express.png'
import react from '../../img/react.png'
import node from '../../img/node.png'
import musical from '../../mobile-img/musical.png'
import Menu from '../../comps/home-page/menu'
import cloud1 from '../../mobile-img/Mask Group 9.png'
import cloud2 from '../../mobile-img/Mask Group 11.png'
import cloud3 from '../../mobile-img/Mask Group 11.png'
import { ListGroup } from 'react-bootstrap'
import { Modal, Button, Form } from "react-bootstrap";
import magnifier1 from '../../img/magnifier_1.png'
import paperPlane2 from '../../img/paper_plane_2.png'
import timer2 from '../../img/timer_2.png'
import phone from '../../mobile-img/phone-img.png'
import knowMeLogo from '../../img/know-me-logo.png'
import logoMenue from '../../mobile-img/logo-menue.png'
import arrow2 from '../../img/Mask Group 74.png';
import circleCard from '../../img/Mask Group 75.png'
import computerCard from '../../img/computer_2.png'
import chartCard from '../../img/chart_2.png'
import lockCard from '../../img/lock_1.png'
import JSIcon from '../../img/JSIcon.png'
import reactIcon from '../../img/reactIcon.png'
import mongodbIcon from '../../img/mongodbIcon.png'
import expressIcon from '../../img/expressIcon.png'
import nodeIcon from '../../img/nodeIcon.png'
import angularIcon from '../../img/angularIcon.png'
import jqueryIcon from '../../img/jqueryIcon.png'
import sqlIcon from '../../img/sqlIcon.png'
import callPhone from '../../mobile-img/call-btn.png'
import Carousel from 'react-elastic-carousel';
import knowMe from '../../mobile-img/know-me-mobile.png'
import box from '../../mobile-img/box-coputer-mobile.png'
import funnel from '../../mobile-img/funnel-computer-mobile.png'
import hub from '../../mobile-img/hub-computer-mobile.png'
import time from '../../mobile-img/time-computer-mobile.png'
import boxLogo from '../../img/box-logo (1).png'
import hubLogo from '../../img/hub-logo.png'
import leaderFunnelLogo from '../../img/funnel-logo.png'
import timeLogo from '../../img/time-logo.png'
import $ from "jquery";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


export default function HomePageMobile() {

    const func = () => {
        $(document).ready(function () {
            $(".popup-content ").hide();
        });
    }

    const show_ = false;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="d-block d-sm-none">
            <div className="container-fluid mobile-part-1">
                <div className="row">
                    {/* <Modal className="offset-3 col-9 " show={show} onHide={handleClose}>
                        <div className="menue col-9 pt-4 d-block d-sm-none">
                            <ul className=" container-fluid mt-5">
                                <img src={logoMenue} className="ml-5"></img>
                                <a href="#agile"><li className="row justify-content-center mt-4 ">AGILE שיטת</li></a>
                                <a href="#tecnologic"> <li className="row justify-content-center mt-4 ">טכנולוגיות</li></a>
                                <a href="#solution"><li className="row justify-content-center mt-4 ">פתרונות</li></a>
                                <a href="#projects"><li className="row justify-content-center mt-4 ">פרוייקטים</li></a>
                                <a href="#servies"><li className="row justify-content-center mt-4 ">שירות לקוחות</li></a>
                            </ul>
                        </div>
                    </Modal> */}
                </div>
                <nav className="navbar row justify-content-between ">
                    <img className="ml-2" src={logo} ></img>
                    <Popup trigger={<button className="btn-nav" >
                        <img className="nav" src={nav}></img>
                    </button>} position="left top">
                        <div className="menue w-100 d-block d-sm-none">
                            <ul className=" container-fluid ">
                                <img src={logoMenue} className="col-10 offset-1 col align-self-center pt-5 mt-5 mb-5"></img>
                                <a href="#agil" onClick={func}> <li className="row justify-content-end mr-5 mt-5 ">AGILE שיטת</li></a>
                                <a href="#tecnologic" onClick={func}><li className="row justify-content-end mr-5 mt-4 pt-3">טכנולוגיות</li></a>
                                <a href="#solutions" onClick={func}> <li className="row justify-content-end mr-5 mt-4 pt-3">פתרונות</li></a>
                                <a href="#projectss" onClick={func}> <li className="row justify-content-end mr-5 mt-4 pt-3">פרוייקטים</li></a>
                                <a href="#servies" onClick={func}> <li className="row justify-content-end mr-5 mt-4 pb-5 pt-3">שירות לקוחות</li></a>

                            </ul>
                        </div>
                    </Popup>
                </nav>
                <div className=" row justify-content-center mt-3" >
                    <h2 className="title col-9 px-1">-ברוכים הבאים ל Startup plan</h2>
                    <h2 className="title h2 col-12">תוכנית הזנק למיזמי אינטרנט וסטארטאפים</h2>
                    <div className="airport col-12 mt-4">
                        <div className="airport-animate"> <img src={airport} ></img></div>
                    </div>
                    <p className="text col-9 my-3 mb-5 px-2">
                        אנחנו מתמחים בפיתוח תוכנה, אפליקציות, ומערכות web מורכבות ,השיטה שלנו מאפשרת לחסוך של עד 50% מהוצאות הפיתוח ,אנחנו מעדיפים מערכות יחסים מוצלחות מאשר חוזים מורכבים ומאפשרים תחילת עבודה ללא עלות וללא התחייבות מצדכם    </p>
                    <a href="tel:+0548407163"> <img className="call-icon" src={callPhone}></img></a>
                </div>
            </div>
            <div className="container-fluid mobile-part-2" id="agil">
                <div className=" row justify-content-center row align-items-center">
                    <h2 className="agile mt-5 col-12">מה מניע אותנו</h2>
                    <div className="mt-5 mb-3 col-12">
                        <img src={magnifier1} ></img>
                    </div>
                    <div className="col-10 agiles">
                        <h2>מתיעלים בזמן אמת</h2>
                        <p>גילוי מוקדם של בעיות מאפשר לטפל בהם במהירות. בכל שבוע הצוות מתכנס,
                            בוחן את הפעילות ומחפש דרכים לייעל את הפיתוח ולפתור את התקלות.</p>
                    </div>
                    <div className="mt-5 col-12 ">
                        <img src={timer2} ></img>
                    </div>
                    <div className=" col-10 agiles">
                        <h2>מתקדמים במהירות</h2>
                        <p>לעומת זאת, תוכנה עובדת [working software] היא יחידת המידה האמיתית והמוחלטת להתקדמות אמיתית בפיתוח.
                            המטרה העליונה שלנו היא לספק תוכנה מוכחת, בעלת ערך ללקוח, תוך פרקי זמן קצרים, מבלי לחכות חודשים ארוכים להשלמת הפיתוח.</p>
                    </div>
                    <div className="mt-5 col-12">
                        <img src={paperPlane2} ></img>
                    </div>
                    <div className=" col-10 mb-5 agiles">
                        <h2>מטפחים אנשים</h2>
                        <p>במקום להתעכב עם לקוחות במשא ומתן,
                             נעדיף להעמיק את שיתוף הפעולה וללמוד תוך כדי תנועה. כך גם הצוותים שלנו עובדים במקביל ובדו שיח על בסיס יומיומי. הסנכרון של צוותים בעלי יכולות מגוונות מאפשר לנו למנוע פקקים והתעכבויות ולפתח באופן עצמאי וללא תלות חיצונית, כל יכולת מקצה לקצה.</p>
                    </div>

                    <div className="row justify-content-center part-2-a mt-5">
                        <div className="col-10 mb-5 mt-3">
                            <img src={room1}></img>
                        </div>
                        <div className="col-9 pr-0 col align-self-center">
                            <h2>מסמנים מטרה</h2>
                            {/* <div className="border my-3 offset-9 w-25 "></div> */}
                            <h4 className="mt-2">עיצוב • תכנון • אפיון</h4>
                        </div>
                        <h3 className="mr-5 col-1 col align-self-center">1</h3>
                        <p className="col-10 pb-5">מלקוחות שלא עברו תהליך אפיון מעמיק עלולים לסיים תהליכי פיתוח עם טעם חמוץ בפה. המתכנתים ואנשי המקצוע לא יצליחו לעשות את העבודה אם הצרכים שלכם לא הובנו במלואם. כדי לספק לכם את הפתרונות המושלמים,
                         אנחנו צריכים להבין את הצרכים והבעיות, הרצונות והדרישות שלכם בצורה הכי מדויקת, בהתאם לכך נתכנן את העבודה ונעצב את חווית המשתמש [UX] ואת הממשק התומך [UI] בהתאם.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="mobile-part-3 row justify-content-center">
                    <div className="col-10 mt-5">
                        <img src={room2}></img>
                    </div>
                    <div className="col-9 pr-0 col align-self-center">
                        <h2>מנועים בכל הכח </h2>
                        {/* <div className="border my-3 offset-9 w-25 "></div> */}
                        <h4 className="mt-2">QA • פיתוח • דיבאגינג</h4>
                    </div>
                    <h3 className="mr-5 col-1 col align-self-center">2</h3>
                    <p className="col-11 pb-5">בהתאם לשיטת העבודה האיג’איילית שלנו, תהליכי הפיתוח שלנו במקביל - ניפוי ותיקון שגיאות [Debugging] ותהליכי בקרת איכות מחמירים [Quality Assurance].
                            בספרינט הזה אנחנו מאתרים כשלים ותקלות שעלולים לפגוע בחווית השימוש ובשביעות הרצון של המשתמשים. אנחנו מפתחים ובה בעת מוודאים שהמוצר יגיע אליכם כשהו עובד וללא כל תקלה.</p>


                </div>
                <div className="mobile-part-4 row justify-content-center">
                    <div className="col-10 mt-5">
                        <img src={room3}></img>
                    </div>
                    <div className="col-9 pr-0 col align-self-center">
                        <h2> להדק חגורות אנחנו ממריאים</h2>
                        {/* <div className="border my-3 offset-9 w-25 "></div> */}
                    </div>
                    <h3 className="mr-5 col-1 col align-self-center">3</h3>
                    <h4 className="mt-1 col-11">עליה לאויר•QA•רספונסביות</h4>

                    <p className="col-11 mb-0">בהתאם לשיטת העבודה האיג’איילית שלנו, תהליכי הפיתוח שלנו במקביל - ניפוי ותיקון שגיאות [Debugging] ותהליכי בקרת איכות מחמירים [Quality Assurance].
                            בספרינט הזה אנחנו מאתרים כשלים ותקלות שעלולים לפגוע בחווית השימוש ובשביעות הרצון של המשתמשים. אנחנו מפתחים ובה בעת מוודאים שהמוצר יגיע אליכם כשהו עובד וללא כל תקלה.</p>
                    <div className="container-fluid" >
                        <div className="row justify-content-center mt-5 ml-4 arrow" id="solutions">
                            <img src={arrow2}></img>
                        </div>
                        <div className="row justify-content-center" >
                            <div className="steps-mobile">
                                <h1 className="tecnolgic col-12 mb-2">פתרונות</h1>
                                <div className=" border_ mt-3 col-6 offset-3 mb-3" ></div>
                            </div>
                        </div>
                        <div className="card-flip">
                            <div className="row justify-content-center mt-5 ">

                                <div className="card-list-paper col-5">
                                    <div className="card-flip">
                                        <div className="card-front">
                                            <img class=" mt-2" src={circleCard} alt="Card image cap"></img>
                                            <p class="card-title-paper mt-3 ">שרתים ואחסון מידע</p>
                                            {/* <button href="#" className="read-more mr-4 mt-0 mb-3 px-3 w-50">קרא עוד</button> */}
                                        </div>
                                        <div className="card-back ">
                                            <p>
                                                Lorem ipsum dolor sit amet elit. Maecenas
                                                odio, sit amet malesuada massa semper at.
                                         </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-list-paper ml-2 col-5">
                                    <div className="card-flip">
                                        <div className="card-front">
                                            <img class=" mt-2" src={lockCard} alt="Card image cap"></img>
                                            <p class="card-title-paper mt-3 ">סייבר</p>
                                            {/* <button href="#" className="read-more mr-4 mt-0 mb-3 px-3 w-50">קרא עוד</button> */}
                                        </div>
                                        <div className="card-back ">
                                            <p>
                                                Lorem ipsum dolor sit amet elit. Maecenas
                                                odio, sit amet malesuada massa semper at.
                                         </p>
                                        </div>
                                    </div>
                                    {/* <img className=" mt-2" src={lockCard} alt="Card image cap"></img>
                                    <div class="">
                                        <p class="card-title-paper mt-3">סייבר</p> */}
                                    {/* <button href="#" className="read-more mr-4 mt-0 px-3  mb-3 w-50">קרא עוד</button> */}
                                    {/* </div> */}
                                </div>
                            </div>
                            <div className="row  justify-content-center mt-3 mb-5">
                                <div className="card-list-paper col-5 ">
                                    <div className="card-flip">
                                        <div className="card-front">
                                            <img class=" mt-2" src={computerCard} alt="Card image cap"></img>
                                            <p class="card-title-paper mt-3 ">פיתוח</p>
                                            {/* <button href="#" className="read-more mr-4 mt-0 mb-3 px-3 w-50">קרא עוד</button> */}
                                        </div>
                                        <div className="card-back ">
                                            <p>
                                                Lorem ipsum dolor sit amet elit. Maecenas
                                                odio, sit amet malesuada massa semper at.
                                         </p>
                                        </div>
                                    </div>
                                    {/* <img class=" mt-2" src={computerCard} alt="Card image cap"></img>
                                    <div class="">
                                        <p class="card-title-paper mt-3">פיתוח</p> */}
                                    {/* <button href="#" className="read-more mr-4 mt-0 px-3 mb-3  w-50">קרא עוד</button> */}
                                    {/* </div> */}
                                </div>
                                <div className="card-list-paper ml-2 col-5">
                                    <div className="card-flip">
                                        <div className="card-front">
                                            <img class=" mt-2" src={chartCard} alt="Card image cap"></img>
                                            <p class="card-title-paper mt-3 ">CX</p>
                                            {/* <button href="#" className="read-more mr-4 mt-0 mb-3 px-3 w-50">קרא עוד</button> */}
                                        </div>
                                        <div className="card-back ">
                                            <p>
                                                Lorem ipsum dolor sit amet elit. Maecenas
                                                odio, sit amet malesuada massa semper at.
                                         </p>
                                        </div>
                                    </div>
                                    {/* <img class=" mt-2" src={chartCard} alt="Card image cap"></img>
                                    <div class=" ">
                                        <p class="card-title-paper mt-3">CX</p> */}
                                    {/* <button href="#" className="read-more mr-4 mt-0 px-3 mb-3  w-50">קרא עוד</button> */}
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section id=""></section>
            <div className="container-fluid pt-5" id="tecnologic">
                <div className="row justify-content-center mb-5">
                    <h1 className="mt-5 col-10 tecnolgic">טכנולוגיות</h1>
                    <div className=" border_ w-25 mt-3  mb-3" ></div>
                </div>
                {/* <h1 className="tecnolgic mt-5">טכנולוגיות</h1> */}
                <div className="row justify-content-center mt-4">
                    <img className="lan-icon" src={expressIcon}></img>
                    <img className="lan-icon" src={reactIcon}></img>
                    <img className="lan-icon" src={nodeIcon}></img>
                </div>
                <div className="row justify-content-center mt-5">
                    <img className="lan-icon" src={angularIcon}></img>
                    <img className="lan-icon" src={jqueryIcon}></img>
                    <img className="lan-icon" src={JSIcon}></img>
                </div>
                <div className="row justify-content-center mt-5">
                    <img className="lan-icon" src={mongodbIcon}></img>
                    <img className="lan-icon" src={sqlIcon}></img>
                </div>
            </div>


            <div className="row justify-content-center mt-5 mb-5">
                <h1 className="tecnolgic col-10 mt-3">עולמות התוכן שלנו</h1>
                <div className=" border_ w-25 mt-3  mb-3" ></div>
            </div>
            <div className="row justify-content-center mt-5 mb-5">
                <div className="col-5  peper-card pb-2  mt-3 ">
                    <h2 className="mt-2">AI</h2>
                    <p>Artificial Intelligence</p>
                </div>
                <div className="col-5 ml-2 peper-card mt-3 pb-2 px-3">
                    <h2 className="mt-2">BI</h2>
                    <p>Business Intelligence</p>
                </div>
                <div className="col-5  peper-card  mt-3">
                    <h2 className="mt-2">UX/UI</h2>
                    <p>User Experience / User Interface</p>
                </div>
                <div className="col-5 ml-2 peper-card mt-3">
                    <h2 className="mt-2">W&M</h2>
                    <p>Web & Mobile</p>
                </div>
                <div className="col-5 peper-card mt-3">
                    <h2 className="mt-2">LG</h2>
                    <p>Lead Generation</p>
                </div>
                <div className="col-5 ml-2 peper-card  mt-3">
                    <h2 className="mt-2">CMS</h2>
                    <p>custom management system</p>
                </div>
            </div>
            <div className="row justify-content-center mt-5 mb-5" id="projectss">
                <h1 className="mt-5 col-10 tecnolgic">פרויקטים חמים מהתנור </h1>
                <div className=" border_ w-25 mt-3  mb-3" ></div>
            </div>
            <Carousel  >
                <div className=" container">
                    <div className="row justify-content-center  ">
                        <img src={knowMe}></img>
                        <div className="project-logo-and-text">
                            <img src={knowMeLogo}></img>
                            <h5 className="p-mobile ">לוג עסקי המנהל את כלל הפניות וההתראות<br></br> מכל ערוצי השיווק -</h5>
                        </div>
                    </div>
                </div>
                <div className=" container">
                    <div className="row justify-content-center   ">
                        <img src={box}></img>
                        <div className="project-logo-and-text">
                            <img src={boxLogo}></img>
                            <h5 className="p-mobile ">לוג עסקי המנהל את כלל הפניות וההתראות<br></br> מכל ערוצי השיווק -</h5>
                        </div>
                    </div>
                </div>
                <div className=" container">
                    <div className="row justify-content-center   ">
                        <img src={hub}></img>
                        <div className="project-logo-and-text">
                            <img src={hubLogo}></img>
                            <h5 className="p-mobile ">לוג עסקי המנהל את כלל הפניות וההתראות<br></br> מכל ערוצי השיווק -</h5>
                        </div>
                    </div>
                </div>
                <div className=" container">
                    <div className="row justify-content-center   ">
                        <img src={funnel}></img>
                        <div className="project-logo-and-text">
                            <img src={leaderFunnelLogo}></img>
                            <h5 className="p-mobile ">לוג עסקי המנהל את כלל הפניות וההתראות<br></br> מכל ערוצי השיווק -</h5>
                        </div>
                    </div>
                </div>
                <div className=" container ">
                    <div className="row justify-content-center   ">
                        <img src={time}></img>
                        <div className="project-logo-and-text">
                            <img src={timeLogo}></img>
                            <h5 className="p-mobile ">לוג עסקי המנהל את כלל הפניות וההתראות<br></br> מכל ערוצי השיווק -</h5>
                        </div>
                    </div>
                </div>
            </Carousel>

            <div className="container-fluid mobile-part-14" id="servies">
                <div className="row  justify-content-center ">
                    <div className="step-one ">
                        <h1 className="mt-5  ">בואו נדבר</h1>
                        <div className="mt-5" >
                            <label className="col-12 label mt-5" for="full-name">שם מלא</label><br></br>
                            <input className="col-12 mb-3 " type="text" id="full-name" name="fullname"></input><br></br>
                            <label className="col-12 label" for="email">אימייל</label><br></br>
                            <input className="col-12 mb-3" type="text" id="email" name="lastname"></input><br></br>
                            <label className="col-12 label pt-5" for="your-massage">נייד</label><br></br>
                            <input className="col-12" type="text" id="your-massage" name="your-massage"></input><br></br>
                        </div>
                        <button className="appointment px-5 py-2 mt-5"  >שלח</button>
                    </div>

                </div>
                <div className="details mt-5 mb-5">
                    <div className=" ">
                        <p className="" >בר כוכבא 4 בני ברק</p>
                        <img className="" className="" src={locationIcon}></img>
                    </div>
                    <div className="  ">
                        <p className="">03-1234567</p>
                        <img className="" src={phoneIcon}></img>
                    </div>
                    <div className=" mb-5">
                        <p className="">info@leader.codes</p>
                        <img className="" src={mailIcon}></img>
                    </div>
                </div>
            </div>
        </div >
    );
}
