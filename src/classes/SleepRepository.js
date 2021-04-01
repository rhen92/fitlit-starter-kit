const dayjs = require('dayjs');

class SleepRepository {
  constructor(data) {
    this.usersSleep = data;
  }

  getAvgHoursSlept() {
    const avgHoursSlept = this.usersSleep.reduce((sum, data) => {
      sum += data.hoursSlept;
      return sum
    }, 0) / this.usersSleep.length;
  }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}
