import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddPlaces.css';

const AddPlaces = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        axios.post('https://shielded-refuge-27902.herokuapp.com/destinations', data)
            .then(response => {
                if (response.data.insertedId) {
                    alert('New package successfully added.');
                    reset();
                }
            })
    }
    return (
        <div className="addPlace-section">
            <h3 className="pt-5">Add New Destinations by Admin</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder=" Package/Place Name" />
                <textarea className="ps-1" {...register("description", { required: true })} placeholder="Package Description" />
                <input type="number" {...register("price", { required: true })} placeholder=" Total Cost" />
                <input {...register("img", { required: true })} placeholder=" Image Url " />
                <input className="bg-info rounded-2 p-1 border-0 fw-bold fs-4" type="submit" />
            </form>
        </div>
    );
};

export default AddPlaces;