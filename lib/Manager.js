const Employee = require('./employee');

class Manager extends Employee {
  constructor(officeNumber) {
    this.OfficeNumber = officeNumber;
  }
}

module.exports = Manager;