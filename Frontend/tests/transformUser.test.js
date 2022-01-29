import transformUser from "./transformUser";

test("Should contain name after transformUser", () => {
    const user = { name: "test name", age: 20, address: "test address" };
    expect(transformUser(user)).toContain("test name"); // 포함여부를 확인(in)
});
