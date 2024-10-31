import React, { useState } from 'react';
import { deleteUser } from '../api/userApi';

const DeleteUser = () => {
    const [userId, setUserId] = useState('');

    const handleChange = (e) => setUserId(e.target.value);

    const handleDelete = async () => {
        try {
            await deleteUser(userId);
            alert('User deleted successfully');
            setUserId(''); // Clear the input after deletion
        } catch (error) {
            console.error('Error deleting user:', error);
            alert('Failed to delete user');
        }
    };

    return (
        <div>
            <h3>Delete User</h3>
            <input
                type="text"
                value={userId}
                onChange={handleChange}
                placeholder="Enter User ID"
                required
            />
            <button onClick={handleDelete}>Delete User</button>
        </div>
    );
};

export default DeleteUser;
