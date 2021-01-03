import React, { Component } from 'react';
import logoMenue from '../../mobile-img/logo-menue.png'
import star from '../../mobile-img/star.png'
import bag from '../../mobile-img/bag.png'
import contactPhone from '../../mobile-img/contact-phone.png'

export default function menu() {

    return (
        <div className="menue pt-4 d-block d-sm-none">
            <ul className=" container-fluid mt-5">
                <img src={logoMenue} className="ml-5"></img>
                <a href="#agile" className="row justify-content-center mt-4 ">AGILE שיטת</a>
                <li className="row justify-content-center mt-4 ">טכנולוגיות</li>
                <li className="row justify-content-center mt-4 ">פתרונות</li>
                <li className="row justify-content-center mt-4 ">פרוייקטים</li>
                <li className="row justify-content-center mt-4 ">שירות לקוחות</li>
            </ul>
        </div>
    );
}

