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
import arrow from '../../mobile-img/arrow.png'
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
                    <Menu></Menu>
                </Modal></div>
                    <nav className="navbar row justify-content-between ">
                        <img className="col-5" src={logo} ></img>      
                        <button className="btn-nav" onClick={handleShow} >
                            <img className="nav" src={nav}></img>
                        </button>
                    </nav>
                    
                    <div className=" row justify-content-center mt-3">
                        <div className="col-10">
                            <h1 className="title px-2">hi you, <br></br>let’s boost your bussines!</h1>
                            <p className="text mt-2 px-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor   sed diam voluptua.
                            </p>
                        </div>
                        {/* <div className=""> */}
                        <div className="airport offset-3 col-9 ">
                            {/* <img src={cloud2} className=" col-4  cloud2"></img> */}
                           <div className="airport-animate col-4"> <img src={airport} ></img></div>
                            {/* <img src={cloud1} className=" col-4 cloud1"></img> */}
                            
                        </div>  
                        {/* <div className="col-10">
                        <div className="container-fluid">
                            <div className="row mt-5">
                                <img src={cloud2} className="cloud2 col"></img>
                                <img src={airport} className="airport col-6 mt-5"></img>
                                <img src={cloud1} className="cloud2 col"></img>
                            </div>
                        </div> */}
                    {/* </div> */}
                        
                        <button className="col-6 justify-content-center align-items-center lets-start" >let's start</button>
                    </div>
                </div>
                <div className="container-fluid mobile-part-2">
                    <div className=" row justify-content-center row align-items-center">
                        <img src={speaker} className="col-10 mt-5 speaker"></img>
                        <div className="col-10 our-method mt-3">
                            <p className="our">Our method<br></br>
                            is 1-2-3 to</p>
                            <h1 className="mvp">MVP</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center part-2-a">
                        <div className="col-10 mt-5">
                            <img src={room1}></img>
                        </div>
                        <div className=" col-12 mt-5 step-one">
                            <h1 className="" >step one</h1>
                            <p className="p-1 ml-3 ">Lorem ipsum dolor sit<br></br> amet, consetetur</p>
                            <p className=" ml-3"> sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="mobile-part-3 row justify-content-center">
                        <div className="col-10 mt-5">
                            <img src={room2}></img>
                        </div>
                        <div className="step-two col-11 mt-0">
                            <h1>step two</h1>
                            <p className="p-1">Lorem ipsum dolor sit amet, consetetur</p>
                            <p>sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                     
                         </p>
                        </div>
                    </div>
                    <div className="mobile-part-4 row justify-content-center">
                        <div className="col-10 mt-5">
                            <img src={room3}></img>
                        </div>
                        <div className="step-three ">
                            <h1 className="h-1 col-12">step three</h1>
                            <p className="p-1  mx-4">Lorem ipsum dolor sit amet, consetetur</p>
                            <p className="mx-4">sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                            Lorem ipsum dolor sit amet, consetetur</p>
                        </div>
                        <div className="music-p col-7 mt-5">
                            <p className="p-1 ">Lorem ipsum dolor sit ame, consetetur sadipscing</p>
                        </div>
                        <div className="col-5 mus mt-3">
                            <img src={musical}></img>
                        </div>
                        <div className="col-5 mern">m<br></br>e<br></br>r<br></br>n</div>
                        <div className="col-4 languages">
                            <img src={mongo}></img>
                            <label>mongoDB</label>
                            <img src={express}></img>
                            <label>Express</label>
                            <img src={react}></img>
                            <label>React</label>
                            <img src={node}></img>
                            <label>nodeJS</label>
                        </div>
                    </div>
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
                        <div className="col-11 my-0">
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
                            <h1>loremipsum dolor sit amet,consetetur sadipscing</h1>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore</p>

                        </div>
                    </div>
                </div>
                <div className="container-fluid mobile-part-7">
                    <div className="row sign pt-5">
                        <div className="offset-2 col-10">
                            <img className="boy" src={boy}></img>
                        </div>
                        <div className="step-one  pt-5">
                            <h1 className="mt-5 col-12">Let’s talk</h1>
                            <div >
                                <label className=" mt-5 offset-1 col-5" for="full-name">Full Name</label><br></br>
                                <input className="offset-1 col-10" type="text" id="full-name" name="fullname"></input><br></br>
                                <label className="offset-1 col-5" for="email">Last Name</label><br></br>
                                <input className="offset-1 col-10" type="text" id="email" name="lastname"></input><br></br>
                                <label className="offset-1 col-5" for="your-massage">Your Massage</label><br></br>
                                <input className="offset-1 col-10" type="text" id="your-massage" name="your-massage"></input><br></br>
                            </div>
                            <button className="mt-5 col-12 d-flex justify-content-center align-items-center call-us"></button>

                        </div>

                    </div>
                    <div className="details mt-5">
                        <div className="row justify-content-center">
                            <p className="col-6" >bar-kochva 4 bnei-brak</p>
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
