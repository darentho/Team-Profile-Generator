const Employee = require("./Employee");
//I'm extending Employee in order to get some values from it.
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  //Unique property for this constructor.
  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

//I'm exporting this module constructor and the array.
module.exports = Engineer;
