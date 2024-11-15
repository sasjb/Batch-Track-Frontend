import './App.css';
import "../src/Assets/CSS/Custom.css";
import {Fragment} from "react";
import BatchRegistation from './Pages/BatchRegistation';
import AddResourse from './Pages/AddResourse';
function App() {
  return (
   <Fragment>
    {/* <BatchRegistation></BatchRegistation> */}
    <AddResourse></AddResourse>
   </Fragment>
  );
}

export default App;
