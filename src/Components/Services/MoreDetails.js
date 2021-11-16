import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './MoreDetails.css';

const MoreDetails = () => {
    const [auth, setAuth] = useContext(userContext);
    console.log(auth);
    return (
        <div className="container mb-5">
        <div className="row mt-5 pt-5">
            <div className="col-md-6">
                <img className="img-fluid" src={require(`../../images/${auth.image}`).default} alt="" />

            </div>
            <div className="col-md-6">
                <h5 className="text-primary text-center fw-bold fs-1">{auth.name}</h5>

                <p className="fs-6 fw-bold">{auth.more}</p>
                <p className="text-danger fw-bold fs-5">Costs: $ {auth.price}</p>
                <Link to="/service">  <button className="btn btn-warning">Back To Service</button></Link>
            </div>
        </div>



    </div>
    );
};

export default MoreDetails;