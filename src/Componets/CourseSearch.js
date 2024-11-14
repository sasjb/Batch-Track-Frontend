import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function CourseSearch() {
  const [courseCode, setCourseCode] = useState('');
  const [course, setCourse] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/course/courses/${courseCode}`);
      console.log(response.data); // Check if the data structure matches
      if (response.data) {
        setCourse(response.data);
        setError(''); // Clear any previous error
      } else {
        setCourse(null);
        setError('Course not found');
      }
    } catch (err) {
      console.error(err); // Log any error
      setCourse(null);
      setError('Course not found');
    }
  };
  

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h3>Search Course by Course Code</h3>
        </div>
        <div className="card-body">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Course Code"
              value={courseCode}
              onChange={(e) => setCourseCode(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleSearch}>Search</button>
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          {course && (
            <div className="mt-3">
              <h4>Course Details</h4>
              <p><strong>Course Code:</strong> {course.code}</p>
              <p><strong>Course Name:</strong> {course.name}</p>
              <p><strong>Description:</strong> {course.description}</p>
              {/* Add more course details as needed */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseSearch;
