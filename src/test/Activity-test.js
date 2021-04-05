const chai = require('chai');
const expect = chai.expect;

const User = require('../classes/User');
const Activity = require('../classes/Activity');

describe('Activity', () => {
  let user, activity1

  beforeEach(() => {
    user = new User({
      id: 1,
      name: 'Zach Johnson',
      address: '123 Bear Valley Ln, Las Vegas NV 12345-6789',
      email: 'zachjohnson123@gmail.com',
      strideLength: 3.5,
      dailyStepGoal: 10000,
      friends: [2]
    });
    activity1 = new Activity({ userID: 1, date: '2021/03/29', numSteps: 5600, minutesActive: 60, flightsOfStairs: 20 });

  });

  it('should be a function', () => {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Activity', () => {
    expect(activity1).to.be.an.instanceof(Activity);
  });

  it('should instantiate with user details', () => {
    expect(activity1.userID).to.deep.equal(1);
    expect(activity1.date).to.equal('2021/03/29');
    expect(activity1.numSteps).to.equal(5600);
    expect(activity1.minutesActive).to.equal(60);
    expect(activity1.flightsOfStairs).to.equal(20);
  });

  it('should tell if a step goal was not met', () => {
    expect(activity1.reachStepGoal(10000)).to.equal(false);
  });

  it('should tell if a step goal was met', () => {
    const activity2 = new Activity({ userID: 1, date: '2021/03/30', numSteps: 10005, minutesActive: 75, flightsOfStairs: 27 });
    expect(activity2.reachStepGoal(10000)).to.equal(true);
  });
});
