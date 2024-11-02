import React, { useState, useEffect } from 'react';
import { updateUser } from '../api/userApi';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {toast} from "react-toastify"; // Ensure Bootstrap CSS is included

const UpdateUser = ({ data, show, onClose,load,reload }) => {
    const [userId, setUserId] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        homeDistrict: '',
        photo: '',
    });

    // Pre-fill the form data when the component mounts or when data changes
    useEffect(() => {
        if (data) {
            setUserId(data.id); // Assuming data has an 'id' property
            setFormData({
                name: data.name || '',
                email: data.email || '',
                phone: data.phone || '',
                homeDistrict: data.homeDistrict || '',
                photo: data.photo || '',
            });
        }
    }, [data]);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await updateUser(userId, formData);
            toast.success("User updated successfully");
            onClose();
            reload(!load);
        } catch (error) {
            console.error('Error updating user:', error);
            toast.error("Error updating user");
        }
    };

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleUpdate}>
                    <Form.Label className="mt-2">Name</Form.Label>
                    <Form.Group controlId="name">
                        <Form.Control
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            required
                        />
                    </Form.Group>
                    <Form.Label className="mt-2">Email</Form.Label>
                    <Form.Group controlId="email">
                        <Form.Control
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                        />
                    </Form.Group>
                    <Form.Label className="mt-2">Phone</Form.Label>
                    <Form.Group controlId="phone">
                        <Form.Control
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                            required
                        />
                    </Form.Group>
                    <Form.Label className="mt-2">Home District</Form.Label>
                    <Form.Group controlId="homeDistrict">
                        <Form.Control
                            name="homeDistrict"
                            value={formData.homeDistrict}
                            onChange={handleChange}
                            placeholder="Home District"
                            required
                        />
                    </Form.Group>
                    <Form.Label className="mt-2">Photo url</Form.Label>
                    <Form.Group controlId="photo">
                        <Form.Control
                            name="photo"
                            value={formData.photo}
                            onChange={handleChange}
                            placeholder="Photo URL"
                            required
                        />
                    </Form.Group>
                    <Modal.Footer>
                        <Button variant="outline-danger" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button type="submit" variant="outline-dark">
                            Update User
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default UpdateUser;
