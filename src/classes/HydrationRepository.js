const dayjs = require('dayjs');

class HydrationRepository {
  constructor(data) {
    this.usersHydration = data;
  }

  getFluidOuncesAllTime() {
    const avgFluidOunces = this.usersHydration.reduce((total, hydration) => {
      return total += hydration.numOunces;
    }, 0) / this.usersHydration.length;
    return Math.round(avgFluidOunces);
  }

  getFluidOuncesWeek(id, date) {
    let day2 = dayjs(date).add(-1, 'day').format('YYYY/MM/DD');
    let day3 = dayjs(day2).add(-1, 'day').format('YYYY/MM/DD');
    let day4 = dayjs(day3).add(-1, 'day').format('YYYY/MM/DD');
    let day5 = dayjs(day4).add(-1, 'day').format('YYYY/MM/DD');
    let day6 = dayjs(day5).add(-1, 'day').format('YYYY/MM/DD');
    let day7 = dayjs(day6).add(-1, 'day').format('YYYY/MM/DD');
    let userHydration = this.usersHydration.filter(user => user.userID === id);
    let weekHydration = userHydration.reduce((obj, hydration) => {
      if (hydration.date === date || day2 || day3 || day4 || day5 || day6 || day7) {
        obj[hydration.date] = hydration.numOunces;
      }
      return obj;
    }, {});
    return weekHydration;
  }
}

if (typeof module !== 'undefined') {
  module.exports = HydrationRepository;
}
