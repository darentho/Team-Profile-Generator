const Employee = require("../lib/Employee");

test("Generate object for Employee", () => {
  const employee = new Employee("Alberto Monroy", 80, "firewind3882@gmail.com");
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});
//Check for Employee methods.

test("gets methods", () => {
  const employee = new Employee("Alberto Monroy", 80, "firewind3882@gmail.com");
  expect(employee.getName()).toEqual(expect.any(String));
  expect(employee.getId()).toEqual(expect.any(Number));
  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
  expect(employee.getRole()).toEqual("Employee");
});
