import React, { useEffect, useState } from 'react';
import './MainOffering.css';
import Offers from '../Offers/Offers';

const MainOffering = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://shielded-refuge-27902.herokuapp.com/destinations')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="destination-section p-3">
            <div className="container">
            <h1 className="my-5">Top Destination Packages</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    services.map(service => <Offers
                        key={service.key}
                        service={service}
                    ></Offers>)
                }
            </div>
            </div>
        </div>
    );
};

export default MainOffering;