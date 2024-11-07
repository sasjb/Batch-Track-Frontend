import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "../src/Assets/CSS/Custom.css";
import {Route, Routes} from "react-router-dom";
import Validate from "./Pages/Validate";
import AllStatus from "./Pages/AllStatus";
import React, {Fragment} from "react";
import Toast from "./Components/Toast";
import LoginContext from "./Context/LoginContext";
import LoginModal from "./Components/LoginModal";
import axios from "axios";
import {toast} from "react-toastify";

function App() {

    const [show, setShow] = React.useState(false);

    const handleClose = ()=>{
        setShow(!show);
    }

    const submitLogin = (e)=>{
        axios.post("http://localhost:5000/api/login/",e).then((response) => {
            toast.success(response.data.message);
        }).catch((err)=>{
            toast.error(err.response.data.message);
            console.log(err);
        })
    }

  return (
   <Fragment>
      <LoginContext.Provider value={{ show, handleClose,submitLogin }}>
          <Routes>
              <Route path="/" element={<Validate/>}/>
              <Route path="/allStatus" element={<AllStatus/>}/>
          </Routes>
          <Toast/>
          <LoginModal/>
      </LoginContext.Provider>
   </Fragment>
  );
}

export default App;
