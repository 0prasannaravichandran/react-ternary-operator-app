import React from "react";
import Login from './components/Login';

const isRegistered = true;
const currentTime = new Date().getHours();
const currentDate = new Date().toLocaleDateString();

function App() {
  return (
    <div className="container">
    {currentTime > 12 && <h3> {currentDate} </h3>}
    <div><h1>Hello</h1><Login isRegistered={isRegistered}/> </div>
    </div>
  );
}

export default App;
