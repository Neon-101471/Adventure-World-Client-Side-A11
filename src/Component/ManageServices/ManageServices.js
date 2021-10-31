import React, { useEffect, useState } from 'react';
import './ManageServices.css';

const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://shielded-refuge-27902.herokuapp.com/destinations')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this??');
        if (proceed) {
            const url = `https://shielded-refuge-27902.herokuapp.com/destinations/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Successfully delete this package');
                        const remaining = services.filter(service => service._id !== id);
                        setServices(remaining);
                    }
                })
        }
    }

    return (
        <div className="manage-section">
            <h2 className="mt-4 mb-5">Manage Your Services</h2>
            <div className="manage-container">
                {
                    services.map(service => <div key={service._id} className="manage-single-service">
                        <img src={service.img} alt="" className="" />
                        <h3 className="me-3">{service.name}</h3>
                        <button>Update</button>
                        <button className="ms-3" onClick={() => handleDelete(service._id)}>Delete</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageServices;