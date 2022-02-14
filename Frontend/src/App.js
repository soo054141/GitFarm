import React, { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoadingModal from "@/components/LoadingModal";

const Header = lazy(() => import("./components/Header"));
const Nav = lazy(() => import("./components/Nav"));
const Login = lazy(() => import("./pages/login"));
const Main = lazy(() => import("./pages/main"));
const MonthlyCalender = lazy(() => import("./pages/monthlyCalender"));
const RankPage = lazy(() => import("./pages/rank"));
const Graph = lazy(() => import("./pages/graph"));
const MyPage = lazy(() => import("./pages/myPage"));
const Setting = lazy(() => import("./pages/setting"));
const GoalSetting = lazy(() => import("./pages/goalSetting"));
const Badge = lazy(() => import("./pages/badge"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingModal />}>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/calender" element={<MonthlyCalender />} />
          <Route path="/rank" element={<RankPage />} />
          <Route path="/graph" element={<Graph />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/goal" element={<GoalSetting />} />
          <Route path="/badge" element={<Badge />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
