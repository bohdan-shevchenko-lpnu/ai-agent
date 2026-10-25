const { getGreeting } = require("../src/index");

describe("getGreeting", () => {
  test("returns the expected Hello World message", () => {
    expect(getGreeting()).toBe("Hello, World!");
  });
});
