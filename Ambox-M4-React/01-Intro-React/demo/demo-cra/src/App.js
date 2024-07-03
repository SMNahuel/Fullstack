import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
//import ButtonComponent from './components/buttonComponent';
//import ClassComponent from "./components/buttonClassComponent";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Routes>


        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />

    </Routes>
  );
}

export default App;
