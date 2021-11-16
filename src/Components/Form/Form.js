import React, { useState } from 'react';
import Dr from '../../images/form-pic.jpg'
const Form = () => {
    const [appoinmentData, setAppoinmentData] = useState({})
    console.log(appoinmentData)

    const handleChange = (e) => {
        setAppoinmentData({
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()

    }
    return (
        <div className="container">
            <div className="row mt-5 pt-5">
                <div className="col-md-6">
                    <img src={Dr} alt="" />
                </div>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <input onChange={handleChange} name="name" className="form-control" type="text" placeholder="Enter Full Name" />
                        <br />
                        <input onChange={handleChange} name="email" className="form-control" type="email" placeholder="Enter Email" />
                        <br />
                        <input onChange={handleChange} name="visit_reason" className="form-control" type="text" placeholder="Visit Reason" />
                        <br />
                        <input onChange={handleChange} name="contact_no" className="form-control" type="number" placeholder="Enter Phone-No" />
                        <br />
                        <input onChange={handleChange} name="date" className="form-control" type="date" />
                        <br />
                        <input onChange={handleChange} name="time" className="form-control" type="text" defaultValue={"7.00 pm"} placeholder="Time" />
                        <br />
                        <input onChange={handleChange} name="message" placeholder="Extra Note" className="form-control" type="textarea" />
                        <br />
                        <label>Select Dr For Appoinment</label>
                        <br />
                        <br />
                        <select name="select-Dr" onChange={handleChange}>
                            <option value="Dr. Jackson Pollary">Dr. Jackson Pollary</option>
                            <option value="Dr. Goodwen Medon">Dr. Goodwen Medon</option>
                            <option value="Dr. Jackson Pollary">Dr. Jackson Pollary</option>
                            <option value="Dr. Rijon v."> Dr. Rijon v.</option>
                        </select>
                        <br />
                        <br />

                        <button type="submit" className="btn btn-lg btn-outline-danger">Book Appoinment</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Form;