import React, {Fragment} from 'react';
import NavBar from "../Components/NavBar";
import Statuses from "../Components/Validate/Statuses";

function AllStatus(props) {
    return (
       <Fragment>
           <NavBar/>
           <Statuses/>
       </Fragment>
    );
}

export default AllStatus;

