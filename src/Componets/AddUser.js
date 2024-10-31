import React, { useState } from 'react';
import { addUser } from '../api/userApi';

const AddUser = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', homeDistrict: '', photo: '' });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addUser(formData);
            alert('User added successfully');
        } catch (error) {
            console.error('Error adding user', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" onChange={handleChange} placeholder="Name" required />
            <input name="email" onChange={handleChange} placeholder="Email" required />
            <input name="phone" onChange={handleChange} placeholder="Phone" required />
            <input name="homeDistrict" onChange={handleChange} placeholder="Home District" required />
            <input name="photo" onChange={handleChange} placeholder="Photo URL" required />
            <button type="submit">Add User</button>
        </form>
    );
};

export default AddUser;
