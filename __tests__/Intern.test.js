const Intern = require("../lib/Intern");

test("Generate object for Intern", () => {
  const intern = new Intern(
    "Alberto Monroy",
    80,
    "firewind3882@gmail.com",
    "Tech de Monterrey"
  );
  expect(intern.school).toEqual(expect.any(String));
  expect(intern.getRole()).toEqual("Intern");
});
