import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/Assets/CSS/Custom.css";
import {Fragment} from "react";

import React from 'react';
import AddUser from './Componets/AddUser';
import UserList from './Componets/UserList';
import {Route, Routes} from "react-router-dom";
import NavBar from "./Componets/NavBar";
import Toast from "./Componets/Toast";

function App() {
  return (
   <Fragment>
       <NavBar/>
      <Routes>
          <Route path="/" element={<AddUser/>} />
          <Route path="/userList" element={<UserList/>} />
      </Routes>
       <Toast/>
   </Fragment>
  );
}

export default App;
