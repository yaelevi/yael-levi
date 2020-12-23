import React, { Component } from 'react'
import './home-page.css'
import logo from '../../img/logo.png'
import airport from '../../img/rocket.png'
import room2 from '../../img/room-part-2.png'
import room3 from '../../img/room-part-3.png'
import room4 from '../../img/room-part-4.png'
import speaker from '../../img/speaker.png'
import mongo from '../../img/mongo.png'
import express from '../../img/express.png'
import react from '../../img/react.png'
import node from '../../img/node.png'
import arrow from '../../img/arrow.png';
import phoneIcon from '../../img/icon-phone.png'
import mail from '../../img/icon-mail.png'
import location from '../../img/icon-location.png'
import boy from '../../img/boy.png'
// import music from '../../img/musical-notes.png'
import phone from '../../img/phone-img.png'
import cloud1 from '../../mobile-img/cloud1-desk.png'
import cloud2 from '../../mobile-img/cloud2-desk.png'
import cloud3 from '../../mobile-img/Mask Group 11.png'

export default function HomePageDesk() {

    return (
        <div className="d-none d-sm-block">
            <div className="container-fluid desk-part-1">
                <nav className="navbar row ">
                    <img className="offset-1 col-md-2" src={logo} ></img>
                    <div className="btn-nav-bar col-md-6">
                        <button >1-2-3 to mvp</button>
                        <button >our projects</button>
                        <button>contact us</button>
                        <button className="py-2">ENGLISH</button>
                    </div>
                </nav>
                <div class=" row justify-content-around ">
                    <div class="col-4">
                        <h1 className="title mt-5">hi you, <br></br>let’s boost your bussines together!</h1>
                        <p className="text mt-3 ">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur
                            </p>
                        <button className="lets-start mt-3 "  >let's start</button>
                    </div>
                    <div className="col-6">
                        <div className="container-fluid">
                            <div className="row mt-5">
                                <img src={cloud2} className="cloud-2-desk col-3"></img>
                                <img src={airport} className="airport col-4 mt-5"></img>
                                <img src={cloud1} className="cloud-1-desk col-3"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" desk-part-2 container-fluid">
                <div className="mt-5 row justify-content-center row align-items-center">
                    <img src={speaker} className="col-4 mt-5 "></img>
                    <div className="col-4 our-method mt-5">
                        <p className="our">Our method<br></br>
                            is 1-2-3 to</p>
                        <h1 className="mvp">MVP</h1>
                        <button className="lets-start mt-3">let's start</button>
                    </div>

                </div>
                <div className="row part-2-a">
                    <div className="offset-1 col-5 steps">
                        <h1>step one</h1>
                        <p className="p-1">Lorem ipsum dolor sit<br></br> amet, consetetur</p>
                        <p> sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur</p>
                    </div>
                    <img src={room2} className="col-6 "></img>
                </div>
            </div>
            <div className="container-fluid desk-part-3">
                <div class="row justify-content-around">
                    <div class="col-4 mt-5">
                        <img src={room3}></img>
                    </div>
                    <div class="col-5 steps">
                        <h1 className=" mt-5">step two</h1>
                        <p className="p-1">Lorem ipsum dolor sit amet, consetetur</p>
                        <p > sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur
                            </p>
                    </div>
                </div>
            </div>
            <div className="container-fluid desk-part-4">
                <div class="row justify-content-around part-a">
                    <div class="col-4  room-4">
                        <img src={room4}></img>
                    </div>
                    <div class="col-5 mt-5 steps">
                        <h1 className="step-three ">step three</h1>
                        <p className="p-1">Lorem ipsum dolor sit amet, consetetur</p>
                        <p > sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur
                            </p>
                    </div>
                </div>
                {/* <img className="music" src={music}></img> */}

                <div className="row justify-content-center learn-languages ">
                    <p className="col-12 p-1">Lorem ipsum dolor sit amet,
                        <br></br>consetetur sadipscing</p>
                    <h1 className="col-12 mern">mern</h1>
                    <p className="col-12 languages">mongoDB  Express  React  nodeJS</p>
                    <div className="col-12 icon">
                        <img src={mongo}></img>
                        <img src={express}></img>
                        <img src={react}></img>
                        <img src={node}></img>
                    </div>
                </div>
            </div>
            <div className="desk-part-5">
                <div className="row justify-content-center">
                    <img src={arrow} className="mt-5"></img>
                </div>
                <div className="row justify-content-center">
                    <div className="steps">
                        <h1 className="col-12">our projects</h1>
                        <p className="p-2 offset-2 col-8">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
                        <div className="offset-5 col-2 border"></div>
                    </div>
                </div>
            </div>
            <div className="part-6 row justify-content-center mt-5">
                <div className="leaderScren offset-3 col-12 mb-0 ">
                    {/* <div>
                            <h1 mx-5>follow the leader<br></br> lorem ipsum</h1>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br></br> sed diam nonumy eirmod tempor invidunt ut labore</p>
                        </div> */}
                </div>
                <div className="screen-2 col-12 offset-3 mt-5 ">
                    <div className="col-9">
                        <h1 mx-5>follow the leader lorem<br></br> ipsum dolor sit amet,</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br></br> sed diam nonumy eirmod tempor invidunt ut labore</p>
                    </div>
                </div>
                <div className="screen-3 col-12  mt-5">
                    <div className="">
                        <h1 mx-5>follow the leader lorem<br></br> ipsum dolor sit amet,</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br></br> sed diam nonumy eirmod tempor invidunt ut labore</p>
                    </div>
                </div>
                <div className="screen-4 offset-3 col-12 mt-5 "></div>
                <div className="screen-5 col-12 offset-3 my-5 ">
                    <div className="col-9">
                        <h1 mx-5>know me lorem ipsum <br></br>dolor sit amet,</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br></br> sed diam nonumy eirmod tempor invidunt ut labore</p>
                    </div>
                </div>
            </div>
            <div className="part-6-a row justify-content-center row align-items-center">
                <div className="col-4 ">
                    <h1 mx-5>know me lorem ipsum <br></br>dolor sit amet,</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br></br> sed diam nonumy eirmod tempor invidunt ut labore</p>
                </div>
                <img className="col-4" src={phone}></img>
            </div>



            <div className="container-fluid desk-part-7">
                <div className="row justify-content-center sign pt-5">
                    <div className="col-4">
                        <img className="boy" src={boy}></img>
                    </div>
                    <div className="steps col-5 pt-5">
                        <h1 className="">Let’s talk</h1>
                        <label for="full-name">Full Name</label><br></br>
                        <input type="text" id="full-name" name="fullname"></input><br></br>
                        <label for="email">Last Name</label><br></br>
                        <input type="text" id="email" name="lastname"></input><br></br>
                        <label for="your-massage">Your Massage</label><br></br>
                        <input type="text" id="your-massage" name="your-massage"></input><br></br>
                        <button className="call-us"></button>
                        <div className="row details  ">
                            <img src={location}></img>
                            <p>bar-kochva 4 bnei-brak</p>
                            <img src={phoneIcon}></img>
                            <p>03-1234567</p>
                            <img src={mail}></img>
                            <p>info@leader.codes</p>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
}
