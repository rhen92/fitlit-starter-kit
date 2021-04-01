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
    return Math.round(avgSleepQuality);
  }

  getAllAvgSleepQuality() {
    const avgSleepQuality = this.usersSleep.reduce((total, sleep) => {
      return total += sleep.sleepQuality;
    }, 0) / this.usersSleep.length;
    return Math.round(avgSleepQuality);
  }

  getHoursSleptByWeek(id, date) { 
    let day2 = dayjs(date).add(-1, 'day').format('YYYY/MM/DD');
    let day3 = dayjs(day2).add(-1, 'day').format('YYYY/MM/DD');
    let day4 = dayjs(day3).add(-1, 'day').format('YYYY/MM/DD');
    let day5 = dayjs(day4).add(-1, 'day').format('YYYY/MM/DD');
    let day6 = dayjs(day5).add(-1, 'day').format('YYYY/MM/DD');
    let day7 = dayjs(day6).add(-1, 'day').format('YYYY/MM/DD');
    let userSleep = this.usersSleep.filter(user => user.userID === id);
    let weekSleep = userSleep.reduce((obj, sleep) => {
      if (sleep.date === date || day2 || day3 || day4 || day5 || day6 || day7) {
        obj[sleep.date] = sleep.hoursSlept;
      }
      return obj;
    }, {});
    return weekSleep;
  }

  getSleepQualityByWeek(id, date) {
    let day2 = dayjs(date).add(-1, 'day').format('YYYY/MM/DD');
    let day3 = dayjs(day2).add(-1, 'day').format('YYYY/MM/DD');
    let day4 = dayjs(day3).add(-1, 'day').format('YYYY/MM/DD');
    let day5 = dayjs(day4).add(-1, 'day').format('YYYY/MM/DD');
    let day6 = dayjs(day5).add(-1, 'day').format('YYYY/MM/DD');
    let day7 = dayjs(day6).add(-1, 'day').format('YYYY/MM/DD');
    let userSleep = this.usersSleep.filter(user => user.userID === id);
    let weekSleepQuality = userSleep.reduce((obj, sleep) => {
      if (sleep.date === date || day2 || day3 || day4 || day5 || day6 || day7) {
        obj[sleep.date] = sleep.sleepQuality;
      }
      return obj;
    }, {});
    return weekSleepQuality;
  }

  findGoodSleepByWeek(date) {
    let day2 = dayjs(date).add(-1, 'day').format('YYYY/MM/DD');
    let day3 = dayjs(day2).add(-1, 'day').format('YYYY/MM/DD');
    let day4 = dayjs(day3).add(-1, 'day').format('YYYY/MM/DD');
    let day5 = dayjs(day4).add(-1, 'day').format('YYYY/MM/DD');
    let day6 = dayjs(day5).add(-1, 'day').format('YYYY/MM/DD');
    let day7 = dayjs(day6).add(-1, 'day').format('YYYY/MM/DD');
    let allGoodSleep = this.usersSleep.filter(data => {
      if (!allGoodSleep.userID) {
        allGoodSleepdata.sleepQuality > 3);
      } 
    }
    console.log(allGoodSleep);
  }
}

//filter first to find where we have sleep quality > 3
//after filtering, reduce to get just user ID
//ensure we don't have duplicates
//find name of user based on ID
//store names in array to return


if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}
