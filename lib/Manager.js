const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.OfficeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.OfficeNumber;
  }

  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;