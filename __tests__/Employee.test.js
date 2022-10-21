const Employee = require("../lib/Employee");

test("Generate object for Employee", () => {
  const employee = new Employee("Alberto Monroy", 01, "firewind3882@gmail.com");
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("Checks employee methods", () => {
  const employee = new Employee("Alberto", 01, "firewind3882@gmail.com");
  expect(employee.getName()).toBe(employee.name);
  expect(employee.getId()).toBe(employee.id);
  expect(employee.getEmail()).toBe(employee.email);
  expect(employee.getRole()).toBe("Employee");
});
