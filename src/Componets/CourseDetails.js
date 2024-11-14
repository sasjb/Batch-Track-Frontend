import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CourseDetails = () => {
  const { courseCode } = useParams();
  const [course, setCourse] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/courses/${courseCode}`);
        setCourse(response.data.courses[0]);
        setError('');
      } catch (err) {
        console.error("Error fetching course details:", err);
        setCourse(null);
        setError(err.response ? err.response.data.message : "Course not found.");
      }
    };

    fetchCourseDetails();
  }, [courseCode]);

  return (
    <div className="container mt-4">
      <h3>Course Details</h3>
      {error && <p className="text-danger">{error}</p>}
      {course ? (
        <div>
          <p><strong>Course Code:</strong> {course.courseCode}</p>
          <p><strong>Course Name:</strong> {course.courseName}</p>
          <p><strong>Description:</strong> {course.description}</p>
          <p><strong>Credits:</strong> {course.credits}</p>
        </div>
      ) : (
        <p>Loading course details...</p>
      )}
    </div>
  );
};

export default CourseDetails;
