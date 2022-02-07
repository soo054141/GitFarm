import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Badge } from "./pages/badge";
import { Main } from "./pages/main";
import { MonthlyCalender } from "./pages/monthlyCalender";
import { RankPage } from "./pages/rank";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/calender" element={<MonthlyCalender />}></Route>
        <Route path="/badge" element={<Badge />}></Route>
        <Route path="/rank" element={<RankPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
