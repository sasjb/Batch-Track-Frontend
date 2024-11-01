import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateNotice = () => {
  const createNoticeFormData = [
    {
      level: "Title",
      placeholder: "Title",
      type: "text",
      name: "title",
      required: true,
    },
    {
      level: "Description",
      placeholder: "Description",
      type: "text",
      name: "description",
      required: true,
    },
    {
      level: "Author",
      placeholder: "Author",
      type: "text",
      name: "author",
      required: true,
    },
  ];

  const { register, handleSubmit, formState: { errors } } = useForm();

  const formSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/api/notice/create", data);
      if (response.status === 201) {
        toast.success("Notice created successfully!");
      }
    } catch (err) {
      // Improved error logging
      console.error("Error details:", err.response ? err.response.data : err);
      toast.error("Failed to create notice. Please check the fields and try again.");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row py-4">
          <div className="col-md-6">
            <h3>Create A New Notice</h3>
          </div>
        </div>
        <div className="card border-0 shadow p-3">
          <form onSubmit={handleSubmit(formSubmit)}>
            {createNoticeFormData.map((data, id) => (
              <div className="mb-3" key={id}>
                <label>{data.level}</label>
                <input
                  type={data.type}
                  placeholder={data.placeholder}
                  {...register(data.name, { required: data.required })}
                  className={`form-control ${errors[data.name] ? 'is-invalid' : ''}`}
                />
                {errors[data.name] && <p className="invalid-feedback">This field is required</p>}
              </div>
            ))}
            <button className="btn btn-primary" type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="col-md-6 text-end">
        <Link to="/users" className="btn btn-primary">Back</Link>
      </div>
      <ToastContainer />
    </>
  );
};

export default CreateNotice;
