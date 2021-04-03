const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../classes/Hydration');

describe('Hydration', () => {
  let hydration

  beforeEach(() => {
    hydration = new Hydration({ userID: 1, date: '2021/03/29', numOunces: 50});
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', () => {
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('should instantiate with user details', () => {
    expect(hydration.userID).to.equal(1);
    expect(hydration.date).to.equal('2021/03/29');
    expect(hydration.numOunces).to.equal(50);
  });
});
