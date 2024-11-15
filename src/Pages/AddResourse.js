import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddResourse = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [succ, setSucc] = useState('');

    const onSubmit = async (data) => {
        setLoading(true);
        setError('');
        setSucc('');

        const margeData = {
          ...data,
          email :'jucse29@gmail.com',

        }
        try {
            const response = await axios.post('http://localhost:5000/api/resourse/addResourse', margeData);
            setSucc(response.data.message) ;
           
           
        } catch (error) {
            setError(error.response.data.message); 
           
        } finally {
            setLoading(false);
            reset();
        }
    };

    return (
        <section className="vh-100" style={{ borderRadius: 25 }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: 25 }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add Resource</p>
                                        <form className="mx-1 mx-md-4" onSubmit={handleSubmit(onSubmit)}>
                                            <div className="d-flex flex-row align-items-center mb-2">
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form3Example1c">Course Code</label>
                                                    <input
                                                        type="text"
                                                        id="form3Example1c"
                                                        className="form-control"
                                                        {...register("courseCode", { required: true })}
                                                        placeholder="Enter Course Code"
                                                    />
                                                    {errors.courseCode && <span>This field is required</span>}
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-2">
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form3Example3c">Course Title</label>
                                                    <input
                                                        type="text"
                                                        id="form3Example3c"
                                                        className="form-control"
                                                        {...register("resourceTitle", { required: true })}
                                                        placeholder="Enter Resource Title"
                                                    />
                                                    {errors.resourceTitle && <span>This field is required</span>}
                                                </div>
                                            </div>

                                            <div className="mb-2">
                                                <label className="form-label" htmlFor="descriptionTextarea">Description</label>
                                                <textarea
                                                    id="descriptionTextarea"
                                                    className="form-control"
                                                    rows="3"
                                                    {...register("resourceDescription", { required: true })}
                                                    placeholder="Enter resource description"
                                                ></textarea>
                                                {errors.resourceDescription && <span className="text-danger">This field is required</span>}
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-2">
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="fileInput1">Resource File</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="fileInput1"
                                                        {...register("resourceFile", { required: true })}
                                                    />
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
                                                    {loading ? 'Submitting...' : 'Submit'}
                                                </button>
                                            </div>
                                            {error && <div className="alert alert-danger">{error}</div>}
                                            {succ && <div className="alert alert-success">{succ}</div>}
                                        </form>
                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" className="img-fluid" alt="Sample" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddResourse;
