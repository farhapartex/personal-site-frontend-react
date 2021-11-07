import React from "react";
import { Route, Routes } from "react-router-dom";
import RootPage from "./pages/RootPage";
import './App.css';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<RootPage/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
