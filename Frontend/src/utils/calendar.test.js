import * as calendar from "./calendar";

const firstDate = new Date(2021, 10, 28); // 2021/11/28
const lastDate = new Date(2021, 12, 1); // 2021/1/1
const date = new Date(2021, 11, 14); // date 12월 14일

describe("달력 그리기 위한 2차원 배열", () => {
  test("makeCalendar test", () => {
    expect(calendar.makeCalendar(firstDate, lastDate)).toEqual(
      expect.arrayContaining([
        expect.arrayContaining([
          {
            year: firstDate.getFullYear(),
            month: firstDate.getMonth() + 1,
            date: firstDate.getDate(),
          },
        ]),
        expect.arrayContaining([
          {
            year: lastDate.getFullYear(),
            month: lastDate.getMonth() + 1,
            date: lastDate.getDate(),
          },
        ]),
      ]),
    );
  });
});

describe("달력에 나타나는 첫째날 마지막날 구하기", () => {
  test("getFirstAndLastDate test", () => {
    expect(calendar.getFirstAndLastDate(date)).toEqual({
      firstDate,
      lastDate,
    });
  });
});
describe("서버에서 오는 값(날에 따른 commit 배열)과 달력의 배열 길이 맞추기", () => {
  test("matchDateCommit test", () => {
    const commitCountsPerDate = [
      1, 2, 3, 4, 5, 6, 7, 8, 2, 10, 11, 12, 13, 0, 30, 16, 17, 18, 19, 20, 21,
      10, 2, 57, 5, 4, 7, 2, 29, 30, 31,
    ];
    const expected = [
      0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 2, 10, 11, 12, 13, 0, 30, 16, 17, 18, 19,
      20, 21, 10, 2, 57, 5, 4, 7, 2, 29, 30, 31,
    ];

    expect(calendar.matchDateCommit(firstDate, commitCountsPerDate)).toEqual(
      expected,
    );
  });
});

describe("달략에 표시되는 커밋 개수에 따른 stage", () => {
  test("stageCalc", () => {
    const commitCountNum = 17;
    expect(calendar.stageCalc(commitCountNum)).toEqual(4);
  });
});
