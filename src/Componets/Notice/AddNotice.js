import React, { useState } from 'react';
import { addNotice } from '../../api/noticeApi';
import { Button, Container, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

const AddNotice = () => {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        audienceType: '',
        departmentId: '',
    });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addNotice(formData); // Calls your API to send the notice
            toast.success("Department notice sent successfully");
            // Optionally reset the form
            setFormData({ title: '', content: '', audienceType: '', departmentId: '' });
        } catch (error) {
            toast.error("Error sending department notice");
            console.error('Error sending department notice', error);
        }
    };

    return (
        <Container>
            <h2 className="mt-4">Send Department Notice</h2>
            <Form onSubmit={handleSubmit}>
                {/* Title Input */}
                <Form.Group controlId="title">
                    <Form.Label className="mt-2">Notice Title</Form.Label>
                    <Form.Control
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Enter notice title"
                        required
                    />
                </Form.Group>

                {/* Content Input */}
                <Form.Group controlId="content">
                    <Form.Label className="mt-2">Notice Content</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        placeholder="Enter notice content"
                        required
                    />
                </Form.Group>

                {/* Audience Type Input */}
                <Form.Group controlId="audienceType">
                    <Form.Label className="mt-2">Audience Type</Form.Label>
                    <Form.Control
                        as="select"
                        name="audienceType"
                        value={formData.audienceType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Audience Type</option>
                        <option value="employees">Employees</option>
                        <option value="management">Management</option>
                        <option value="all">All</option>
                    </Form.Control>
                </Form.Group>

                {/* Department ID Input */}
                <Form.Group controlId="departmentId">
                    <Form.Label className="mt-2">Department ID</Form.Label>
                    <Form.Control
                        name="departmentId"
                        value={formData.departmentId}
                        onChange={handleChange}
                        placeholder="Enter department ID"
                        required
                    />
                </Form.Group>

                {/* Submit Button */}
                <Button type="submit" variant="outline-dark" className="mt-3">
                    Send Notice
                </Button>
            </Form>
        </Container>
    );
};

export default AddNotice;
