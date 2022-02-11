import "@testing-library/jest-dom";
import CommitGoal from "./CommitGoal";

describe("defaultProps 값 테스트", () => {
  test("CommitGoal 컴포넌트에 defaultProps가 잘 전달되는지 확인합니다", () => {
    const result = CommitGoal.defaultProps;
    expect(result).toEqual({ goalNum: 3 });
  });
});
