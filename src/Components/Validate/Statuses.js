import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';

function Statuses(props) {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/batch-validate/allValidateEmails")
            .then((response) => {
                setEmails(response.data.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    return (
        <Container>
            <Table striped hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>E-mail</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {emails.map((email, index) => (
                    <tr key={email.id || index}>
                        <td>{email.id}</td>
                        <td>{email.registerEmail}</td>
                        <td>{email.status ? "True" : "False"}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default Statuses;
