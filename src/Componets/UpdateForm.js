import React, { useState } from 'react';
import axios from 'axios';

const UpdateBatchForm = () => {
  const [formData, setFormData] = useState({
    batchId: '',
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Update form data when input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the batchId in headers and the data in the request body
      const response = await axios.put(
        'http://127.0.0.1:5000/api/batch/updateBatch',
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            'id': formData.batchId,
          },
        }
      );

      setSuccessMessage(response.data.message);
      setFormData({ batchId: '', name: '', email: '', password: '' });
    } catch (error) {
      console.error("Error updating batch:", error);
      setError(error.response ? error.response.data.message : "Failed to update batch information.");
    }
  };

  return (
    <div className="container mt-4">
      <h3>Update Batch Information</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="batchId" className="form-label">Batch ID</label>
          <input
            type="text"
            className="form-control"
            id="batchId"
            name="batchId"
            value={formData.batchId}
            onChange={handleChange}
            placeholder="Enter batch ID"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Batch Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter batch name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">New Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter new password"
          />
        </div>
        
        {error && <p className="text-danger">{error}</p>}
        {successMessage && <p className="text-success">{successMessage}</p>}
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default UpdateBatchForm;
