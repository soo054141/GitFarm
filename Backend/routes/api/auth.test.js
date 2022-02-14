import "regenerator-runtime";
import request from "supertest";
import app from "../../server.js";

describe("/api/auth", () => {
  test("GitHub 로그인 페이지 접속", async () => {
    const response = await request(app).get("/api/auth/github").send();
    const expected = 302;
    expect(response.statusCode).toEqual(expected);
  });

  test("GitHub 인증이 정상적으로 진행된 경우", async () => {
    const response = await request(app).get("/api/auth/login/success").send();
    const expectedStatus = 200;
    const expectedBody = {
      success: true,
      message: "로그인이 정상적으로 완료 되었습니다.",
    };

    expect(response.statusCode).toEqual(expectedStatus);
    expect(response._body).toStrictEqual(expectedBody);
  });

  test("GitHub 인증이 비정상적으로 진행된 경우", async () => {
    const response = await request(app).get("/api/auth/login/failed").send();
    const expectedStatus = 401;
    const expectedBody = {
      success: false,
      message: "Unauthorized",
    };

    expect(response.statusCode).toEqual(expectedStatus);
    expect(response._body).toStrictEqual(expectedBody);
  });

  test("GitHub 로그아웃 한 경우", async () => {
    const response = await request(app).get("/api/auth/logout").send();
    const expectedStatus = 302;
    const expectedLocation = "http://localhost:1111/";
    expect(response.statusCode).toEqual(expectedStatus);
    expect(response.headers.location).toStrictEqual(expectedLocation);
  });
});
