const dayjs = require('dayjs');

class SleepRepository {
  constructor(data) {
    this.usersSleep = data;
  }

  getAvgHoursSlept(id) {
    const avgHoursSlept = this.usersSleep.reduce((total, sleep) => {
      if (id === sleep.userID) {
        total += sleep.hoursSlept;
      }
      return total
    }, 0) / this.usersSleep.length;
    return Math.round(avgHoursSlept);
  }

  getAvgSleepQuality(id) {
    const avgSleepQuality = this.usersSleep.reduce((total, sleep) => {
      if (id === sleep.userID) {
        total += sleep.sleepQuality;
      }
      return total
    }, 0) / this.usersSleep.length;
    console.log(avgSleepQuality);
    return Math.round(avgSleepQuality);
  }

  getAllAvgSleepQuality() {
    const avgSleepQuality = this.usersSleep.reduce((total, sleep) => {
      return total += sleep.sleepQuality;
    }, 0) / this.usersSleep.length;
    return Math.round(avgSleepQuality);
  }

}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}
