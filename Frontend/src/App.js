import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Badge } from "./pages/badge";
import { Main } from "./pages/main";
import { MonthlyCalender } from "./pages/monthlyCalender";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/calender" element={<MonthlyCalender />}></Route>
        <Route path="/badge" element={<Badge />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
