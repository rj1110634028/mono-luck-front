import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './homepage';
import Apppage from './App';

const App=()=>{
  return( 
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/App" element={<Apppage/>}/>
      </Routes>
    </Router>
  );
}
export default App;

ReactDOM.render(
  <React.StrictMode>
     <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
