import './App.css';
import "../src/Assets/CSS/Custom.css";
import AddSemesterForm from './Componets/AddSemesterForm';
import {Fragment} from "react";

function App() {
  return (
   <Fragment>
      <div className="App">
      <AddSemesterForm />
    </div>
   </Fragment>
  );
}

export default App;
