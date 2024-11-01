import React, {Fragment} from 'react';
import RequestValidate from "../Components/Validate/RequestValidate";
import NavBar from "../Components/NavBar";

function Validate(props) {
    return (
       <Fragment>
           <NavBar/>
           <RequestValidate/>
       </Fragment>
    );
}

export default Validate;
