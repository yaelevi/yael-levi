import React, { Component } from 'react'
import './home-page.css'
import logo from '../../img/logo.png'
import airport from '../../img/rocket.png'
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
import knowMeLogo from '../../img/know-me-logo.png'
import boxLogo from '../../img/box-logo.png'
import box from '../../img/box.png'
import leaderFunnelLogo from '../../img/leader-funnel-logo.png'
import funnel from '../../img/funnel.png'
import time from '../../img/time.png'
import hub from '../../img/hub.png'
import stories from '../../img/stories.png'
import quote from '../../img/quote.png'
import hubLogo from '../../img/hub-logo.png'
import timeLogo from '../../img/time-logo.png'
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
export default function HomePageDesk() {
    return (
        <div className="d-none d-sm-block">
            <div className="desk-part-1">
                <div className="container-fluid ">
                    <nav className="navbar row ">
                        <img className="offset-1 col-md-2" src={logo} ></img>
                        <div className="btn-nav-bar col-md-7">
                            {/* <button className="px-4 py-2 " >ENGLISH</button> */}
                            <a href="#CustomerService"> <button>שירות לקוחות</button></a>
                            <a href="#projects"><button>פרוייקטים</button></a>
                            <a href="#solution"><button>פתרונות</button></a>
                            <a href="#tecnologics"><button>טכנולוגיות</button></a>
                            <a href="#agile"><button>AGILE שיטת</button></a>
                        </div>
                    </nav>
                    <div class=" row  ">
                        <div className="col-6 ml-5">
                            <div className="container-fluid">
                                <div className="row mt-5">
                                    <img src={cloud2} className="cloud-2-desk col-3"></img>
                                    <img src={airport} className="airport col-4 mt-5"></img>
                                    <img src={cloud1} className="cloud-1-desk col-3"></img>
                                    {/* <img src={cloud3} className="cloud-3-desk col-3"></img> */}


                                </div>
                            </div>
                        </div>
                        <div class="col-5 mt-4">
                            <h1 className="title-header mt-5">חממה טכנולוגית AGILE בשיטת</h1>
                            <p className="text mt-4 ">
                                Leader.Codes מקבוצת StartUpPlan ברוכים הבאים ל ומערכות CMS, אנחנו מתמחים בפיתוח תוכנה, אפליקציות, מערכות .השיטה שלנו מאפשרת לחסוך של עד 50% מהוצאות הפיתוח. CRM
                            </p>
                            <div className="row justify-content-end mt-4">
                                <button className="appointment mt-3 mr-4 "  >קבע פגישת ייעוץ חינם</button>
                                <button className="read-more-about mt-3 mr-4"  >קרא עוד אודות השיטה</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" container-fluid desk-part-2" id="agile">
                <div className=" mt-5 row justify-content-center row align-items-center">
                    <h2 className="agile mt-2 col-12">השיטה שלנו</h2>
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
                <div className="aa mt-3 row justify-content-center ">
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
                <div className="row part-2-a mt-5 ">
                    <img src={room2} className="col-6 mt-5"></img>
                    <div className="offset-1 col-4 steps ">
                        <h2>1</h2>
                        <h3>מסמנים מטרה</h3>
                        <div className="border mt-4 w-25 "></div>
                        <div className="mt-5">
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
            <div className="container-fluid desk-part-3">
                <div class="row justify-content-around">
                    <div className=" col-4 steps">
                        <h2>2</h2>
                        <h3>מנועים בכל הכח</h3>
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
                    <div class="col-4 mt-5">
                        <img src={room3}></img>
                    </div>
                </div>
            </div>
            <div className="container-fluid desk-part-4">
                <div class="row justify-content-around part-a">
                    <div class="col-4  room-4">
                        <img src={room4}></img>
                    </div>
                    <div className=" col-6  steps">
                        <h2>3</h2>
                        <h3>!להדק חגורות, אנחנו ממריאים</h3>
                        <div className="border mt-4 w-25 "></div>
                        <div className="h4 mt-5">
                            <h4>עלייה לאוויר</h4>
                            <div className="circle"></div>
                            <h4>בדיקות אבטחה</h4>
                            <div className="circle"></div>
                            <h4>רספונסיביות</h4>
                        </div>
                        <p className="w-75">המערכות שלכם חייבות להיות גמישות ובטוחות.
                        הן צריכות לתפקד באופן מושלם בכל מצב נתון ולהתאים את עצמן אוטומטית לכל סוגי המחשבים, המסכים ובכל הרזולוציות. כמו כן הן צריכות להיות עמידות של בפני התקפות זדוניות,
                          גנבת מידע וניצול לרעה. אל דאגה, אנחנו דואגים שהכל יהיה מוכן להמראה.</p>
                    </div>
                </div>
                {/* <img className="music" src={music}></img> */}

                <div id="tecnologics" className="row justify-content-center learn-languages ">
                    <h2 className="col-12">טכנולוגיות</h2>
                    <div className="border col-1 my-5"></div>
                </div>

                <div className="row justify-content-center icon">
                    <ul className="col-12 mr-3">
                        <li >
                            <img src={sqlIcon}></img>
                            <h3>my sql</h3>
                        </li>
                        <li >
                            <img src={express}></img>
                            <h3>Express</h3>
                        </li>
                        <li>
                            <img src={angular}></img>
                            <h3>Angular</h3>
                        </li>
                        <li>
                            <img src={node}></img>
                            <h3>nodeJS</h3>
                        </li>
                    </ul>
                    <ul className="col-12 ">
                        <li >
                            <img src={react}></img>
                            <h3>React</h3>
                        </li>
                        <li>
                            <img src={js}></img>
                            <h3>java script</h3>
                        </li>
                        <li>
                            <img src={mongo}></img>
                            <h3>mongoDB</h3>
                        </li>

                        <li>
                            <img src={jQuery}></img>
                            <h3>jQuery</h3>
                        </li>

                    </ul>
                </div>
                <div className="row justify-content-center mt-5">
                    <div className="col-2 peper-card">
                        <h2 className="mt-2">AI</h2>
                        <p>Artificial Intelligence</p>
                    </div>
                    <div className="col-2 mx-5 peper-card">
                        <h2 className="mt-2">BI</h2>
                        <p>Business Intelligence</p>
                    </div>
                    <div className="col-2 peper-card">
                        <h2 className="mt-2">LG</h2>
                        <p>Lead Generation</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-2 peper-card">
                        <h2 className="mt-2">W&M</h2>
                        <p>Web & Mobile</p>
                    </div>
                    <div className="col-2 mx-5 peper-card">
                        <h2 className="mt-2">UX/UI</h2>
                        <p>User Experience / User Interface</p>
                    </div>
                    <div className="col-2 peper-card">
                        <h2 className="mt-2">CMS</h2>
                        <p>custom management system</p>
                    </div>
                </div>
            </div>
            < div className="container-fluid desk-part">
                <div className="desk-part-5" id="solution">
                    <div className="row justify-content-center">
                        <img src={arrow} className="mt-5 "></img>
                    </div>
                    <div className="row justify-content-center">
                        <div className="steps">
                            <h1 className=" offset-1 col-12 ">פתרונות</h1>
                            <div className=" border mt-3 offset-4 col-6 " ></div>

                        </div>
                    </div>
                    <div className="row justify-content-center cards mt-5 ">
                        <div className="  card-list-paper col-2">
                            <div className="card-flip">
                                <div className="card-front ">
                                    <img class="ml-2 mt-2" src={circleCard} alt="Card image cap"></img>
                                    <div class="">
                                        <p class="card-title-paper mt-3 ">שרתים ואחסון מידע</p>
                                        <button href="#" className="read-more mr-4 mt-0">קרא עוד</button>
                                    </div>
                                </div>
                                <div className="card-back ">
                                    <h3>fdsff</h3>
                                </div>
                            </div>
                        </div>
                        <div className="card-list-paper  col-2 ">
                            <img class="ml-5 mt-3" src={lockCard} alt="Card image cap"></img>
                            <div class="">
                                <p class="card-title-paper mt-3">סייבר</p>
                                <button href="#" className="read-more mr-4 mt-0">קרא עוד</button>
                            </div>
                        </div>
                        <div className="card-list-paper  col-2 ">
                            <img class="ml-5 mt-4" src={computerCard} alt="Card image cap"></img>
                            <div class="">
                                <p class="card-title-paper mt-3">פיתוח</p>
                                <button href="#" className="read-more mr-4 mt-0">קרא עוד</button>
                            </div>
                        </div>


                        <div className="card-list-paper col-2 mr-5 mt-1">
                            <img class="mr-5 mt-2" src={chartCard} alt="Card image cap"></img>
                            <div class="card-body ">
                                <p class="card-title-paper m-0">CX</p>
                                <button href="#" className="read-more mr-4 mt-3 ">קרא עוד</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <h2 id="projects" className="projects mt-5">פרויקטים חמים מהתנור</h2>
                <div className="border col-1"></div> */}
            </div>
            <div className=" container-fluid desk-part-6">
                <div className="row justify-content-center row align-items-center know-me aplicate">
                    <div className=" col-5">
                        <img src={phone}></img>
                    </div>
                    <div className="offset-1 col-3">
                        <img className="mb-4" src={knowMeLogo}></img>
                        <h1 >אינדקס B2B</h1>
                        <p className="mt-2">. הצלחה מסחררת בגדול מתחילה בהצלחה מוכחת בקטן ,
                        בחודש הזה אנחנו יוצרים את התבנית.
                        מאפיינים מעצבים ומוכיחים את הקונספט של הפרוטוטייפינג עם .כל הפונקציות של הסטארט-אפ שלכם
                        </p>
                    </div>
                </div>
            </div>
            <div className=" container-fluid desk-part-7">
                <div className="row justify-content-center row align-items-center box aplicate">
                    <div className="col-3">
                        <div className="logo mb-4">
                            {/* <h2 className="mr-4">Box</h2> */}
                            <img src={box}></img>
                        </div>
                        <h1 >אינדקס B2B</h1>
                        <p className="mt-2">. הצלחה מסחררת בגדול מתחילה בהצלחה מוכחת בקטן ,
                        בחודש הזה אנחנו יוצרים את התבנית.
                        מאפיינים מעצבים ומוכיחים את הקונספט של הפרוטוטייפינג עם .כל הפונקציות של הסטארט-אפ שלכם
                        </p>
                    </div>
                    <div className="offset-1 col-5">
                        <img src={boxLogo}></img>
                    </div>
                </div>
            </div>
            <div className=" container-fluid desk-part-8">
                <div className="row justify-content-center row align-items-center funnel aplicate">
                    <div className="col-5">
                        <img src={leaderFunnelLogo}></img>
                    </div>
                    <div className="offset-1 col-3">
                        <div className="logo mb-4">
                            {/* <h2>Leader Funnel</h2> */}
                            <img src={funnel}></img>
                        </div>
                        <h1 >אינדקס B2B</h1>
                        <p className="mt-2">. הצלחה מסחררת בגדול מתחילה בהצלחה מוכחת בקטן ,
                        בחודש הזה אנחנו יוצרים את התבנית.
                        מאפיינים מעצבים ומוכיחים את הקונספט של הפרוטוטייפינג עם .כל הפונקציות של הסטארט-אפ שלכם
                        </p>
                    </div>
                </div>
            </div>
            <div className=" container-fluid desk-part-9">
                <div className="row justify-content-center row align-items-center hub aplicate">
                    <div className="col-3">
                        <div className="logo mb-4">
                            {/* <h2 className="mr-4">Hub</h2> */}
                            <img src={hub}></img>
                        </div>
                        <h1 >אינדקס B2B</h1>
                        <p className="mt-2">. הצלחה מסחררת בגדול מתחילה בהצלחה מוכחת בקטן ,
                        בחודש הזה אנחנו יוצרים את התבנית.
                        מאפיינים מעצבים ומוכיחים את הקונספט של הפרוטוטייפינג עם .כל הפונקציות של הסטארט-אפ שלכם
                        </p>
                    </div>
                    <div className="offset-1 col-5">
                        <img src={hubLogo}></img>
                    </div>
                </div>
            </div>
            <div className=" container-fluid desk-part-10">
                <div className="row justify-content-center row align-items-center time aplicate">
                    <div className="col-5">
                        <img src={timeLogo}></img>
                    </div>
                    <div className="offset-1 col-3">
                        <div className="logo mb-4">
                            {/* <h2>Time</h2> */}
                            <img src={time}></img>
                        </div>
                        <h1>אינדקס B2B</h1>
                        <p className="mt-2">
                            הפתגם ‘זמן שווה כסף’ הוא טעות. לכסף אין סוף אבל הזמן הוא המשאב המוגבל והיקר של הצוות ושל הפרויקטים. יומן חכם ומרובה אפשרויות. כמו פגישות צוות הכוללות מינוי אחראי ודו”ח מסכם. קביעת אירועים שמייצרת באופן אוטומטי דף נחיתה עם וידאו ואפשרויות מכירת כרטיסים ועוד ועוד.
                            היומן משתלב עם כל שאר המערכות ומאפשר לנהל את הלידים, הצוותים, הפגישות, האירועים והמטרות העיסקיות.
                        </p>
                    </div>
                </div>
            </div>
            <div className=" container-fluid desk-part-11">
                <div className="row justify-content-center row align-items-center stories aplicate">
                    <div className="col-3">
                        <div className="logo mb-4">
                            {/* <h2 className="mr-4">Stories</h2> */}
                            <img src={stories}></img>
                        </div>
                        <h1 >אינדקס B2B</h1>
                        <p className="mt-2">. הצלחה מסחררת בגדול מתחילה בהצלחה מוכחת בקטן ,
                        בחודש הזה אנחנו יוצרים את התבנית.
                        מאפיינים מעצבים ומוכיחים את הקונספט של הפרוטוטייפינג עם .כל הפונקציות של הסטארט-אפ שלכם
                        </p>
                    </div>
                    <div className="offset-1 col-5">
                        <img src={storiesLogo}></img>
                    </div>
                </div>
            </div>
            <div className=" container-fluid desk-part-12">
                <div className="row justify-content-center row align-items-center quote aplicate">
                    <div className="col-5">
                        <img src={quoteLogo}></img>
                    </div>
                    <div className="offset-1 col-3">
                        <div className="logo mb-4">
                            {/* <h2>quote</h2> */}
                            <img src={quote}></img>
                        </div>
                        <h1>אינדקס B2B</h1>
                        <p className="mt-2">
                            הצלחה מסחררת בגדול מתחילה בהצלחה מוכחת בקטן.
                            בחודש הזה אנחנו יוצרים את התבנית. מאפיינים,
                          מעצבים ומוכיחים את הקונספט של הפרוטוטייפינג עם כל הפונקציות של הסטארט-אפ שלכם. </p>
                    </div>
                </div>
            </div>
            <div className="container-fluid desk-part-14">
                <div className="row justify-content-center  pt-5">
                    <div className="col-4 mt-5 pt-5">
                        <img className="boy mt-5 " src={cup}></img>
                    </div>
                    <div className="steps col-4 pt-5 mt-5 ">
                        <h1 className="lets-talk"> בואו נדבר</h1>
                        <label for="full-name " className="a"> שם מלא</label><br></br>
                        <input type="text" id="full-name" name="fullname"></input><br></br>
                        <label for="email"> מייל</label><br></br>
                        <input type="text" id="email" name="lastname"></input><br></br>
                        <label for="your-massage">ההודעה שלך </label><br></br>
                        <input type="text" id="your-massage" name="your-massage"></input><br></br>
                        <button className="call-us"></button>

                    </div>
                    <div className="container-fluid " >
                        <div className="row justify-content-center details  ">
                            <img src={location}></img>
                            <p>בר כוכבא 4 בני ברק</p>
                            <img src={phoneIcon}></img>
                            <p>03-1234567</p>
                            <img src={mail}></img>
                            <p>info@leader.codes</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        //      <div className="card-flip">
        //      <div className="card-front card-list-paper">
        //          <img class="ml-2 mt-2" src={magnifierCard} alt="Card image cap"></img>
        //          <div class="">
        //              <h5 class="card-title-paper mt-3 ">חווית משתמש ועיצוב ממשקים</h5>
        //              <button href="#" className="read-more mr-5 mt-0">קרא עוד</button>
        //          </div>
        //      </div>
        //      <div className="card-back card-list-paper">
        //          <img class="ml-2 mt-2" src={magnifierCard} alt="Card image cap"></img>
        //          <div class="">
        //              <h5 class="card-title-paper mt-3 ">back</h5>
        //              <p> hfdjfh hfj hjhf j hjhl j fsjfhd hjfh kjd hsj jjk lfoie jhk</p>
        //              {/* <button href="#" className="read-more mr-5 mt-0">קרא עוד</button> */}
        //          </div>
        //      </div>
        //  </div>
    );
}
