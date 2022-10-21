const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    //Unique property for this constructor.
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

//exporting constructor.
module.exports = Manager;
