class Sleep {
  constructor(userSleepData) {
    this.userID = userSleepData.userID;
    this.date = userSleepData.date;
    this.hoursSlept = userSleepData.hoursSlept;
    this.sleepQuality = userSleepData.sleepQuality;
  }

  // For a user, how many hours they slept for a specific day(identified by a date)

  getSleepByDay() {
    return this.hoursSlept;
  }

  

}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
