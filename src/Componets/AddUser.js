import React, { useState } from 'react';
import { addUser } from '../api/userApi';
import {Button, Container} from "react-bootstrap";
import {toast} from "react-toastify";

const AddUser = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', homeDistrict: '', photo: '' });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addUser(formData);
            toast.success("User added successfully");
        } catch (error) {
            toast.error("Error adding user:");
            console.error('Error adding user', error);
        }
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <input name="name" className="form-control mt-3" onChange={handleChange} placeholder="Name" required/>
                <input name="email" className="form-control mt-3" onChange={handleChange} placeholder="Email" required/>
                <input name="phone" className="form-control mt-3" onChange={handleChange} placeholder="Phone" required/>
                <input name="homeDistrict" className="form-control mt-3" onChange={handleChange} placeholder="Home District"
                       required/>
                <input name="photo" className="form-control mt-2" onChange={handleChange} placeholder="Photo URL" required/>
                <Button type="submit" variant="outline-dark" className="mt-3">Add User</Button>
            </form>
        </Container>
    );
};

export default AddUser;
