import React, { useState } from 'react';
import { updateUser } from '../api/userApi';

const UpdateUser = () => {
    const [userId, setUserId] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        homeDistrict: '',
        photo: '',
    });

    const handleUserIdChange = (e) => setUserId(e.target.value);
    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await updateUser(userId, formData);
            alert('User updated successfully');
        } catch (error) {
            console.error('Error updating user:', error);
            alert('Failed to update user');
        }
    };

    return (
        <div>
            <h3>Update User</h3>
            <input
                type="text"
                value={userId}
                onChange={handleUserIdChange}
                placeholder="Enter User ID"
                required
            />
            <form onSubmit={handleUpdate}>
                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                />
                <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    required
                />
                <input
                    name="homeDistrict"
                    value={formData.homeDistrict}
                    onChange={handleChange}
                    placeholder="Home District"
                    required
                />
                <input
                    name="photo"
                    value={formData.photo}
                    onChange={handleChange}
                    placeholder="Photo URL"
                    required
                />
                <button type="submit">Update User</button>
            </form>
        </div>
    );
};

export default UpdateUser;
