import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const AllNotice = () => {
    const [notices, setNotices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Fetch notices from API
    useEffect(() => {
        const fetchNotices = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/notice");
                setNotices(response.data);
            } catch (err) {
                setError("Failed to fetch notices.");
                toast.error("Error loading notices.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchNotices();
    }, []);

    const deleteNotice = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            axios
                .delete(`http://localhost:5000/api/notice/all-notice`)
                .then(() => {
                    setNotices(notices.filter((notice) => notice.id !== id));
                    toast.success("Notice deleted successfully.");
                })
                .catch((err) => {
                    toast.error("Failed to delete notice.");
                    console.error(err);
                });
        }
    };

    const handleCreateNotice = () => {
        navigate("/create-notice");
    };

    return (
        <>
            <div className="container">
                <div className="row py-4">
                    <div className="col-md-6">
                        <h3>Notices</h3>
                    </div>
                    <div className="col-md-6 text-end">
                        <button onClick={handleCreateNotice} className="btn btn-primary">Create Notice</button>
                    </div>
                </div>
                <div className="card border-0 shadow p-3">
                    {loading ? (
                        <div className="text-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : error ? (
                        <p className="text-danger">{error}</p>
                    ) : notices.length === 0 ? (
                        <p className="text-muted">No notices available. Click "Create Notice" to add one.</p>
                    ) : (
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Author</th>
                                    <th width="150">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {notices.map((notice, index) => (
                                    <tr key={notice.id}>
                                        <td>{index + 1}</td>
                                        <td>{notice.id}</td>
                                        <td>{notice.title}</td>
                                        <td>{notice.description}</td>
                                        <td>{notice.author}</td>
                                        <td>
                                            <button onClick={() => deleteNotice(notice.id)} className="btn btn-danger ms-1">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </>
    );
};

export default AllNotice;
