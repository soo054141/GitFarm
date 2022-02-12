import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import React from "react";
import RankPage from ".";

describe("RankPage 테스트", () => {
  test("나의순위 텍스트가 있는지 확인합니다", () => {
    render(<RankPage />);
    expect(screen.getByText(/깃팜 부농/)).toBeInTheDocument();
  });
});
