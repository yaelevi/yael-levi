import React, { Component } from 'react'
import './home-page.css'
import logo from '../../img/logo.png'
import airport from '../../img/rocket(2).png'
import room2 from '../../img/room-part-2.png'
import room3 from '../../img/room-part-3.png'
import room4 from '../../img/room-part-4.png'
import speaker from '../../img/speaker.png'
import arrow from '../../img/arrow.png';
import phoneIcon from '../../img/icon-phone.png'
import mail from '../../img/icon-mail.png'
import location from '../../img/icon-location.png'
import boy from '../../img/boy.png'
import music from '../../img/musical-notes.png'
import phone from '../../img/phone-img-new.png'
import cloud1 from '../../mobile-img/cloud1-desk.png'
import cloud2 from '../../mobile-img/cloud2-desk.png'
import cloud3 from '../../mobile-img/Mask Group 11.png'
import magnifier1 from '../../img/magnifier_1.png'
import paperPlane2 from '../../img/paper_plane_2.png'
import timer2 from '../../img/timer_2.png'
import dashboardCard from '../../img/dashboard_2.png'
import circleCard from '../../img/Mask Group 75.png'
import computerCard from '../../img/computer_2.png'
import magnifierCard from '../../img/magnifier_1.png'
import plantCard from '../../img/plant_2.png'
import chartCard from '../../img/chart_2.png'
import gearCard from '../../img/gear_2.png'
import lockCard from '../../img/lock_1.png'
import cup from '../../img/cup.png'
// import knowMeLogo from '../../img/know-me-logo.png'
// import boxLogo from '../../img/box-logo.png'

import stories from '../../img/stories.png'
import quote from '../../img/quote.png'
import storiesLogo from '../../img/stories-logo.png'
import quoteLogo from '../../img/quote-logo.png'
import js from '../../img/jsIcond.png'
import react from '../../img/reactIcond (1).png'
import mongo from '../../img/mongodbIcond.png'
import express from '../../img/expressIcond.png'
import node from '../../img/nodeIcond.png'
import angular from '../../img/angulrIcond.png'
import jQuery from '../../img/jqueryIcond.png'
import sqlIcon from '../../img/sqlIcond (1).png'
import callUs from '../../img/btn-call-us hebrew.png'
import clouds from '../../img/clouds.png'
import Carousel from 'react-elastic-carousel';

import knowMe from '../../img/know-me-desk.png'
import box from '../../img/box-computer-desk.png'
import funnel from '../../img/funnel-computer-desk.png'
import hub from '../../img/hub-computer-desk.png'
import time from '../../img/time-compter-desk.png'
import knowMeLogo from '../../img/know-me-logo.png'
import boxLogo from '../../img/box-logo (1).png'
import leaderFunnelLogo from '../../img/funnel-logo.png'
import hubLogo from '../../img/hub-logo.png'
import timeLogo from '../../img/time-logo.png'

