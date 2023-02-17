// Include class to test
const Manager = require("../lib/Manager");

// I need to test the constructor setting OffceNumber value
// Note: Employee.test.js tests other constructor values

test("Does constructor set an OfficeNumber value", () => {
    let number = 123;
    let n = new Manager("Drake", 111, "example@email.com", number);
    expect (n.OfficeNumber).toBe(number);
});

// I need to test getOfficeNumber()

test("Does getOfficeNumber() return office number", () => {
    let n = new Manager("Drake", 111, "example@email.com", 123);
    expect(n.getOfficeNumber()).toBe(123);
});

// I need to test that getRole() returns 'Manager'

test("Does getRole() return 'Manager'", () => {
    let n = new Manager("Drake", 111, "example@email.com", 123);
    expect(n.getRole()).toBe("Manager");
});