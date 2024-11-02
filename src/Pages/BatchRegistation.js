import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const BatchRegistation = () => {
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
       
    
        try {
          const fileInputs = ['profile', 'cover'];
          const filePromises = fileInputs.map(async (fileInput) => {
            const file = data[fileInput][0];
            const formData = new FormData();
            formData.append('image', file);
    
            const response = await fetch(`https://api.imgbb.com/1/upload?expiration=600&key=1cd54c6cc753c2e6a4f89b9f75a559a0`, {
              method: 'POST',
              body: formData,
            });
    
            const result = await response.json();
            if (!result.success) throw new Error('Image upload failed');
            return result.data.url; 
          });
    
          const [profileImageUrl, coverImageUrl] = await Promise.all(filePromises);
    
          const mergedData = {
            ...data,
            profilePic: profileImageUrl,
            coverPic: coverImageUrl,
          };
          try {
            const response = await axios.post('http://localhost:5000/api/batch/createbatch', mergedData);
              setSucc(response.data.message)  //handel error
        } catch (error) {
            setError(error.response.data.message); //handel error
        }
          reset();
        } catch (error) {
          setError(error.response.data.error);
        } finally {
          setLoading(false);
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
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit(onSubmit)}>
                      {/* Batch Name */}
                      <div className="d-flex flex-row align-items-center mb-2">
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example1c">Batch Name</label>
                          <input type="text" id="form3Example1c" className="form-control" name="batchname" {...register("name", { required: true })} placeholder="Enter Your Batch Name" />
                          {errors.batchname && <span>This field is required</span>}
                        </div>
                      </div>
                      {/* Batch Email */}
                      <div className="d-flex flex-row align-items-center mb-2">
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example3c">Batch Email</label>
                          <input type="email" id="form3Example3c" className="form-control" name="batchEmail" {...register("email", { required: true })} placeholder="Enter Your Batch Email" />
                          {errors.batchEmail && <span>This field is required</span>}
                        </div>
                      </div>
                      {/* Session Select */}
                      <div className="mb-2">
                        <label>Select an Option</label>
                        <select className="form-control" id="selectMenu" name="selectOption" {...register("session", { required: true })}>
                          <option value="">Open this select menu</option>
                          <option value="2019-2020">2019-2020</option>
                          <option value="2020-2021">2020-2021</option>
                          <option value="2021-2022">2021-2022</option>
                        </select>
                        {errors.session && <span>This field is required</span>}
                      </div>
                      {/* Profile Image */}
                      <div className="d-flex flex-row align-items-center mb-2">
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="fileInput1">Profile Image</label>
                          <input type="file" className="form-control" id="fileInput1" name="profileImage" {...register("profile", { required: true })} />
                          {errors.profileImage && <span>This field is required</span>}
                        </div>
                      </div>
                      {/* Cover Image */}
                      <div className="d-flex flex-row align-items-center mb-2">
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="fileInput2">Cover Image</label>
                          <input type="file" className="form-control" id="fileInput2" name="coverImage" {...register("cover", { required: true })} />
                          {errors.coverImage && <span>This field is required</span>}
                        </div>
                      </div>
                      {/* Password */}
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example4c">Password</label>
                          <input type="password" id="form3Example4c" className="form-control" name="password" {...register("password", { required: true })} placeholder="Enter Your Password" />
                          {errors.password && <span>This field is required</span>}
                        </div>
                      </div>
                      {/* Submit Button */}
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
                          {loading ? 'Registering...' : 'Register'}
                        </button>
                      </div>
                      {error && <div className="alert alert-danger">{error}</div>}
                      {succ &&  <div className="alert alert-success">{succ}</div> }
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

export default BatchRegistation;