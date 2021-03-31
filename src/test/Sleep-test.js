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
)};