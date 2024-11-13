import './App.css';
import "../src/Assets/CSS/Custom.css";
import AddSemesterForm from './Componets/AddSemesterForm';
import {Fragment} from "react";
import CourseForm from './Componets/CourseForm';

function App() {
  return (
   <Fragment>
      <div className="App">
      {/* <AddSemesterForm /> */}
      <CourseForm/>
    </div>
   </Fragment>
  );
}

export default App;
