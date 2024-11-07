import React, { useContext } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import LoginContext from '../Context/LoginContext';
import { useForm } from 'react-hook-form';

function LoginModal() {
    const { show, handleClose, submitLogin } = useContext(LoginContext);

    const loginData = [
        {
            id: 'loginId1',
            level: 'Enter E-mail',
            placeholder: 'E-mail',
            name: 'email',
            type: 'email',
            required: true,
        },
        {
            id: 'loginPasswordId1',
            level: 'Enter Password',
            placeholder: 'Password',
            name: 'password',
            type: 'password',
            required: true,
        },
        {
            id: 'loginSecretId',
            level: 'Enter Login Secret',
            placeholder: 'Login Secret',
            name: 'secret',
            type: 'text',
            required: true,
        },
    ];

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        submitLogin(data);
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Login Info Modal</Modal.Title>
            </Modal.Header>

            <Form className="p-4" onSubmit={handleSubmit(onSubmit)}>
                {
                    loginData.map((item) => (
                        <Form.Group key={item.id} controlId={item.id}>
                            <Form.Label className="mt-2">{item.level}</Form.Label>
                            <Form.Control
                                type={item.type}
                                placeholder={item.placeholder}
                                {...register(item.name, { required: item.required })}
                            />
                            {errors[item.name] && (
                                <Form.Text className="text-danger">
                                    {item.level} is required
                                </Form.Text>
                            )}
                        </Form.Group>
                    ))
                }
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="outline-dark" type="submit">
                        Submit
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default LoginModal;
