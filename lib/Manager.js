const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // taking ids from Employee class
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
