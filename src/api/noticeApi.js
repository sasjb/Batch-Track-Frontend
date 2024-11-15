import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const addNotice = (userData) => axios.post(`${API_URL}/api/addNotice/sendNotice`, userData);
export const getAllNotice = (userData) => axios.get(`${API_URL}/api/addNotice/notices`);