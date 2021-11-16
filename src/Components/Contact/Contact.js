import React from 'react';
// import { FaPhone, FaEnvelope, FaHospital, FaGlobe } from 'react-icons/fa';
import { useState } from 'react/cjs/react.development';

const Contact = () => {
    const [contactInfo, setContactInfo] = useState({})
    console.log(contactInfo)

    const handleChange = (e) => {
        setContactInfo({
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()

    }
    return (
        <div className="container">
            <div className="row">

                <div className="col-md-6 mt-5 pt-5">
                    <h5>Get In Touch</h5>
                    <form onSubmit={handleSubmit}>
                        <input onChange={handleChange} name="name" className="form-control" type="text" placeholder="Your Name" />
                        <br />
                        <input onChange={handleChange} name="email" className="form-control" type="email" placeholder="Email" />
                        <br />
                        <input onChange={handleChange} name="phone" className="form-control" type="number" placeholder="Phone" />
                        <br />

                        <input onChange={handleChange} name="subject" className="form-control" type="text" placeholder="Subject" />

                        <br />
                        <input onChange={handleChange} name="message" className="form-control" placeholder="your Message" type="textarea" />
                        <br />
                        <button className="btn btn-lg btn-danger">Get Contact</button>
                    </form>

                </div>
                <div className="col-md-6 mt-5 pt-5">
                    <h5>Contact Information</h5>
                    {/* <p><span style={{ fontSize: '40px', color: 'gray' }}><FaHospital /></span>cheryy Road, Wirral Road Heart care Building,United Kingdom</p>
                    <hr />
                    <p><span style={{ fontSize: '40px', color: 'gray' }}> <FaPhone></FaPhone> </span>+110 9876 5433 || +440 6589 9874</p>
                    <hr />
                    <p> <span style={{ fontSize: '40px', color: 'gray' }}> <FaEnvelope /> </span> For Inquiry: info@heartcare.com</p>
                    <hr />
                    <p> <span style={{ fontSize: '40px', color: 'gray' }}> <FaGlobe /> </span> For Details:www.Heartcare.com</p> */}
                </div>
            </div>


        </div>
    );
};

export default Contact;