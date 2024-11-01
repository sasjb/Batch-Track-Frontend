import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function RequestValidate(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const requestForm = [
        {
            level: "Enter a batch e-mail",
            placeholder: "Batch e-mail",
            name: "email",
            type: "email",
            required: true,
        },
    ];

    const validate = (data) => {
        axios.post("http://localhost:5000/api/batch-validate/validate", {}, {
            headers: {
                "Content-Type": "application/json",
                "email": data.email,
            }
        })
            .then((response) => {
                toast.success(response.data.message || "Validation successful!");
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.response?.data?.message || error.message);
            });
    };

    return (
        <Container>
            <form onSubmit={handleSubmit(validate)}>
                {requestForm.map((item, index) => (
                    <div className="form-group" key={index}>
                        <label htmlFor={item.name}>{item.level}</label>
                        <input
                            className="form-control mt-2"
                            type={item.type}
                            placeholder={item.placeholder}
                            {...register(item.name, { required: item.required })}
                        />
                        {errors[item.name] && (
                            <span className="text-danger">This field is required</span>
                        )}
                    </div>
                ))}
                <Button type="submit" variant="outline-dark" className="mt-2">
                    Submit
                </Button>
            </form>
        </Container>
    );
}

export default RequestValidate;
