import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Update with your backend's base URL

export const addUser = (userData) => axios.post(`${API_URL}/api/user/saveUser`, userData);
export const deleteUser = (userId) => axios.delete(`${API_URL}/api/user/deleteUser/${userId}`);
export const updateUser = (userId, updatedData) => axios.put(`${API_URL}/api/user/updateUser/${userId}`, updatedData);
export const getUsers = () => axios.get(`${API_URL}/api/user/getAllUsers`);
