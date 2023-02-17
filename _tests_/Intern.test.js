// Include class to test
const Intern = require("../lib/Intern");

// I need to test the constructor setting school value
// Note: Employee.test.js tests other constructor values

test("Does constructor set a school value", () => {
    let school = "University of Richmond";
    let n = new Intern("Drake", 111, "example@email.com", school);
    expect (n.school).toBe(school);
});

// I need to test getSchool()

test("Does getSchool() return school", () => {
    let n = new Intern("Drake", 111, "example@email.com", "University of Richmond");
    expect(n.getSchool()).toBe("University of Richmond");
});

// I need to test that getRole() returns 'Intern'

test("Does getRole() return 'Intern'", () => {
    let n = new Intern("Drake", 111, "example@email.com", "University of Richmond");
    expect(n.getRole()).toBe("Intern");
});