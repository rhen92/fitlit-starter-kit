const chai = require('chai');
const expect = chai.expect;

const User = require('../classes/user');
const UserRepository = require('../classes/userRepository');

describe('UserRepository', () => {
  let user1, user2, user3, userRepository;

  beforeEach(() => {
    user1 = new User({ id: 1, name: 'Zach Johnson', address: '123 Bear Valley Ln, Las Vegas NV 12345-6789', email: 'zachjohnson123@gmail.com', strideLength: 3.5, dailyStepGoal: 10000, friends: [2]});
    user2 = new User({ id: 2, name: 'Rachel Hendricks', address: '978 Bear River Ln, Las Vegas NV 12389-9089', email: 'rachelhendricks23@gmail.com', strideLength: 5, dailyStepGoal: 20000, friends: [1, 3]});
    user3 = new User({ id: 3, name: 'Hannah Hudson', address: '0971 Bear Lake Rd, Las Vegas NV 45312-6733', email: 'hannahhudson123@gmail.com', strideLength: 2, dailyStepGoal: 40000, friends: [1]});
    userRepository = new UserRepository([user1, user2, user3]);
  });

  it('should be a function', () => {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of User', () => {
    expect(userRepository).to.be.an.instanceof(UserRepository);
  });

  it('should hold all user objects', () => {
    expect(userRepository.users).to.deep.equal([user1, user2, user3]);
  });
})
