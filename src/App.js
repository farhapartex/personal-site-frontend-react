import React from "react";
import { Route, Routes } from "react-router-dom";
import RootPage from "./pages/RootPage";
import './App.css';
import NavMenu from "./component/NavMenu";


function App() {
  return (
    <div className="App">
      <NavMenu/>
        <Routes>
          <Route exact path="/" element={<RootPage/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
