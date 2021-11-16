import React from 'react';
import { useHistory } from 'react-router';
import { useState } from 'react/cjs/react.development';
import { Dr } from '../Data/Data';
// import { Dr } from '../Data/Data';
import DoctorDetails from './DoctorDetails';

const Doctors = () => {
    // const [doctor, setDoctor] = useState(Dr)
    const doctor = Dr;
    const [info, setInfo] = useState({})
    const history = useHistory()
    const handleInfo = (data) => {
        console.log(data)
        history.push('/form')
    }
    return (
        <div className="container">
            <div className="row">
                {
                    doctor.map((doctor) => {
                        return <DoctorDetails handleInfo={handleInfo} key={doctor.id} doctor={doctor} />
                    })
                }
            </div>


        </div>
    );
};

export default Doctors;