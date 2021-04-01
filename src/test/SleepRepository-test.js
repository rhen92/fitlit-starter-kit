const chai = require('chai');
const expect = chai.expect;
const Sleep = require('../classes/Sleep');
const SleepRepository = require('../classes/SleepRepository');

describe('SleepRepository', () => {
  let sleep1, sleep2, sleep3, sleepRepository

  beforeEach(() => {
    sleep1 = new Sleep({ "userID": 1, date:"2021/04/01", "hoursSlept": 5.5, "sleepQuality": 3.3 });
    sleep2 = new Sleep({ "userID": 1, date: "2021/03/31", "hoursSlept": 6.4, "sleepQuality": 3.7 });
    sleep3 = new Sleep({ "userID": 3, date: "2021/04/01", "hoursSlept": 7.2, "sleepQuality": 2.9 });
    sleepRepository = new SleepRepository([sleep1, sleep2, sleep3]);
  });

  it('should be a function', () => {
    expect(SleepRepository).to.be.a('function');
  });

  it('should be an instance of Sleep', () => {
    expect(sleepRepository).to.be.an.instanceof(SleepRepository);
  });

  it('should calculate average hours sleep per day for a specific user', () => {
    expect(sleepRepository.getAvgHoursSlept(1)).to.equal(4);
  });

  it('should calculate average sleep quality for a specific user', () => {
    expect(sleepRepository.getAvgSleepQuality(1)).to.equal(2);
  });

  it('should calculate average sleep quality from all users', () => {
    expect(sleepRepository.getAllAvgSleepQuality()).to.equal(3);
  });

  it('should be able to determine hours slept each day based on a given week', () => {
    expect(sleepRepository.getHoursSleptByWeek(1, "2021/04/01")).to.deep.equal({ '2021/04/01': 5.5, '2021/03/31': 6.4 });
  });
});