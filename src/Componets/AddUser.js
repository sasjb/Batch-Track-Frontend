import React, { useState } from 'react';
import { addUser } from '../api/userApi';
import { Button, Container, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

const AddUser = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        homeDistrict: '',
        photo: '',
    });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addUser(formData);
            toast.success("User added successfully");
            // Optionally reset the form
            setFormData({ name: '', email: '', phone: '', homeDistrict: '', photo: '' });
        } catch (error) {
            toast.error("Error adding user:");
            console.error('Error adding user', error);
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                    <Form.Label className="mt-2">Name</Form.Label>
                    <Form.Control
                        name="name"
                        onChange={handleChange}
                        placeholder="Enter name"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label className="mt-2">Email</Form.Label>
                    <Form.Control
                        name="email"
                        type="email"
                        onChange={handleChange}
                        placeholder="Enter email"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="phone">
                    <Form.Label className="mt-2">Phone</Form.Label>
                    <Form.Control
                        name="phone"
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="homeDistrict">
                    <Form.Label className="mt-2">Home District</Form.Label>
                    <Form.Control
                        name="homeDistrict"
                        onChange={handleChange}
                        placeholder="Enter home district"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="photo">
                    <Form.Label className="mt-2">Photo URL</Form.Label>
                    <Form.Control
                        name="photo"
                        onChange={handleChange}
                        placeholder="Enter photo URL"
                        required
                    />
                </Form.Group>
                <Button type="submit" variant="outline-dark" className="mt-3">Add User</Button>
            </Form>
        </Container>
    );
};

export default AddUser;
