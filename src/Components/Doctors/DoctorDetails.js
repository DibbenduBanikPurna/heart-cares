import React from 'react';

const DoctorDetails = ({ doctor, handleInfo }) => {
    return (
        <div className="col-md-4 col-lg-4 m-5">
            <div className="card">
                <img className="img-fluid rounded-circle" src={require(`../../images/${doctor.image}`).default} alt="" />
                <h5 className="">{doctor.name}</h5>
                <p>Senior Cardiologist</p>
                <button onClick={() => handleInfo(doctor)} className="btn btn-primary">Appoint Now</button>
            </div>

        </div>
    );
};

export default DoctorDetails;