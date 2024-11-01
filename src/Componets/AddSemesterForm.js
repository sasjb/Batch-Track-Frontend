// src/components/AddSemesterForm.js

import '../Assets/CSS/AddSemesterForm.css'; // Import the CSS

import React, { useState } from 'react';
import axios from 'axios';


const AddSemesterForm = () => {
    const [semesterName, setSemesterName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [relatedCourses, setRelatedCourses] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        try {
            const response = await axios.post('http://localhost:5000/api/semester/addsemester', {
                semesterName,
                startDate,
                endDate,
                relatedCourses: relatedCourses.split(','),
            });

            if (response.data) {
                setSuccessMessage(response.data.message);
                resetForm();
            }
        } catch (error) {
            if (error.response) {
                setErrorMessage(error.response.data.message || 'An unexpected error occurred.');
            } else {
                setErrorMessage('An unexpected error occurred.');
            }
        }
    };

    const resetForm = () => {
        setSemesterName('');
        setStartDate('');
        setEndDate('');
        setRelatedCourses('');
    };

    const handleStartDateChange = (e) => {
        const date = e.target.value;
        setStartDate(date);

        if (date) {
            const start = new Date(date);
            const endSuggestion = new Date(start.setMonth(start.getMonth() + 6));
            setEndDate(endSuggestion.toISOString().slice(0, 10));
        } else {
            setEndDate('');
        }
    };

    return (
        <div className="form-container">
            <h2>Add Semester</h2>
            {errorMessage && <div className="error">{errorMessage}</div>}
            {successMessage && <div className="success">{successMessage}</div>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Semester Name i.e. cse-49 4-2"
                    value={semesterName}
                    onChange={(e) => setSemesterName(e.target.value)}
                    required
                />
                <input
                    type="date"
                    placeholder="Start Date"
                    value={startDate}
                    onChange={handleStartDateChange}
                    required
                />
                <input
                    type="date"
                    placeholder="End Date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Related Courses (comma-separated)"
                    value={relatedCourses}
                    onChange={(e) => setRelatedCourses(e.target.value)}
                />
                <button type="submit">Add Semester</button>
            </form>
        </div>
    );
};

export default AddSemesterForm;
