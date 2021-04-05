const dayjs = require('dayjs');

class ActivityRepository {
  constructor(data) {
    this.usersActivity = data
  }

  findUser(id) {
    let userActivity = this.usersActivity.filter(user => user.userID === id);
    return userActivity;
  }

  getActiveMinutesAvgWeek(id, day) {
    let day2 = dayjs(day).add(-1, 'day').format('YYYY/MM/DD');
    let day3 = dayjs(day2).add(-1, 'day').format('YYYY/MM/DD');
    let day4 = dayjs(day3).add(-1, 'day').format('YYYY/MM/DD');
    let day5 = dayjs(day4).add(-1, 'day').format('YYYY/MM/DD');
    let day6 = dayjs(day5).add(-1, 'day').format('YYYY/MM/DD');
    let day7 = dayjs(day6).add(-1, 'day').format('YYYY/MM/DD');
    let weekActivity = this.findUser(id).reduce((obj, activity) => {
      if (activity.date === day || day2 || day3 || day4 || day5 || day6 || day7) {
        obj += activity.minutesActive;
      }
      return obj;
    }, 0) / 7;
    return Math.round(weekActivity);
  }

  getDaysExceededGoal(user) {
    let exceededGoalDays = this.findUser(user).filter(activity => activity.numSteps >= user.dailyStepGoal);
    return exceededGoalDays.map(goal => goal.date);
  }

  getAllTimeStairClimbing(id) {
    let stairAmount = this.findUser(id).map(stairs => stairs.flightsOfStairs);
    return Math.max(...stairAmount);
  }

  getAvgInfo(day, workout) {
    let usersActivityDetails = this.usersActivity.filter(activity => day === activity.date);
    let avgWorkout = usersActivityDetails.reduce((obj, activity) => {
      return obj += activity[workout];
    }, 0) / usersActivityDetails.length;
    return avgWorkout;
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}
