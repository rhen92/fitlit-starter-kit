const chai = require('chai');
const expect = chai.expect;
const User = require('../classes/User');
const Activity = require('../classes/Activity');
const ActivityRepository = require('../classes/ActivityRepository');

describe('Activity Repository', () => {
  let user1, user2, activity1, activity2, activity3, activityRepository
  beforeEach(() => {
    user1 = new User({
      id: 1,
      name: 'Zach Johnson',
      address: '123 Bear Valley Ln, Las Vegas NV 12345-6789',
      email: 'zachjohnson123@gmail.com',
      strideLength: 3.5,
      dailyStepGoal: 10000,
      friends: [2]
    });
    user2 = new User({
      id: 2,
      name: 'Rachel Hendricks',
      address: '978 Bear River Ln, Las Vegas NV 12389-9089',
      email: 'rachelhendricks23@gmail.com', strideLength: 5,
      dailyStepGoal: 20000,
      friends: [1, 3]
    });
    activity1 = new Activity({ userID: 1, date: '2021/03/29', numSteps: 10005, minutesActive: 60, flightsOfStairs: 20 });
    activity2 = new Activity({ userID: 2, date: '2021/03/29', numSteps: 9400, minutesActive: 65, flightsOfStairs: 22 });
    activity3 = new Activity({ userID: 2, date: '2021/03/30', numSteps: 8800, minutesActive: 55, flightsOfStairs: 19 });
    activityRepository = new ActivityRepository([activity1, activity2, activity3]);
  });

  it('should be a function', () => {
    expect(ActivityRepository).to.be.a('function');
  });

  it('should be an instance of Activity', () => {
    expect(activityRepository).to.be.an.instanceof(ActivityRepository);
  });

  it('should hold all activity objects', () => {
    expect(activityRepository.usersActivity).to.deep.equal([activity1, activity2, activity3]);
  });

  it('should find a user', () => {
    expect(activityRepository.findUser(2)).to.deep.equal([activity2, activity3]);
  });

  it('should return the miles a user has walked for a specific date', () => {
    expect(activityRepository.getMilesWalked(3.5, 1, '2021/03/29')).to.equal(7);
  });

  it('should return the minutes a user was active for a specific date', () => {
    expect(activityRepository.getMinutesActive(1, '2021/03/29')).to.equal(60);
  });

  it('should get average minutes active for a given week', () => {
    const avgActivity = activityRepository.getActiveMinutesAvgWeek(2, '2021/03/30');
    expect(avgActivity).to.equal(17);
  });

  it('should get minutes active for a given week', () => {
    const avgActivityMins = activityRepository.getActivityTotalWeekForUser(2, '2021/03/30', 'minutesActive');
    expect(avgActivityMins).to.deep.equal({ '2021/03/29': 65, '2021/03/30': 55 });
  });

  it('should get step count for a given week', () => {
    const avgSteps = activityRepository.getActivityTotalWeekForUser(2, '2021/03/30', 'numSteps');
    expect(avgSteps).to.deep.equal({ '2021/03/29': 9400, '2021/03/30': 8800 });
  });

  it('should get flights of stairs for a given week', () => {
    const avgStairs = activityRepository.getActivityTotalWeekForUser(2, '2021/03/30', 'flightsOfStairs');
    expect(avgStairs).to.deep.equal({ '2021/03/29': 22, '2021/03/30': 19 });
  });

  it('should find all the days where thh user exceeded their goal', () => {
    activityRepository.getDaysExceededGoal(user1);
  });

  it('should find all time stair climbing record', () => {
    const stairRecord = activityRepository.getAllTimeStairClimbing(2);
    expect(stairRecord).to.equal(22);
  });

  it('should find average stairs climbed for a specified date for all users', () => {
    const activityInfo = activityRepository.getAvgInfo('2021/03/29', 'flightsOfStairs');
    expect(activityInfo).to.equal(21);
  });

  it('should find steps taken for a specified date for all users', () => {
    const activityInfo = activityRepository.getAvgInfo('2021/03/29', 'numSteps');
    expect(activityInfo).to.equal(9702.5);
  });

  it('should find minutes active for a specified date for all users', () => {
    const activityInfo = activityRepository.getAvgInfo('2021/03/29', 'minutesActive');
    expect(activityInfo).to.equal(62.5)
  });
});
