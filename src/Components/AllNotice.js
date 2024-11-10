import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllNotice = () => {
  const noticeApi = "http://localhost:5000/api/notice/all-notice"; // API endpoint for fetching notices
  const [notices, setNotices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // State to manage error messages

  
  useEffect(() => {
    const fetchNotices = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(noticeApi);
        console.log("Notices fetched:", response.data);
       
        if (Array.isArray(response.data)) {
          setNotices(response.data);
        } else {
          setError("Unexpected data format.");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to fetch notices.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotices();
  }, []);

 
  const handleDelete = async (id) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${noticeApi}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete notice");
      }
      setNotices(notices.filter((notice) => notice.id !== id));
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>; 
  }

  if (error) {
    return <p>Error: {error}</p>; 
  }

  if (notices.length === 0) {
    return <h1>No notices found</h1>; 
  }

  return (
    <div className="mt-5">
      <h2>All Notices</h2>
      <Link to="/create-notice" className="btn btn-primary mb-3">Create Notice</Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {notices.map((notice) => (
            <tr key={notice.id}>
              <td>{notice.id}</td>
              <td>{notice.title}</td>
              <td>{notice.description}</td>
              <td>{notice.author}</td>
              <td>
                <Link to={`/edit-notice/${notice.id}`}>
                  <i className="fa fa-pencil" aria-hidden="true"></i>
                </Link>
                <i
                  className="fa fa-trash-o"
                  aria-hidden="true"
                  onClick={() => handleDelete(notice.id)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllNotice;
