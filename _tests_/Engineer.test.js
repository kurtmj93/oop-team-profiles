// Include class to test
const Engineer = require("../lib/Engineer");

// I need to test the constructor setting github value
// Note: Employee.test.js tests other constructor values

test("Does constructor set a github value", () => {
    let github = "thruthe6withmywoes";
    let n = new Engineer("Drake", 111, "example@email.com", github);
    expect (n.github).toBe(github);
});

// I need to test getGithub()

test("Does getGithub() return github", () => {
    let n = new Engineer("Drake", 111, "example@email.com", "thruthe6withmywoes");
    expect(n.getGithub()).toBe("thruthe6withmywoes");
});

// I need to test that getRole() returns 'Engineer'

test("Does getRole() return 'Engineer'", () => {
    let n = new Engineer("Drake", 111, "example@email.com", "thruthe6withmywoes");
    expect(n.getRole()).toBe("Engineer");
});