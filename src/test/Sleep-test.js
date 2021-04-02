const chai = require('chai');
const expect = chai.expect;

const Sleep = require('../classes/Sleep');

describe('Sleep', () => {
  let sleep

  beforeEach(() => {
    sleep = new Sleep({ userID: 1, date: '2021/03/29', hoursSlept: 7.2, sleepQuality: 4.4 });
  });

  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', () => {
    expect(sleep).to.be.an.instanceof(Sleep);
  });

  it('should instantiate with sleep details', () => {
    expect(sleep.userID).to.equal(1);
    expect(sleep.date).to.equal('2021/03/29');
    expect(sleep.hoursSlept).to.equal(7.2);
    expect(sleep.sleepQuality).to.equal(4.4);
  });

  it('should return how many hours slept by a specific day', () => {
    expect(sleep.getSleepByDay()).to.equal(7.2);
  });

  it('should return sleep quality by a specific day', () => {
    expect(sleep.getSleepQualityByDay()).to.equal(4.4);
  });

});