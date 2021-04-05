//const dayjs = require('dayjs');

class SleepRepository {
  constructor(data) {
    this.usersSleep = data;
  }

  getSleepByDay(id, day) {
    const userSleepHours = this.usersSleep.filter(user => user.userID === id);
    const currentSleepHours = userSleepHours.find(user => user.date === day);
    return currentSleepHours.hoursSlept;
  }

  getSleepQualityByDay(id, day) {
    const userSleepQuality = this.usersSleep.filter(user => user.userID === id);
    const currentSleepQuality = userSleepQuality.find(user => user.date === day);
    return currentSleepQuality.sleepQuality;
  }

  getAvgHoursSlept(id) {
    const userAvgHours = this.usersSleep.filter(user => user.userID === id);
    const avgHoursSlept = userAvgHours.reduce((total, sleep) => {
      total += sleep.hoursSlept
      return total
    }, 0) / userAvgHours.length;
    return Math.round(avgHoursSlept);
  }

  getAvgSleepQuality(id) {
    const userAvgQuality = this.usersSleep.filter(user => user.userID === id);
    const avgSleepQuality = userAvgQuality.reduce((total, sleep) => {
      total += sleep.sleepQuality;
      return total
    }, 0) / userAvgQuality.length;
    return Math.round(avgSleepQuality);
  }

  getAllAvgSleepQuality() {
    const avgSleepQuality = this.usersSleep.reduce((total, sleep) => {
      return total += sleep.sleepQuality;
    }, 0) / this.usersSleep.length;
    return Math.round(avgSleepQuality);
  }

  getHoursSleptByWeek(id, day) {
    let day2 = dayjs(day).add(-1, 'day').format('YYYY/MM/DD');
    let day3 = dayjs(day2).add(-1, 'day').format('YYYY/MM/DD');
    let day4 = dayjs(day3).add(-1, 'day').format('YYYY/MM/DD');
    let day5 = dayjs(day4).add(-1, 'day').format('YYYY/MM/DD');
    let day6 = dayjs(day5).add(-1, 'day').format('YYYY/MM/DD');
    let day7 = dayjs(day6).add(-1, 'day').format('YYYY/MM/DD');
    let weekDates = [day, day2, day3, day4, day5, day6, day7];
    let userSleep = this.usersSleep.filter(user => user.userID === id);
    let weekSleep = userSleep.reduce((obj, sleep) => {
      if (weekDates.includes(sleep.date)) {
        obj[sleep.date] = sleep.hoursSlept;
      }
      return obj;
    }, {});
    return weekSleep;
  }

  getSleepQualityByWeek(id, day) {
    let day2 = dayjs(day).add(-1, 'day').format('YYYY/MM/DD');
    let day3 = dayjs(day2).add(-1, 'day').format('YYYY/MM/DD');
    let day4 = dayjs(day3).add(-1, 'day').format('YYYY/MM/DD');
    let day5 = dayjs(day4).add(-1, 'day').format('YYYY/MM/DD');
    let day6 = dayjs(day5).add(-1, 'day').format('YYYY/MM/DD');
    let day7 = dayjs(day6).add(-1, 'day').format('YYYY/MM/DD');
    let weekDates = [day, day2, day3, day4, day5, day6, day7];
    let userSleep = this.usersSleep.filter(user => user.userID === id);
    let weekSleepQuality = userSleep.reduce((obj, sleep) => {
      if (weekDates.includes(sleep.date)) {
        obj[sleep.date] = sleep.sleepQuality;
      }
      return obj;
    }, {});
    return weekSleepQuality;
  }

  findUsersWithMostSleep(day) {
    const allDailyData = this.usersSleep.filter(data => data.date === day);
    const sortedData = allDailyData.sort((a, b) => {
      return b.hoursSlept - a.hoursSlept;
    });
    const mostSleep = [];
    const findMost = sortedData.forEach(data => {
      if (sortedData[0].hoursSlept === data.hoursSlept) {
        mostSleep.push(data.userID);
      }
    });
    return mostSleep;
  }

  findGoodSleepByWeek(date) {
    let day2 = dayjs(date).add(-1, 'day').format('YYYY/MM/DD');
    let day3 = dayjs(day2).add(-1, 'day').format('YYYY/MM/DD');
    let day4 = dayjs(day3).add(-1, 'day').format('YYYY/MM/DD');
    let day5 = dayjs(day4).add(-1, 'day').format('YYYY/MM/DD');
    let day6 = dayjs(day5).add(-1, 'day').format('YYYY/MM/DD');
    let day7 = dayjs(day6).add(-1, 'day').format('YYYY/MM/DD');
    const allGoodSleep = this.usersSleep.filter(data => data.sleepQuality > 3)
    const userMap = allGoodSleep.map(data => data.userID);
    const uniqueUsers = [...new Set(userMap)];
    return uniqueUsers;
  }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}
