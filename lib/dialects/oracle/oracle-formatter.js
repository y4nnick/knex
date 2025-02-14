const Formatter = require('../../formatter');
const { ReturningHelper } = require('./utils');

class Oracle_Formatter extends Formatter {
  parameter(value, notSetValue) {
    // Returning helper uses always ROWID as string
    if (value instanceof ReturningHelper && this.client.driver) {
      value = new this.client.driver.OutParam(this.client.driver.OCCISTRING);
    } else if (typeof value === 'boolean') {
      value = value ? 1 : 0;
    }
    return super.parameter(value, notSetValue);
  }
}

module.exports = Oracle_Formatter;
