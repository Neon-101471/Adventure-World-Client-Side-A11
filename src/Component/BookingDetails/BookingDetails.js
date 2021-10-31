import React, { useEffect, useState } from 'react';
import './BookingDetails.css';
import { useParams } from 'react-router';

const BookingDetails = () => {
    const { id } = useParams();

    const [details, setDetails] = useState({})

    useEffect(() => {
        fetch(`https://shielded-refuge-27902.herokuapp.com/destinations/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    return (
        <div className="placeOrder-section container-fluid pb-4 pt-2">
                <div className="row single-details">
                    <div className="col-md-7">
                        <img src={details.img} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body col-md-4 description-section">
                        <h2 className="card-title">{details.name}</h2>
                        <h4 className="card-text text-danger">Package Booking Price: {details.price}</h4>
                        <p>{details.description}</p>
                        <button className="">Confirm Package</button>
                    </div>
                </div>
        </div>
    );
};

export default BookingDetails;