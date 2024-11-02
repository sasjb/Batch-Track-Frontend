import React, {Fragment, useEffect, useState} from 'react';
import {deleteUser, getUsers} from '../api/userApi';
import {Button, Container, Table} from "react-bootstrap";
import {toast} from "react-toastify";
import UpdateUser from "./UpdateUser";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [user,setUser] = useState({});
    const [show,setShow] = useState(false);
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

    const showUpdateUser = (user) => {
        setUser(user);
        setShow(true);
    }

    const closeModal = () => {
        setShow(false);
    }

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
       <Fragment>
           <Container>
               <h3 className="text-center">User List</h3>
               <Table hover striped variant="light" className="mt-3 bg-black">
                   <thead>
                   <tr>
                       <th>SL</th>
                       <th>Name</th>
                       <th>Email</th>
                       <th>Phone</th>
                       <th>District</th>
                       <th>Photo</th>
                       <th>Action</th>
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
                           <td>{user.photo}</td>
                           <td className="d-flex">
                               <Button variant="outline-dark" className="mx-2" onClick={()=>showUpdateUser(user)}>Update</Button>
                               <Button variant="outline-danger" onClick={()=>userDelete(user.id)}>Delete</Button>
                           </td>
                       </tr>
                   ))}
                   </tbody>
               </Table>
           </Container>
           <UpdateUser data={user} show={show} onClose={closeModal} load={load} reload={reload}/>
       </Fragment>
    );
};

export default UserList;
