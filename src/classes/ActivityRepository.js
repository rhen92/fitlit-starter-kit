const dayjs = require('dayjs');
class ActivityRepository {
  constructor(data) {
    this.usersActivity = data
  }

  getActiveMinutesAvgWeek(id, date) {
    let day2 = dayjs(date).add(-1, 'day').format('YYYY/MM/DD');
    let day3 = dayjs(day2).add(-1, 'day').format('YYYY/MM/DD');
    let day4 = dayjs(day3).add(-1, 'day').format('YYYY/MM/DD');
    let day5 = dayjs(day4).add(-1, 'day').format('YYYY/MM/DD');
    let day6 = dayjs(day5).add(-1, 'day').format('YYYY/MM/DD');
    let day7 = dayjs(day6).add(-1, 'day').format('YYYY/MM/DD');
    let userActivity = this.usersActivity.filter(user => user.userID === id);
    let weekActivity = userActivity.reduce((obj, activity) => {
      if (activity.date === date || day2 || day3 || day4 || day5 || day6 || day7) {
        obj += activity.minutesActive;
      }
      return obj;
    }, 0) / 7;
    return Math.round(weekActivity);
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}
