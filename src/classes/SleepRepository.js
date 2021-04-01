const dayjs = require('dayjs');

class SleepRepository {
  constructor(data) {
    this.usersSleep = data;
  }

  getAvgHoursSlept() {
    const avgHoursSlept = this.usersSleep.reduce((total, sleep) => {
      return total += sleep.hoursSlept;
    }, 0) / this.usersSleep.length;
    return Math.round(avgHoursSlept);
  }

  getAvgSleepQuality() {
    const avgSleepQuality = this.usersSleep.reduce((total, sleep) => {
      return total += sleep.sleepQuality;
    }, 0) / this.usersSleep.length;
    console.log(avgSleepQuality);
    return Math.round(avgSleepQuality);
  }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}
