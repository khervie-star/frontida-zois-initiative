import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TopNavigation from "./components/molecules/topNav";
import Navbar from "./components/molecules/navbar";

function App() {
  return (
    <div className="App">
      <TopNavigation />
      <Navbar />
    </div>
  );
}

export default App;
