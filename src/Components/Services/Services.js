import React, { useState } from 'react';
import Treatment from '../Data/Data';
import ServiceDetail from './ServiceDetail';

const Services = () => {
    const [service, setService] = useState(Treatment)
    return (
        <div className="container">
            <div className="row">
                {
                    service.map((service) => {
                        return <ServiceDetail key={service.id} service={service} />
                    })
                }

            </div>
        </div>
    );
};

export default Services;