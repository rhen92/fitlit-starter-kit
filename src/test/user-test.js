const chai = require('chai');
const expect = chai.expect;

const User = require('../classes/User');

describe('User', () => {
  let user;
  beforeEach(() => {
    user = new User({ id: 1, name: 'Zach Johnson', address: '123 Bear Valley Ln, Las Vegas NV 12345-6789', email: 'zachjohnson123@gmail.com', strideLength: 3.5, dailyStepGoal: 10000, friends: [2]});
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', () => {
    expect(user).to.be.an.instanceof(User);
  });

  it('should instantiate with user details', () => {
    expect(user.id).to.equal(1);
    expect(user.name).to.equal('Zach Johnson');
    expect(user.address).to.equal('123 Bear Valley Ln, Las Vegas NV 12345-6789');
    expect(user.email).to.equal('zachjohnson123@gmail.com');
    expect(user.strideLength).to.equal(3.5);
    expect(user.dailyStepGoal).to.equal(10000);
    expect(user.friends).to.deep.equal([2]);
  });

  it('should return first name only', () => {
    expect(user.getFirstName()).to.equal('Zach');
  });
})
