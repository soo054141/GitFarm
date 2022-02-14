import {
  year,
  fillZero,
  customDate,
  getFebruary,
  checkLeapYear,
  getMonthCalendar,
} from "./date.js";

describe("윤년인지 아닌지 확인하는 test", () => {
  test("윤년입니다.", () => {
    const isLeap = 1640;
    const expected = true;
    expect(checkLeapYear(isLeap)).toBe(expected);
  });

  test("윤년이 아닙니다.", () => {
    const isNotLeap = 2022;
    const expected = false;
    expect(checkLeapYear(isNotLeap)).toBe(expected);
  });
});

describe("윤년여부에 따른 February 배열 test", () => {
  test(`${year}년 2월 배열`, () => {
    const isLeapYear = checkLeapYear(year);
    const february = getFebruary();
    const expected = isLeapYear
      ? Array.from({ length: 29 }, () => 0)
      : Array.from({ length: 28 }, () => 0);
    expect(february).toStrictEqual(expected);
  });
});

describe("target을 targetLength 자리수로 맞춰고 앞 자리에 원하는 값을 채워주는 test", () => {
  test(`2를 02로 변경`, () => {
    const target = 2;
    const targetLength = 2;
    const padString = "0";
    const expected = "02";
    expect(fillZero(target, targetLength, padString)).toBe(expected);
  });
});

describe("month의 day를 배열로 출력하는 test", () => {
  test(`1월 Array`, () => {
    const month = "01";
    const expected = Array.from({ length: 31 }, () => 0);
    expect(getMonthCalendar(month)).toStrictEqual(expected);
  });

  test(`9월 Array`, () => {
    const month = "09";
    const expected = Array.from({ length: 30 }, () => 0);
    expect(getMonthCalendar(month)).toStrictEqual(expected);
  });
});

describe("year, month, day를 하나의 객체로 반환해주는 test", () => {
  test(`year: 1996, month: 2, day: 16`, () => {
    const year = 1996;
    const month = 2;
    const day = 16;
    const expected = { year, month, day };
    expect(customDate(year, month, day)).toStrictEqual(expected);
  });
});
