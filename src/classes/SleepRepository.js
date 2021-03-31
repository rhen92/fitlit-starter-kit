const dayjs = require('dayjs');

class SleepRepository {
  constructor(data) {
    this.usersSleep = data;
  }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}
