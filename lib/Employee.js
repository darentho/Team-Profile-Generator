//This constructor will serve as foundation for the other constructors inside the lib.
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

const managerArr = [
  {
    type: `input`,
    name: `name`,
    message: `Type in the manager's name?`,
  },
  {
    type: `input`,
    name: `id`,
    message: `Type in the manager's Id?`,
  },
  {
    type: `input`,
    name: `email`,
    message: `Type in the manager's email?`,
  },
  {
    type: `input`,
    name: `officeNumber`,
    message: `Type in the manager's office number?`,
  },
];
//I'm exporting this module's constructor and array
module.exports = { Manager, managerArr };
