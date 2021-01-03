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
import boxIcon from '../../img/box-icon (2).png'
import boxLogo from '../../mobile-img/box-logo (2).png'
import funnelIcon from '../../mobile-img/funnel-icon (2).png'
import funnelLogo from '../../mobile-img/funnel-logo.png'
import hubLogo from '../../mobile-img/hub-logo.png'
import hubIcon from '../../mobile-img/hub-icon.png'
import timeIcon from '../../mobile-img/time-icon.png'
import timeLogo from '../../mobile-img/time-logo (2).png'
import storiesIcon from '../../mobile-img/stories-icon.png'
import storiesLogo from '../../mobile-img/stories-logo.png'
import quoteIcon from '../../mobile-img/quote-icon.png'
import quoteLogo from '../../mobile-img/quote-logo.png'
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


export default function HomePageMobile() {

    const show_ = false;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="d-block d-sm-none">
            <div className="container-fluid mobile-part-1">
                <div className="row">
                    <Modal className="offset-3 col-9 " show={show} onHide={handleClose}>
                        {/* <Menu></Menu> */}
                        <div className="menue pt-4 d-block d-sm-none">
                            <ul className=" container-fluid mt-5">
                                <img src={logoMenue} className="ml-5"></img>
                                {/* <a href="#agile" onClick={handleClose}> */}
                                <li className="row justify-content-center mt-4 ">AGILE שיטת</li>
                                {/* </a> */}
                                <li className="row justify-content-center mt-4 ">טכנולוגיות</li>
                                <li className="row justify-content-center mt-4 ">פתרונות</li>
                                <li className="row justify-content-center mt-4 ">פרוייקטים</li>
                                <li className="row justify-content-center mt-4 ">שירות לקוחות</li>
                            </ul>
                        </div>

                    </Modal></div>
                <nav className="navbar row justify-content-between ">
                    <img className="col-5" src={logo} ></img>
                    <button className="btn-nav" onClick={handleShow} >
                        <img className="nav" src={nav}></img>
                    </button>
                </nav>

                <div className=" row justify-content-center mt-3" >
                    <div className="col-11">
                        <h2 className="title px-1">חממה טכנולוגית בשיטת agile</h2>
                        <div className="airport offset-3 col-9 mt-4">
                            {/* <img src={cloud2} className=" col-4  cloud2"></img> */}
                            <div className="airport-animate col-4"> <img src={airport} ></img></div>
                            {/* <img src={cloud1} className=" col-4 cloud1"></img> */}

                        </div>
                        <p className="text mt-2 px-2">
                            ברוכים הבאים ל StartUpPlan מקבוצת Leader.Codes אנחנו מתמחים בפיתוח תוכנה, אפליקציות, מערכות CMS,
                            ומערכות CRM. השיטה שלנו מאפשרת לחסוך של עד 50% מהוצאות הפיתוח.
                            </p>
                    </div>
                    <button className="px-3 read-more-about" >קרא עוד אודות השיטה</button>
                    <button className="px-3 appointment  " >קבע פגישת ייעוץ חינם</button>
                </div>
            </div>
            <div className="container-fluid mobile-part-2" id="agile" >
                <div className=" row justify-content-center row align-items-center">

                    <h2 className="agile mt-5 col-12">השיטה שלנו</h2>
                    <div className="mt-5 col-12">
                        <img src={magnifier1} ></img>
                    </div>
                    <div className="col-12 agiles">
                        <h2>מתייעלים בזמן אמת</h2>
                        <p>גילוי מוקדם של בעיות מאפשר לטפל בהם במהירות. בכל שבוע הצוות מתכנס,
                            בוחן את הפעילות ומחפש דרכים לייעל את הפיתוח ולפתור את התקלות.</p>
                    </div>
                    <div className="mt-5 col-12 ">
                        <img src={timer2} ></img>
                    </div>
                    <div className=" col-12 agiles">
                        <h2>מתקדמים במהירות</h2>
                        <p>לעומת זאת, תוכנה עובדת [working software] היא יחידת המידה האמיתית והמוחלטת להתקדמות אמיתית בפיתוח.
                            המטרה העליונה שלנו היא לספק תוכנה מוכחת, בעלת ערך ללקוח, תוך פרקי זמן קצרים, מבלי לחכות חודשים ארוכים להשלמת הפיתוח.</p>
                    </div>
                    <div className="mt-5 col-12">
                        <img src={paperPlane2} ></img>
                    </div>
                    <div className=" col-12 agiles">
                        <h2>מטפחים אנשים</h2>
                        <p>במקום להתעכב עם לקוחות במשא ומתן,
                             נעדיף להעמיק את שיתוף הפעולה וללמוד תוך כדי תנועה. כך גם הצוותים שלנו עובדים במקביל ובדו שיח על בסיס יומיומי. הסנכרון של צוותים בעלי יכולות מגוונות מאפשר לנו למנוע פקקים והתעכבויות ולפתח באופן עצמאי וללא תלות חיצונית, כל יכולת מקצה לקצה.</p>
                    </div>

                    <div className="row justify-content-center part-2-a">
                        <div className="col-10 mt-5">
                            <img src={room1}></img>
                        </div>
                        <div className=" col-10 mt-5 step-one">
                            <h3>ספרינט ראשון</h3>
                            <h2>מסמנים מטרה</h2>
                            <div className="border mt-4 w-25 "></div>
                            <div className="mt-3 h4">
                                <h4>עיצוב</h4>
                                <div className="circle"></div>
                                <h4>תכנון</h4>
                                <div className="circle"></div>
                                <h4>אפיון</h4>
                            </div>
                            <p>מלקוחות שלא עברו תהליך אפיון מעמיק עלולים לסיים תהליכי פיתוח עם טעם חמוץ בפה. המתכנתים ואנשי המקצוע לא יצליחו לעשות את העבודה אם הצרכים שלכם לא הובנו במלואם. כדי לספק לכם את הפתרונות המושלמים,
                         אנחנו צריכים להבין את הצרכים והבעיות, הרצונות והדרישות שלכם בצורה הכי מדויקת, בהתאם לכך נתכנן את העבודה ונעצב את חווית המשתמש [UX] ואת הממשק התומך [UI] בהתאם.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">

                <div className="mobile-part-3 row justify-content-center">
                    <div className="col-10 mt-5">
                        <img src={room2}></img>
                    </div>
                    <div className="step-two col-11 mt-0">
                        <h3>ספרינט שני</h3>
                        <h2>מנועים בכל הכח</h2>
                        <div className="border mt-4 w-25 "></div>
                        <div className="mt-5">
                            <h4>דיבאגינג</h4>
                            <div className="circle"></div>
                            <h4>פיתוח</h4>
                            <div className="circle"></div>
                            <h4>QA</h4>
                        </div>
                        <p>בהתאם לשיטת העבודה האיג’איילית שלנו, תהליכי הפיתוח שלנו במקביל - ניפוי ותיקון שגיאות [Debugging] ותהליכי בקרת איכות מחמירים [Quality Assurance].
                            בספרינט הזה אנחנו מאתרים כשלים ותקלות שעלולים לפגוע בחווית השימוש ובשביעות הרצון של המשתמשים. אנחנו מפתחים ובה בעת מוודאים שהמוצר יגיע אליכם כשהו עובד וללא כל תקלה.</p>

                    </div>
                </div>
                <div className="mobile-part-4 row justify-content-center">
                    <div className="col-10 mt-5">
                        <img src={room3}></img>
                    </div>
                    <div className="step-three col-11 ">
                        <h3> ספרינט שלישי</h3>
                        <h2>,!להדק חגורות <br></br>אנחנו ממריאים</h2>
                        <div className="border mt-4 w-25 "></div>
                        <div className="mt-5 ab">
                            <h4>בדיקות</h4>
                            <div className="circle"></div>
                            {/* <div className="circle"></div> */}
                            <h4>רספונסיביות</h4>
                            {/* <h4>בדיקות אבטחה</h4> */}
                        </div>
                        <div className="ab">
                            <h4>עליה לאויר</h4>
                            <div className="circle"></div>
                            {/* <div className="circle"></div> */}
                            <h4>אבטחה</h4>
                            {/* <h4>בדיקות אבטחה</h4> */}
                        </div>
                        <p className="w-75">המערכות שלכם חייבות להיות גמישות ובטוחות.
                        הן צריכות לתפקד באופן מושלם בכל מצב נתון ולהתאים את עצמן אוטומטית לכל סוגי המחשבים, המסכים ובכל הרזולוציות. כמו כן הן צריכות להיות עמידות של בפני התקפות זדוניות,
                          גנבת מידע וניצול לרעה. אל דאגה, אנחנו דואגים שהכל יהיה מוכן להמראה.</p>

                        {/* <div className="music-p col-7 mt-5">
                        <p className="p-1 ">Lorem ipsum dolor sit ame, consetetur sadipscing</p>
                          </div> */}
                    </div>

                    {/* <div className="col-5 mus offset-4">
                        <img src={musical}></img>
                    </div> */}
                    <div className="container-fluid mt-5">
                        <h1 className="tecnolgic">טכנולוגיות</h1>
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
                    <div className="row justify-content-center ">
                        <div className="col-5 peper-card">
                            <h2 className="mt-2">AI</h2>
                            <p>Artificial Intelligence</p>
                        </div>
                        <div className="col-5 ml-2 peper-card">
                            <h2 className="mt-2">BI</h2>
                            <p>Business Intelligence</p>
                        </div>
                        <div className="col-5 peper-card">
                            <h2 className="mt-2">LG</h2>
                            <p>Lead Generation</p>
                        </div>
                        <div className="col-5 ml-2 peper-card">
                            <h2 className="mt-2">W&M</h2>
                            <p>Web & Mobile</p>
                        </div>
                        <div className="col-5  peper-card">
                            <h2 className="mt-2">UX/UI</h2>
                            <p>User Experience / User Interface</p>
                        </div>
                        <div className="col-5 ml-2 peper-card">
                            <h2 className="mt-2">CMS</h2>
                            <p>custom management system</p>
                        </div>
                    </div>

                    {/* <div className="col-5 mern">m<br></br>e<br></br>r<br></br>n</div>
                    <div className="col-4 languages">
                        <img src={mongo}></img>
                        <label>mongoDB</label>
                        <img src={express}></img>
                        <label>Express</label>
                        <img src={react}></img>
                        <label>React</label>
                        <img src={node}></img>
                        <label>nodeJS</label>
                    </div> */}
                    {/* </div>
                <div className="row justify-content-center mt-5 arrow">
                    <img src={arrow}></img>
                </div>
                <div className="row">
                    <div className="steps-mobile mt-5">
                        <h1 className="col align-self-center">our projects</h1>
                        <p className="p-2 offset-2 col-8">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
                        <div className="offset-5 col-2 border"></div>
                    </div>
                </div>
                <div className="row justify-content-center screen">
                    <div className=" col-12 screen-1 "></div>
                    {/* <div className="line col-6"></div> */}
                    {/* <div className="col-11 my-0">
                        <h1>loremipsum dolor sit amet,consetetur sadipscing</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore</p>
                    </div>
                </div>
                <div className="row justify-content-center screen">
                    <div className=" col-12 screen-2 "></div>
                    <div className="col-11 mt-4">
                        <h1>loremipsum dolor sit amet,consetetur sadipscing</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore</p>
                    </div>
                </div>
                <div className="row justify-content-center screen">
                    <div className=" col-12 screen-4 "></div>
                    <div className="col-11 my-0">
                        <h1>loremipsum dolor sit amet,consetetur sadipscing</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore</p>
                    </div>
                </div>
                <div className="row justify-content-center screen">
                    <div className=" col-12 screen-5"></div>
                    <div className="col-11 my-0">
                        <h1>loremipsum dolor sit amet,consetetur sadipscing</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore</p>
                    </div>
                </div>
                <div className="row justify-content-center screen">
                    <div className=" col-12 screen-6 mt-5"></div>
                    <div className="col-11 mt-5">
                        <h1>loremipsum dolor sit amet,consetetur sadipscing</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore</p>
                    </div>
                </div>
                <div className="row justify-content-center screen">
                    <div className=" col-12 screen-7"></div>
                    <div className="line"></div>
                    <div className="col-11 mt-5">
                        <h1>אינדקס B2B</h1>
                        <p>. הצלחה מסחררת בגדול מתחילה בהצלחה מוכחת בקטן
                            , בחודש הזה אנחנו יוצרים את התבנית. מאפיינים מעצבים ומוכיחים את הקונספט של הפרוטוטייפינג עם .כל הפונקציות של הסטארט-אפ שלכם</p>
                    </div>*/}
                </div>
            </div>
            <div className="container-fluid">
                <div className="row justify-content-center mt-5 ml-4 arrow">
                    <img src={arrow2}></img>
                </div>
                <div className="row justify-content-center">
                    <div className="steps-mobile">
                        <h1 className=" offset-1 col-12 ">פתרונות</h1>
                        <div className=" border_ mt-3 col-6 offset-3 " ></div>
                    </div>
                </div>
                <div className="card-flip">
                    <div className="row  justify-content-center mt-3">
                        <div className="card-list-paper w-50 ">
                            <img class="ml-2 mt-2" src={circleCard} alt="Card image cap"></img>
                            <div class="">
                                <p class="card-title-paper mt-3 ">שרתים ואחסון מידע</p>
                                <button href="#" className="read-more mr-4 mt-0 px-3 w-50">קרא עוד</button>
                            </div>
                        </div>
                    </div>

                    <div className="row  justify-content-center mt-3">
                        <div className="card-list-paper  w-50 ">
                            <img class="ml-5 mt-3" src={lockCard} alt="Card image cap"></img>
                            <div class="">
                                <p class="card-title-paper mt-3">סייבר</p>
                                <button href="#" className="read-more mr-4 mt-0 px-3 w-50">קרא עוד</button>
                            </div>
                        </div>
                    </div>
                    <div className="row  justify-content-center mt-3">
                        <div className="card-list-paper w-50 ">
                            <img class="ml-5 mt-4" src={computerCard} alt="Card image cap"></img>
                            <div class="">
                                <p class="card-title-paper mt-3">פיתוח</p>
                                <button href="#" className="read-more mr-4 mt-0 px-3 w-50">קרא עוד</button>
                            </div>
                        </div>
                    </div>
                    <div className="row  justify-content-center mt-3">
                        <div className="card-list-paper w-50 ">
                            <img class="mr-5 mt-2" src={chartCard} alt="Card image cap"></img>
                            <div class=" ">
                                <p class="card-title-paper ">CX</p>
                                <button href="#" className="read-more mr-4 mt-0 px-3 w-50">קרא עוד</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" container-fluid desk-part-7 box mobile aplicate">
                <h3 className="my-5">פרויקטים חמים מהתנור</h3>
                <div className="row justify-content-center row align-items-center">
                    <img className="col-4 pt-0 mt-4" src={boxIcon}></img>
                </div>
                <div className="row justify-content-center row align-items-center">
                    <h2 className="col-4">Box</h2>
                </div>
                <div className="row justify-content-center row align-items-center">
                    <h1 className="col-8 mt-3">אינדקס B2B</h1>
                    <div className="col-9">
                        <p className="mt-2">לוג עסקי המנהל את כלל הפניות וההתראות מכל ערוצי השיווק - דפי הנחיתה, הטפסים, הצ’אט בוטים ועוד. מאגר ניהול קשרי לקוחות (CRM) חדשני שבו כל פניית לקוח [ליד חדש] מתעדכנת באופן חכם ואוטומטי במערכת,
                        כחלק מקהל הלקוחות, ההולך וגדל. הבוקס שכולל אפשרויות פלטור ומיון משוכללות הוא למעשה כלי תקשורת רב ערוצי לתקשורת פנים ארגונית מושלמת ובהירה. תיבת לידר היא חדר הבקרה למשווק.   </p>
                    </div>
                    <div className=" col-12">
                        <img src={boxLogo}></img>
                    </div>
                </div>
            </div>
            <div className=" container-fluid desk-part-8 funnel mobile aplicate">
                <div className="row justify-content-center row align-items-center">
                    <img className="col-4 pt-0 mt-5" src={funnelIcon}></img>
                </div>
                <div className="row justify-content-center row align-items-center">
                    <h2 className="col-7">Funnel</h2>
                </div>
                <div className="row justify-content-center row align-items-center">
                    <h1 className="col-8 mt-3">אינדקס B2B</h1>
                    <div className="col-9">
                        <p className="mt-2">הצלחה מסחררת בגדול מתחילה בהצלחה מוכחת בקטן.
                        בחודש הזה אנחנו יוצרים את התבנית. מאפיינים, מעצבים ומוכיחים את הקונספט של הפרוטוטייפינג עם כל הפונקציות של הסטארט-אפ שלכם.
                        </p>
                    </div>
                    <div className=" col-12">
                        <img src={funnelLogo}></img>
                    </div>
                </div>
            </div>
            <div className=" container-fluid desk-part-9 hub mobile aplicate">
                <div className="row justify-content-center row align-items-center">
                    <img className="col-4 pt-0 mt-5" src={hubIcon}></img>
                </div>
                <div className="row justify-content-center row align-items-center">
                    <h2 className="col-4">Hub</h2>
                </div>
                <div className="row justify-content-center row align-items-center">
                    <h1 className="col-8 mt-3">אינדקס B2B</h1>
                    <div className="col-9">
                        <p className="mt-2">הצלחה מסחררת בגדול מתחילה בהצלחה מוכחת בקטן.
                        בחודש הזה אנחנו יוצרים את התבנית. מאפיינים, מעצבים ומוכיחים את הקונספט של הפרוטוטייפינג עם כל הפונקציות של הסטארט-אפ שלכם.
                        </p>
                    </div>
                    <div className=" col-12">
                        <img src={hubLogo}></img>
                    </div>
                </div>
            </div>
            <div className=" container-fluid desk-part-10 time mobile aplicate">
                <div className="row justify-content-center row align-items-center">
                    <img className="col-4 pt-0 mt-5" src={timeIcon}></img>
                </div>
                <div className="row justify-content-center row align-items-center">
                    <h2 className="col-5">Time</h2>
                </div>
                <div className="row justify-content-center row align-items-center">
                    <h1 className="col-8 mt-3">אינדקס B2B</h1>
                    <div className="col-9">
                        <p className="mt-2">הפתגם ‘זמן שווה כסף’ הוא טעות. לכסף אין סוף אבל הזמן הוא המשאב המוגבל והיקר של הצוות ושל הפרויקטים. יומן חכם ומרובה אפשרויות. כמו פגישות צוות הכוללות מינוי אחראי ודו”ח מסכם. קביעת אירועים שמייצרת באופן אוטומטי דף נחיתה עם וידאו ואפשרויות מכירת כרטיסים ועוד ועוד. היומן משתלב עם כל שאר המערכות ומאפשר לנהל את הלידים, הצוותים, הפגישות, האירועים והמטרות העיסקיות.
                        </p>
                    </div>
                    <div className=" col-12">
                        <img src={timeLogo}></img>
                    </div>
                </div>
            </div>
            <div className=" container-fluid desk-part-11 stories mobile aplicate">
                <div className="row justify-content-center row align-items-center">
                    <img className="col-4 pt-0 mt-5" src={storiesIcon}></img>
                </div>
                <div className="row justify-content-center row align-items-center">
                    <h2 className="col-7">Stories</h2>
                </div>
                <div className="row justify-content-center row align-items-center">
                    <h1 className="col-8 mt-3">אינדקס B2B</h1>
                    <div className="col-9">
                        <p className="mt-2">
                            הצלחה מסחררת בגדול מתחילה בהצלחה מוכחת בקטן. בחודש הזה אנחנו יוצרים את התבנית. מאפיינים, מעצבים ומוכיחים את הקונספט של הפרוטוטייפינג עם כל הפונקציות של הסטארט-אפ שלכם.                        </p>
                    </div>
                    <div className=" col-12">
                        <img src={storiesLogo}></img>
                    </div>
                </div>
            </div>
            <div className=" container-fluid desk-part-12 quote mobile aplicate">
                <div className="row justify-content-center row align-items-center">
                    <img className="col-4 pt-0 mt-5" src={quoteIcon}></img>
                </div>
                <div className="row justify-content-center row align-items-center">
                    <h2 className="col-7">Quote</h2>
                </div>
                <div className="row justify-content-center row align-items-center">
                    <h1 className="col-8 mt-3">אינדקס B2B</h1>
                    <div className="col-9">
                        <p className="mt-2">
                            הצלחה מסחררת בגדול מתחילה בהצלחה מוכחת בקטן. בחודש הזה אנחנו יוצרים את התבנית. מאפיינים, מעצבים ומוכיחים את הקונספט של הפרוטוטייפינג עם כל הפונקציות של הסטארט-אפ שלכם.                        </p>
                    </div>
                    <div className=" col-12">
                        <img src={quoteLogo}></img>
                    </div>
                </div>
            </div>
            <div className=" container-fluid desk-part-6">
                <div className="row justify-content-center row align-items-center know-me mobile aplicate">
                    <img className="mt-5 col-8" src={knowMeLogo}></img>
                    <h1 className="mt-3">אינדקס B2B</h1>
                    <div className="col-9">
                        <p className="mt-2">. הצלחה מסחררת בגדול מתחילה בהצלחה מוכחת בקטן ,
                        בחודש הזה אנחנו יוצרים את התבנית.
                        מאפיינים מעצבים ומוכיחים את הקונספט של הפרוטוטייפינג עם .כל הפונקציות של הסטארט-אפ שלכם
                        </p>
                    </div>
                    <div className=" col-12">
                        <img src={phone}></img>
                    </div>
                </div>
            </div>
            <div className="container-fluid mobile-part-14">
                <div className="row  justify-content-center ">
                    <div className="step-one ">
                        <h1 className="mt-5  ">בואו נדבר</h1>
                        <div className="" >
                            <label className="col-12  mt-5" for="full-name">שם מלא</label><br></br>
                            <input className="col-12" type="text" id="full-name" name="fullname"></input><br></br>
                            <label className="col-12" for="email">אימייל</label><br></br>
                            <input className=" col-12" type="text" id="email" name="lastname"></input><br></br>
                            <label className="col-12" for="your-massage">ההודעה שלך</label><br></br>
                            <input className="col-12" type="text" id="your-massage" name="your-massage"></input><br></br>
                        </div>
                        <button className="mt-5 col-12  justify-content-center align-items-center call-us"></button>

                    </div>

                </div>
                <div className="details mt-5">
                    <div className="row justify-content-center">
                        <p className="col-6" >בר כוכבא 4 בני ברק</p>
                        <img className="" src={locationIcon}></img>
                    </div>
                    <div className="row justify-content-center">
                        <p className="col-6">03-1234567</p>
                        <img src={phoneIcon}></img>
                    </div>
                    <div className="row justify-content-center">
                        <p className="col-6">info@leader.codes</p>
                        <img src={mailIcon}></img>
                    </div>
                </div>
            </div>
        </div >
    );
}
