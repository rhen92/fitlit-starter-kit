class Sleep {
  constructor(userSleepData) {
    this.userID = userSleepData.userID;
    this.date = userSleepData.date;
    this.hoursSlept = userSleepData.hoursSlept;
    this.sleepQuality = userSleepData.sleepQuality;
  }

  getSleepByDay() {
    return this.hoursSlept;
  }

  getSleepQualityByDay() {
    return this.sleepQuality;
  }

}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
