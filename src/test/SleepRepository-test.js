const chai = require('chai');
const expect = chai.expect;
const Sleep = require('../classes/Sleep');
const SleepRepository = require('../classes/SleepRepository');

describe('SleepRepository', () => {
  let sleep1, sleep2, sleep3, sleepRepository

  beforeEach(() => {
    sleep1 = new Sleep({ "userID": 1, date:"2021/04/01", "hoursSlept": 5.5, "sleepQuality": 3.3 });
    sleep2 = new Sleep({ "userID": 2, date: "2021/04/01", "hoursSlept": 6.4, "sleepQuality": 3.7 });
    sleep3 = new Sleep({ "userID": 3, date: "2021/04/01", "hoursSlept": 7.2, "sleepQuality": 2.9 });
    sleepRepository = new SleepRepository([sleep1, sleep2, sleep3]);
  });

  it('should be a function', () => {
    expect(SleepRepository).to.be.a('function');
  });

  it('should be an instance of Sleep', () => {
    expect(sleepRepository).to.be.an.instanceof(SleepRepository);
  });

  it('should calculate average sleep per day', () => {
    expect(sleepRepository.getAvgHoursSlept()).to.equal(6);
  });

  it('should calculate average sleep quality per day over all time', () => {
    expect(sleepRepository.getAvgSleepQuality()).to.equal(3);
  });


});