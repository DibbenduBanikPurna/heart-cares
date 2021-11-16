import React from 'react';
//import Banners from '../../images/slide1.jpg'
import { Card, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import './Banner.css';
import Home from '../Home/Home';
import { Link } from 'react-router-dom';
import Doctors from '../Doctors/Doctors';

const Banner = () => {
    return (
        <div className="baner">
            <Card inverse>
                <CardImg className="pro" style={{ opacity: '0.9' }} width="100%" alt="" />
                <CardImgOverlay>
                    <div className="text-center text-light mt-5 pt-5">

                        <CardText><h1 className="text-light">Complete Comprehensive and <br />Compossionate Cardiac Care</h1></CardText>
                        <CardText>
                            <Link to="/service">
                                <button className="btn btn-danger">Our Services</button></Link>
                        </CardText>

                    </div>
                </CardImgOverlay>
            </Card>
            <Home />
            <Doctors />

        </div>
    );
};

export default Banner;