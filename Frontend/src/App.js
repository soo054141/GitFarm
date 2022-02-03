import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Main } from "./pages/main";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main></Main>}></Route>
    </Routes>
  );
}

export default App;
