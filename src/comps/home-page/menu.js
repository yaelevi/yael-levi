import React, { Component } from 'react';
import logoMenue from '../../mobile-img/logo-menue.png'
import star from '../../mobile-img/star.png'
import bag from '../../mobile-img/bag.png'
import contactPhone from '../../mobile-img/contact-phone.png'

export default function menu() {

    return (

        <div className="menue">
            <div className="container-fluid offset-1 ">
                <div className="row justify-content mt-5">
                    <img src={logoMenue} className="col-10 my-5"></img>
                </div>
                <div className="row mt-5 d-flex justify-content-center align-items-center">
                    <img src={star} className=""></img>
                    <p className="col-10 col mt-2">1,2,3 to map</p>
                </div>
                <div className="row mt-3 d-flex justify-content-center align-items-center">
                    <img src={bag} className=""></img>
                    <p className="col-10 mt-2">our projects</p>
                </div>
                <div className="row mt-3 d-flex justify-content-center align-items-center">
                    <img src={contactPhone} className=""></img>
                    <p className="col-10 mt-2">contact us</p>
                </div>
                <div className="row mt-3 d-flex justify-content-center align-items-center">
                    <img src={bag} className=""></img>
                    <p className="col-10 mt-2">עברית</p>
                </div>
            </div>
        </div>
    );
}


