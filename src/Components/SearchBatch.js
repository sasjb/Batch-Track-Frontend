import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Table, Alert, Container } from "react-bootstrap";

const SearchBatch = () => {
  const [batchName, setBatchName] = useState("");
  const [batchData, setBatchData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);
    setErrorMessage("");
    setBatchData(null);
  
    try {
        const response = await axios.get("http://localhost:5000/api/batch/getbatchbyname"
            , {
            params: { name: batchName },
          });
          console.log(response.data);


      setBatchData(response.data);
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Search Batch by Name</h1>

      <Form>
        <Form.Group controlId="batchName">
          <Form.Label>Batch Name</Form.Label>
          <Form.Control
            type="text"
            value={batchName}
            onChange={(e) => setBatchName(e.target.value)}
            placeholder="Enter batch name"
          />
        </Form.Group>

        <Button variant="primary" onClick={handleSearch} disabled={isLoading}>
          {isLoading ? "Searching..." : "Search"}
        </Button>
      </Form>

      {errorMessage && (
        <Alert variant="danger" className="mt-3">
          {errorMessage}
        </Alert>
      )}

      {batchData && (
        <Table striped bordered hover className="mt-4">
          <thead>
            <tr>
              <th>Name</th>
              <th>Session</th>
              <th>Profile Picture</th>
              <th>Cover Picture</th>
            </tr>
          </thead>
          <tbody>
            {batchData.map((batch, index) => (
              <tr key={index}>
                <td>{batch.name}</td>
                <td>{batch.session}</td>
                <td>
                  <img
                    src={batch.profilePic}
                    alt="Profile Pic"
                    style={{ width: "50px", height: "50px", objectFit: "cover" }}
                  />
                </td>
                <td>
                  <img
                    src={batch.coverPic}
                    alt="Cover Pic"
                    style={{ width: "50px", height: "50px", objectFit: "cover" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default SearchBatch;
