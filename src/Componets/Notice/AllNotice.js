import React, { useState, useEffect } from 'react';
import { Container, Table, Spinner } from 'react-bootstrap';
import {getAllNotice} from "../../api/noticeApi";  // For displaying a table of notices

function AllNotice() {
    // State to store the list of notices and loading state
    const [notices, setNotices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch notices when the component is mounted
    useEffect(() => {
        const fetchNotices = async () => {
            try {
                // Make API call to get all notices (replace with your actual API endpoint)
                const response = await getAllNotice();
                if (response.data && response.data.notices) {
                    setNotices(response.data.notices);  // Store the fetched notices
                }
                setLoading(false);  // Update loading state
            } catch (err) {
                setError('Failed to fetch notices.');  // Handle error
                setLoading(false);  // Update loading state
            }
        };

        fetchNotices();
    }, []);  // Empty dependency array ensures this runs only once when the component mounts

    if (loading) {
        // Display loading spinner while data is being fetched
        return (
            <Container>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </Container>
        );
    }

    if (error) {
        // Display error message if there was an issue fetching data
        return (
            <Container>
                <p>{error}</p>
            </Container>
        );
    }

    return (
        <Container>
            <h2 className="mt-4">All Notices</h2>
            {/* Display notices in a table */}
            <Table striped bordered hover responsive>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Audience Type</th>
                    <th>Department ID</th>
                    <th>Created At</th>
                </tr>
                </thead>
                <tbody>
                {/* Loop over notices and display each one in a table row */}
                {notices.map((notice) => (
                    <tr key={notice._id}>
                        <td>{notice.title}</td>
                        <td>{notice.content}</td>
                        <td>{notice.audienceType}</td>
                        <td>{notice.departmentId}</td>
                        <td>{new Date(notice.timestamp).toLocaleString()}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default AllNotice;
