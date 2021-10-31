import axios from 'axios';
import './ManageOrders.css';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const ManageOrders = () => {
    const [booking, setBooking] = useState([]);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        axios.post('https://shielded-refuge-27902.herokuapp.com/my-orders', data)
            .then(response => {
                if (response.data.insertedId) {
                    alert('New package successfully added.');
                    reset();
                }
            })
    }

    useEffect(() => {
        fetch(`https://shielded-refuge-27902.herokuapp.com/booking`)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 addPlace-section">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true, maxLength: 20 })} placeholder="Customer name" />
                        <input {...register("email", { required: true })} placeholder="Customer email" />
                        <input {...register("name", { required: true })} placeholder="Please import exactly in UI package name" />
                        <input className="bg-info rounded-2 p-1 border-0 fw-bold fs-4" type="submit" />
                    </form>
                </div>

                <div className="mb-4 col-md-6 pt-5 addPlace-section">
                    <h3 className="pt-4">My Orders!!!</h3>
                    {
                        booking.map(bookItem => <div key={bookItem.name}>
                            <h3>Order name: {bookItem.name}</h3>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageOrders;