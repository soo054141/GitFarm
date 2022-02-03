import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Main } from "./pages/main";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
