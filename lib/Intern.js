const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    // a way to access the Employee class properties
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

// Export the Intern module so Node can access it
module.exports = Intern;
