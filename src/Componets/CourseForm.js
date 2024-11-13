import React, { useState } from 'react';
import axios from 'axios';
import '../Assets/CSS/CourseForm.css';

const CourseForm = () => {
  const [courseCode, setCourseCode] = useState('');
  const [courseName, setCourseName] = useState('');
  const [courseHours, setCourseHours] = useState('');
  const [courseCredit, setCourseCredit] = useState('');
  const [prerequisites, setPrerequisites] = useState('');
  const [courseTeacher, setCourseTeacher] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/course/addCourse', {
        courseCode,
        courseName,
        courseHours,
        courseCredit,
        prerequisites,
        courseTeacher
      });

      setResponseMessage(response.data.message);
    } catch (error) {
      setResponseMessage(error.response?.data?.message || 'Failed to add course');
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add New Course</h2>
      <form onSubmit={handleSubmit} className="course-form">
        <div className="form-group">
          <label>Course Code:</label>
          <input
            type="text"
            value={courseCode}
            onChange={(e) => setCourseCode(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Course Name:</label>
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Course Hours:</label>
          <input
            type="number"
            value={courseHours}
            onChange={(e) => setCourseHours(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Course Credit:</label>
          <input
            type="number"
            value={courseCredit}
            onChange={(e) => setCourseCredit(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Prerequisites:</label>
          <input
            type="text"
            value={prerequisites}
            onChange={(e) => setPrerequisites(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Course Teacher:</label>
          <input
            type="text"
            value={courseTeacher}
            onChange={(e) => setCourseTeacher(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">Add Course</button>
      </form>
      {responseMessage && <p className="response-message">{responseMessage}</p>}
    </div>
  );
};

export default CourseForm;
