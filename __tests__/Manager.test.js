const Manager = require("../lib/Manager");

test("generate manager object and gets role of employee", () => {
  const manager = new Manager(
    "Alberto Monroy",
    80,
    "firewind3882@gmail.com",
    556178393
  );
  expect(manager.officeNumber).toEqual(expect.any(Number));
  expect(manager.getRole()).toEqual("Manager");
});