export default function HomePageDesk() {
    return (
        <div className="d-none d-sm-block" >
            <div className="desk-part-1">
                <div className="container-fluid ">
                    <nav className="navbar row justify-content-center">
                        <img className=" col-2" src={logo} ></img>
                        <div className="btn-nav-bar  col-9">
                            {/* <button className="px-4 py-2 " >ENGLISH</button> */}
                            <a href="#connectUs"> <button>שירות לקוחות</button></a>
                            <a href="#projects"><button>פרוייקטים</button></a>
                            <a href="#solution"><button>פתרונות</button></a>
                            <a href="#tecnologics"><button>טכנולוגיות</button></a>
                            <a href="#agile"><button>AGILE שיטת</button></a>
                        </div>
                    </nav>
                    <div class=" row justify-content-center">
                        <div className="col-5 ml-5">
                            <img src={airport} className="airport mb-5  mt-5"></img>
                        </div>
                        <div className="col-5 container-fluid">
                            <div className="row">
                                <div class="col-12  header">
                                    <h1 className="title-header mt-5">-ברוכים הבאים ל Startup plan</h1>
                                    <h2>תוכנית הזנק למיזמי אינטרנט וסטארטאפים</h2>
                                </div>
                                <div className="col-9 offset-3">
                                    <p className="text mt-4 ">
                                        אנחנו מתמחים בפיתוח תוכנה, אפליקציות, ומערכות web מורכבות  השיטה שלנו מאפשרת לחסוך של עד 50% מהוצאות הפיתוח,אנחנו מעדיפים מערכות יחסים מוצלחות מאשר חוזים מורכבים ומאפשרים תחילת עבודה ללא עלות וללא התחייבות מצדכם                                      </p>
                                    <div className="row justify-content-end mt-4">
                                        <a href="#connectUs"> <button className="appointment px-4 py-2 mt-3 mb-5"  >לקביעת פגישה</button></a>
                                        {/* <button className="read-more-about mt-3 mr-4"  >קרא עוד אודות השיטה</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" conainer-fluid desk-part-2">

                <div className=" mt-5 row justify-content-center row align-items-center">
                    <h2 className="agile mt-5 col-12">מה מניע אותנו</h2>
                    <div className="mt-5 col-3">
                        <img src={magnifier1} ></img>
                    </div>
                    <div className="mt-5 col-3">
                        <img src={timer2} ></img>
                    </div>
                    <div className="mt-5 col-3">
                        <img src={paperPlane2} ></img>
                    </div>
                </div>

                <div className="aa mt-3 row justify-content-center pb-5 ">
                    <div className="col-3">
                        <h2>מתייעלים בזמן אמת</h2>
                        <p>גילוי מוקדם של בעיות מאפשר לטפל בהם במהירות. בכל שבוע הצוות מתכנס,
                            בוחן את הפעילות ומחפש דרכים לייעל את הפיתוח ולפתור את התקלות.</p>
                    </div>
                    <div className=" col-3">
                        <h2>מתקדמים במהירות</h2>
                        <p>לעומת זאת, תוכנה עובדת [working software] היא יחידת המידה האמיתית והמוחלטת להתקדמות אמיתית בפיתוח.
                            המטרה העליונה שלנו היא לספק תוכנה מוכחת, בעלת ערך ללקוח, תוך פרקי זמן קצרים, מבלי לחכות חודשים ארוכים להשלמת הפיתוח.</p>
                    </div>
                    <div className=" col-3">
                        <h2>מטפחים אנשים</h2>
                        <p>במקום להתעכב עם לקוחות במשא ומתן,
                             נעדיף להעמיק את שיתוף הפעולה וללמוד תוך כדי תנועה. כך גם הצוותים שלנו עובדים במקביל ובדו שיח על בסיס יומיומי. הסנכרון של צוותים בעלי יכולות מגוונות מאפשר לנו למנוע פקקים והתעכבויות ולפתח באופן עצמאי וללא תלות חיצונית, כל יכולת מקצה לקצה.</p>
                    </div>
                </div>
                <div className="row justify-content-around part-2-a mt-5 " id="agile">
                    <h2 className="agile mt-5 pt-5 col-12">השיטה שלנו</h2>
                    <img src={room2} className="col-5 pt-5 mt-5"></img>
                    <div className=" col-4 steps  pt-5 mb-3 mt-5">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-10 pr-0 mt-5">
                                    <h3>מסמנים מטרה</h3>
                                    <h4 className="mt-3">עיצוב • תכנון • אפיון</h4>
                                </div>
                                <h2 className="col-1 px-0 py-0 my-0">1</h2>
                                <p>מלקוחות שלא עברו תהליך אפיון מעמיק עלולים לסיים תהליכי פיתוח עם טעם חמוץ בפה. המתכנתים ואנשי המקצוע לא יצליחו לעשות את העבודה אם הצרכים שלכם לא הובנו במלואם. כדי לספק לכם את הפתרונות המושלמים,
                         אנחנו צריכים להבין את הצרכים והבעיות, הרצונות והדרישות שלכם בצורה הכי מדויקת, בהתאם לכך נתכנן את העבודה ונעצב את חווית המשתמש [UX] ואת הממשק התומך [UI] בהתאם.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid desk-part-3">
                <div class="row justify-content-around">
                    <div className=" col-4 steps">
                        <div className="container-fluid">
                            <div className="row align-items-center mt-5">
                                <div className="col-10 mt-5">
                                    <h3>מנועים בכל הכח</h3>
                                    {/* <div className="border offset-9 mt-4 w-25 "></div> */}
                                    <h4 className="mt-3">QA • פיתוח • דיבאגינג</h4>
                                </div>
                                <h2 className="col-1 px-0">2</h2>
                                <p className="">בהתאם לשיטת העבודה האיג’איילית שלנו, תהליכי הפיתוח שלנו במקביל - ניפוי ותיקון שגיאות [Debugging] ותהליכי בקרת איכות מחמירים [Quality Assurance].
                            בספרינט הזה אנחנו מאתרים כשלים ותקלות שעלולים לפגוע בחווית השימוש ובשביעות הרצון של המשתמשים. אנחנו מפתחים ובה בעת מוודאים שהמוצר יגיע אליכם כשהו עובד וללא כל תקלה.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-5 mt-5 ml-5">
                        <img src={room3}></img>
                    </div>
                </div>
            </div>
            <div className="container-fluid desk-part-4">
                <div class="row justify-content-center part-a ">

                    <img src={room4} class="col-5  mt-5 pr-0 mr-0"></img>
                    <div className=" col-6 steps mt-5 mr-5">
                        <div className="container-fluid">
                            <div className="row align-items-center mt-5">
                                <div className="col-10 mt-5">
                                    <h3>!להדק חגורות, אנחנו ממריאים</h3>
                                    {/* <div className="border offset-9 mt-4 w-25 "></div> */}
                                    <h4 className="mt-3">רספונסביות • בדיקות אבטחה • עלייה לאוויר</h4>
                                </div>
                                <h2 className="col-1 px-0">3</h2>
                                <p className="offset-4 pr-5 col-8 col align-self-end">המערכות שלכם חייבות להיות גמישות ובטוחות.
                                הן צריכות לתפקד באופן מושלם בכל מצב נתון ולהתאים את עצמן אוטומטית לכל סוגי המחשבים, המסכים ובכל הרזולוציות. כמו כן הן צריכות להיות עמידות של בפני התקפות זדוניות,
                          גנבת מידע וניצול לרעה. אל דאגה, אנחנו דואגים שהכל יהיה מוכן להמראה.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="desk-part-5 mt-5" id="solution">
                    <div className="row justify-content-center mt-5 ">
                        <img src={arrow} className="my-5 "></img>
                    </div>
                    <div className="row justify-content-center">
                        <div className="steps">
                            <h1 className=" offset-1 col-12 ">פתרונות</h1>
                            <div className=" border mt-3 offset-4 col-6 " ></div>

                        </div>
                    </div>
                    <div className="row justify-content-center cards my-5 mb-5 py-5">
                        <div className="  card-list-paper col-2 mb-5">
                            <div className="card-flip">
                                <div className="card-front ">
                                    <img className="ml-2 mt-2" src={circleCard} alt="Card image cap"></img>
                                    {/* <div> */}
                                    <p class="card-title-paper mt-3 ">שרתים ואחסון מידע</p>
                                    {/* <button href="#" className="read-more mr-4 mt-0">קרא עוד</button> */}
                                    {/* </div> */}
                                </div>
                                <div className="card-back ">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus sapien odio, sit amet malesuada massa semper at. Aenean semper gravida libero
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="  card-list-paper col-2 mb-5 ">
                            <div className="card-flip">
                                <div className="card-front ">
                                    <img class="ml-2 mt-2" src={lockCard} alt="Card image cap"></img>
                                    <div class="">
                                        <p class="card-title-paper mt-3 ">סייבר</p>
                                        {/* <button href="#" className="read-more mr-4 mt-0">קרא עוד</button> */}
                                    </div>
                                </div>
                                <div className="card-back ">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus sapien odio, sit amet malesuada massa semper at. Aenean semper gravida libero
                                      </p>
                                </div>
                            </div>
                        </div>
                        <div className="  card-list-paper col-2 mb-5">
                            <div className="card-flip">
                                <div className="card-front ">
                                    <img class="ml-2 mt-2" src={computerCard} alt="Card image cap"></img>
                                    <div class="">
                                        <p class="card-title-paper mt-3 ">פיתוח</p>
                                        {/* <button href="#" className="read-more mr-4 mt-0">קרא עוד</button> */}
                                    </div>
                                </div>
                                <div className="card-back ">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus sapien odio, sit amet malesuada massa semper at. Aenean semper gravida libero
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="  card-list-paper col-2 mb-5">
                            <div className="card-flip">
                                <div className="card-front ">
                                    <img class="ml-2 mt-2" src={chartCard} alt="Card image cap"></img>
                                    <div class="">
                                        <p class="card-title-paper mt-3 ">CX</p>
                                        {/* <button href="#" className="read-more mr-4 mt-0">קרא עוד</button> */}
                                    </div>
                                </div>
                                <div className="card-back ">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus sapien odio, sit amet malesuada massa semper at. Aenean semper gravida libero
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            < div className="container-fluid desk-part">
                <div id="tecnologics" className="row justify-content-center learn-languages mt-5 pt-5">
                    <h2 className="col-12">טכנולוגיות</h2>
                    <div className="border col-1 my-5"></div>
                </div>

                <div className="row justify-content-center icon">
                    <ul className="">
                        <li className="col-2" >
                            <img src={sqlIcon}></img>
                            <p>my sql</p>
                        </li>
                        <li className="col-2">
                            <img src={express}></img>
                            <p>Express</p>
                        </li>
                        <li className="col-2">
                            <img src={angular}></img>
                            <p>Angular</p>
                        </li>
                        <li className="col-2">
                            <img src={node}></img>
                            <p>nodeJS</p>
                        </li>
                    </ul>
                </div>

                <div className="row justify-content-center icon">
                    <ul >
                        <li className="col-2">
                            <img src={react}></img>
                            <p>React</p>
                        </li>
                        <li className="col-2">
                            <img src={js}></img>
                            <p>java script</p>
                        </li>
                        <li className="col-2">
                            <img src={mongo}></img>
                            <p>mongoDB</p>
                        </li>

                        <li className="col-2">
                            <img src={jQuery}></img>
                            <p>jQuery</p>
                        </li>

                    </ul>
                </div>
                <img className="clouds offset-10" src={clouds}></img>
                <div className="row ml-5 justify-content-center mt-5">
                    <div className="col-2 peper-card py-2">
                        <h2 className="mt-2 ">AI</h2>
                        <p className="">Artificial Intelligence</p>
                    </div>
                    <div className="col-2 mx-5 peper-card py-2">
                        <h2 className="mt-2">BI</h2>
                        <p>Business Intelligence</p>
                    </div>
                    <div className="col-2 peper-card py-2">
                        <h2 className="mt-2">CMS</h2>
                        <p>custom managment system</p>
                    </div>

                </div>
                <div className="row ml-5 justify-content-center mt-3 pb-5">
                    <div className="col-2 peper-card py-2">
                        <h2 className="mt-2">W&M</h2>
                        <p>Web & Mobile</p>
                    </div>
                    {/* <div className="col-2 mx-5 peper-card">
                        <h2 className="mt-2">UX/UI</h2>
                        <p>UserExperience/UserInterface</p>
                    </div> */}
                    <div className="col-2 peper-card mx-5 py-2">
                        <h2 className="mt-2">UX/UI</h2>
                        <p>UserExperience /UserInterface</p>
                    </div>
                    <div className="col-2 peper-card py-2">
                        <h2 className="mt-2">LG</h2>
                        <p>Lead Generation</p>
                    </div>
                </div>
            </div>
            <div className="row  justify-content-center" id="projects">
                <div className="steps mt-5 mb-3">
                    <h1 className=" col-12 mb-5">פרויקטים חמים מהתנור</h1>
                    <div className=" border offset-4 col-5 mb-5" ></div>
                </div>
            </div>

            <Carousel className=" container-fluid mr-5 " >
                <div className=" container ">
                    <div className="row justify-content-center  ">
                        <img src={knowMe}></img>
                        <div className="project-logo-and-text">
                            <img src={knowMeLogo}></img>
                            <p >לוג עסקי המנהל את כלל הפניות וההתראות מכל ערוצי השיווק -</p>
                        </div>
                    </div>
                </div>
                <div className=" container">
                    <div className="row justify-content-center   ">
                        <img src={box}></img>
                        <div className="project-logo-and-text">
                            <img src={boxLogo}></img>
                            <p >לוג עסקי המנהל את כלל הפניות וההתראות מכל ערוצי השיווק -</p>
                        </div>
                    </div>
                </div>
                <div className=" container">
                    <div className="row justify-content-center   ">
                        <img src={hub}></img>
                        <div className="project-logo-and-text">
                            <img src={hubLogo}></img>
                            <p >לוג עסקי המנהל את כלל הפניות וההתראות מכל ערוצי השיווק -</p>
                        </div>
                    </div>
                </div>
                <div className=" container">
                    <div className="row justify-content-center   ">
                        <img src={funnel}></img>
                        <div className="project-logo-and-text">
                            <img src={leaderFunnelLogo}></img>
                            <p >לוג עסקי המנהל את כלל הפניות וההתראות מכל ערוצי השיווק -</p>
                        </div>
                    </div>
                </div>
                <div className=" container ">
                    <div className="row justify-content-center   ">
                        <img src={time}></img>
                        <div className="project-logo-and-text">
                            <img src={timeLogo}></img>
                            <p >לוג עסקי המנהל את כלל הפניות וההתראות מכל ערוצי השיווק -</p>
                        </div>
                    </div>
                </div>
            </Carousel>


            {/* <div className=" container-fluid desk-part-7">
                <div className="row justify-content-center row align-items-center box aplicate ">
                    <div className="offset-2 col-3">
                        <div className="logo mb-4">
                            <img src={box}></img>
                        </div>
                        <p className="mt-2">. הצלחה מסחררת בגדול מתחילה בהצלחה מוכחת בקטן ,
                        בחודש הזה אנחנו יוצרים את התבנית.
                        מאפיינים מעצבים ומוכיחים את הקונספט של הפרוטוטייפינג עם .כל הפונקציות של הסטארט-אפ שלכם
                        </p>
                    </div>
                    <div className="offset-1 col-5 ">
                        <img src={boxLogo}></img>
                    </div>
                </div>
            </div>
            <div className=" container-fluid desk-part-8">
                <div className="row justify-content-around funnel aplicate m-5 py-5">
                    <div className="col-5 p-5">
                        <img src={leaderFunnelLogo}></img>
                    </div>
                    <div className="col-3 mt-5">
                        <div className="logo mb-4">
                            <img src={funnel}></img>
                        </div>
                        <p className="mt-2">. הצלחה מסחררת בגדול מתחילה בהצלחה מוכחת בקטן ,
                        בחודש הזה אנחנו יוצרים את התבנית.
                        מאפיינים מעצבים ומוכיחים את הקונספט של הפרוטוטייפינג עם .כל הפונקציות של הסטארט-אפ שלכם
                        </p>
                    </div>
                </div>
            </div>
            <div className=" container-fluid desk-part-9">
                <div className="row justify-content-center row align-items-center hub aplicate m-5 py-5">
                    <div className="offset-2 col-3">
                        <div className="logo mb-4">
                            <img src={hub}></img>
                        </div>
                        <p className="mt-2">. הצלחה מסחררת בגדול מתחילה בהצלחה מוכחת בקטן ,
                        בחודש הזה אנחנו יוצרים את התבנית.
                        מאפיינים מעצבים ומוכיחים את הקונספט של הפרוטוטייפינג עם .כל הפונקציות של הסטארט-אפ שלכם
                        </p>
                    </div>
                    <div className="offset-1 col-5 ">
                        <img src={hubLogo}></img>
                    </div>
                </div>
            </div>
            <div className=" container-fluid desk-part-10">
                <div className="row justify-content-around row align-items-center time aplicate m-5 py-5 ">

                    <div className="col-5 p-5">
                        <img src={timeLogo}></img>
                    </div>
                    <div className=" col-3">
                        <div className="logo mb-4">
                            <img src={time}></img>
                        </div>
                        <p className="mt-2">
                            הפתגם ‘זמן שווה כסף’ הוא טעות. לכסף אין סוף אבל הזמן הוא המשאב המוגבל והיקר של הצוות ושל הפרויקטים. יומן חכם ומרובה אפשרויות. כמו פגישות צוות הכוללות מינוי אחראי ודו”ח מסכם. קביעת אירועים שמייצרת באופן אוטומטי דף נחיתה עם וידאו ואפשרויות מכירת כרטיסים ועוד ועוד.
                            היומן משתלב עם כל שאר המערכות ומאפשר לנהל את הלידים, הצוותים, הפגישות, האירועים והמטרות העיסקיות.
                        </p>
                    </div>
                </div>
            </div>
            <div className=" container-fluid desk-part-11">
                <div className="row justify-content-center row align-items-center stories aplicate m-5 py-5">
                    <div className="offset-2 col-3">
                        <div className="logo mb-4">
                            <img src={stories}></img>
                        </div>
                        <p className="mt-2">. הצלחה מסחררת בגדול מתחילה בהצלחה מוכחת בקטן ,
                        בחודש הזה אנחנו יוצרים את התבנית.
                        מאפיינים מעצבים ומוכיחים את הקונספט של הפרוטוטייפינג עם .כל הפונקציות של הסטארט-אפ שלכם
                        </p>
                    </div>
                    <div className="offset-1 p-5 col-5">
                        <img src={storiesLogo}></img>
                    </div>
                </div>
            </div>
            <div className=" container-fluid desk-part-12 ">
                <div className="row justify-content-around row align-items-center time aplicate mx-5 py-5">
                    <div className="col-5 p-5">
                        <img src={quoteLogo}></img>
                    </div>
                    <div className=" col-3">
                        <div className="logo mb-4">
                            <img src={quote}></img>
                        </div>
                        <p className="mt-2">
                            הצלחה מסחררת בגדול מתחילה בהצלחה מוכחת בקטן.
                            בחודש הזה אנחנו יוצרים את התבנית. מאפיינים,
                          מעצבים ומוכיחים את הקונספט של הפרוטוטייפינג עם כל הפונקציות של הסטארט-אפ שלכם. </p>
                    </div>
                </div>
            </div>
            <div className=" container-fluid desk-part-6">
                <div className="row justify-content-center row align-items-center know-me aplicate mx-5">

                    <div className=" col-3">
                        <img className="mb-4" src={knowMeLogo}></img>
                        <p className="mt-2">. הצלחה מסחררת בגדול מתחילה בהצלחה מוכחת בקטן ,
                        בחודש הזה אנחנו יוצרים את התבנית.
                        מאפיינים מעצבים ומוכיחים את הקונספט של הפרוטוטייפינג עם .כל הפונקציות של הסטארט-אפ שלכם
                        </p>
                    </div>
                    <div className=" col-5">
                        <img src={phone}></img>
                    </div>
                </div>
            </div>
            */}
            <div className="container-fluid desk-part-14" id="connectUs" >
                <div className="row justify-content-center">
                    <div className="col-4 mt-5 pt-5">
                        <img className="boy mt-5 " src={cup}></img>
                    </div>
                    <div className="steps pt-5 mt-5 ">
                        <h1 className="lets-talk"> בואו נדבר</h1>
                        <label for="full-name " className="a"> שם מלא</label><br></br>
                        <input type="text" id="full-name" name="fullname"></input><br></br>
                        <label for="email"> מייל</label><br></br>
                        <input type="text" id="email" name="lastname"></input><br></br>
                        <label for="your-massage">נייד</label><br></br>
                        <input type="text" id="your-massage" name="your-massage"></input><br></br>
                        <button className="appointment px-4 py-2 mt-5 mb-5"  > דברו איתנו</button>
                        {/* <button className="mt-5 call-btn"> <img className=" call-us" src={callUs}></img></button> */}
                        {/* <button className="call-us mt-4"></button> */}


                        <div className="container-fluid mt-3 mb-5" >
                            <div className="details detailsDesk row justify-content-end mt-5">
                                <div className=" ">
                                    <p className="" >בר כוכבא 4 בני ברק</p>
                                    <img className="" src={location}></img>
                                </div>
                                <div className="  ">
                                    <p className="">03-1234567</p>
                                    <img className="" src={phoneIcon}></img>
                                </div>
                                <div className=" ">
                                    <p className="">info@leader.codes</p>
                                    <img className="" src={mail}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
