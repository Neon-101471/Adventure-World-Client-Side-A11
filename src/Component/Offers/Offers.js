import React from 'react';
import { Link } from 'react-router-dom';
import './Offers.css'
const Offers = (props) => {
    const { _id, img, name, price, cost, description } = props.service;
    return (
        <div>
            <div className="col">
                <div className="card">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title text-secondary">{name}</h3>
                        <h5 className="pb-2">Package Charge: ${price}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">{cost}</p>
                        <Link to={`/package-details/${_id}`}>
                            <button className="book-button">Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;