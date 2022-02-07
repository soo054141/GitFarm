import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Badge } from "./pages/badge";
import { GoalSetting } from "./pages/goalSetting";
import { Main } from "./pages/main";
import { MonthlyCalender } from "./pages/monthlyCalender";
import { RankPage } from "./pages/rank";
import { Setting } from "./pages/setting";
import { MyPage } from "./pages/myPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/calender" element={<MonthlyCalender />} />
        <Route path="/badge" element={<Badge />} />
        <Route path="/rank" element={<RankPage />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/goal" element={<GoalSetting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
