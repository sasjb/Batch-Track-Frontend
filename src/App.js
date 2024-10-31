import './App.css';
import "../src/Assets/CSS/Custom.css";
import {Fragment} from "react";

import React from 'react';
import AddUser from './Componets/AddUser';
import UserList from './Componets/UserList';
import DeleteUser from './Componets/DeleteUser';
import UpdateUser from './Componets/UpdateUser';

function App() {
  return (
   <Fragment>
     <h4>Batch Track Frontend</h4>
     <p>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at distinctio explicabo fugit tempora totam ut vel. Animi cupiditate dolorem dolores eligendi error expedita, illum libero mollitia obcaecati perspiciatis placeat quidem repellat sapiente sed sequi sit unde vitae? Adipisci assumenda dolore eos error et explicabo mollitia placeat repudiandae voluptates voluptatum! Ab accusamus autem consequatur consequuntur corporis cum distinctio dolore doloremque eaque enim expedita illum laborum laudantium libero neque nihil obcaecati odio provident quis repellendus saepe sapiente, sed sequi, tempora totam ut velit voluptate. Amet autem debitis dolore, illum impedit maiores modi neque odio officia officiis provident quas, repellat sed temporibus?
     </p>

       <AddUser></AddUser>
       <UserList></UserList>
       <DeleteUser></DeleteUser>
       <UpdateUser></UpdateUser>
   </Fragment>
  );
}

export default App;
