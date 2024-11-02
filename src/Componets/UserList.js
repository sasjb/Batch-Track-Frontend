import React, { useEffect, useState } from 'react';
import {deleteUser, getUsers} from '../api/userApi';
import {Button, Container, Table} from "react-bootstrap";
import {toast} from "react-toastify";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [load,reload] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await getUsers();
            setUsers(response.data.allUser
            );
            console.log(response.data.allUser);
        };
        fetchUsers();
    }, [load]);

    const userDelete = async (id) => {
        const res = await deleteUser(id);
        if(res){
            reload(!load)
            toast.success("User deleted successfully.");
        }else {
            toast.error("Something went wrong.");
        }
    }

    return (
        <Container>
            <h3 className="text-center">User List</h3>
            <Table hover striped variant="light" className="mt-3 bg-black">
                <thead>
                <tr>
                    <th>SL</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Home District</th>
                    <td>Action</td>
                </tr>
                </thead>
                <tbody>
                {users.map((user,idx) => (
                    <tr>
                        <td>{idx + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.homeDistrict}</td>
                        <td className="d-flex">
                            <Button variant="outline-dark" className="mx-2">Update</Button>
                            <Button variant="outline-danger" onClick={()=>userDelete(user.id)}>Delete</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default UserList;
