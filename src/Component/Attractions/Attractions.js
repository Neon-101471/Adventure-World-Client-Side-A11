import React, { useEffect, useState } from 'react';
import './Attractions.css';
import Attraction from '../Attraction/Attraction';

const Attractions = () => {
    const [attractions, setAttractions] = useState([]);

    useEffect(() => {
        fetch('https://shielded-refuge-27902.herokuapp.com/attractive-place')
            .then(res => res.json())
            .then(data => setAttractions(data))
    }, [])

    return (
        <div className="attraction-section">
            <div className="container">
                <h1 className="my-5">Top Attractions</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        attractions.map(attraction => <Attraction
                            key={attraction.id}
                            attraction={attraction}
                        >
                        </Attraction>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Attractions;