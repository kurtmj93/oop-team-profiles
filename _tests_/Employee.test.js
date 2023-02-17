// Include class to test
const Employee = require("../lib/Employee");

// I need to test the constructor setting values

test("Does constructor set a name", () => {
    let name = "Drake";
    let n = new Employee(name);
    expect (n.name).toBe(name);
});

test("Does constructor set an id", () => {
    let id = 111;
    let i = new Employee("Drake", id);
    expect(i.id).toBe(id);
});

test("Does constructor set an email", () => {
    let email = 'example@email.com';
    let e = new Employee("Drake", 111, email);
    expect(e.email).toBe(email);
});

// I need to test getName()

test("Does getName() return name", () => {
    let n = new Employee("Drake", 111, "example@email.com");
    expect(n.getName()).toBe("Drake");
});

// I need to test getId()

test("Does getId() return id", () => {
    let n = new Employee("Drake", 111, "example@email.com");
    expect(n.getId()).toBe(111);
});


// I need to test getEmail()

test("Does getEmail() return email", () => {
    let n = new Employee("Drake", 111, "example@email.com");
    expect(n.getEmail()).toBe("example@email.com");
});

// I need to test getRole()

test("Does getRole() return 'Employee'", () => {
    let n = new Employee("Drake", 111, "example@email.com");
    expect(n.getRole()).toBe("Employee");
});