const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    //unique property for this constructor.
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

const internArr = [
  {
    type: `input`,
    name: `name`,
    message: `Type your Intern's name`,
  },

  {
    type: `input`,
    name: `id`,
    message: `Type your Intern's id`,
  },

  {
    type: `input`,
    name: `name`,
    message: `Type your Intern's Email`,
  },

  {
    type: `input`,
    name: `name`,
    message: `Type your Intern's School`,
  },
];
//Exporting this constructor and array.
module.exports = { Intern, internArr };
