import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "../src/Components/Login/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./Components/Register/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header"></div>
          <div className="content">
            <Routes>
              <Route path="/" element={<Navigate replace to="/login" />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
