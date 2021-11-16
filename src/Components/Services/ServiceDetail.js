import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { userContext } from '../../App';


const ServiceDetail = ({ service }) => {
    const [auths, setAuth] = useContext(userContext)
    const history = useHistory()
    const handleDetail = (data) => {
        setAuth(data)
        console.log(data)
        history.push(`/MoreDetails/${data.id}`)

    }

    
    return (
        <div className="col-md-4">
            <div className="card">
                <img src={require(`../../images/${service.image}`).default} alt="" />
                <div className="card-body">
                    <h5 className="fs-4 text-center">{service.name}</h5>
                    <p className="text-muted">{service.desc}</p>
                    <h5> ${service.price}</h5>
        <button  onClick={() => handleDetail(service)}  className="btn btn-success">CheckUP</button>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetail;