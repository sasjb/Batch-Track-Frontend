import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "../src/Assets/CSS/Custom.css";
import {Route, Routes} from "react-router-dom";
import Validate from "./Pages/Validate";
import AllStatus from "./Pages/AllStatus";
import {Fragment} from "react";
import Toast from "./Components/Toast";

function App() {
  return (
   <Fragment>
       <Routes>
           <Route path="/" element={<Validate/>}/>
           <Route path="/allStatus" element={<AllStatus/>}/>
       </Routes>
       <Toast/>
   </Fragment>
  );
}

export default App;
