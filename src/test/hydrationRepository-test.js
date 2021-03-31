const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../classes/Hydration');
const HydrationRepository = require('../classes/HydrationRepository');

describe('Hydration', () => {
  let hydration1, hydration2, hydration3, hydrationRepository

  beforeEach(() => {
    hydration1 = new Hydration({ userID: 1, date: '2021/03/29', numOunces: 50});
    hydration2 = new Hydration({ userID: 2, date: '2021/03/29', numOunces: 36});
    hydration3 = new Hydration({ userID: 3, date: '2021/03/29', numOunces: 74});
    hydrationRepository = new HydrationRepository();
  });

  it('should be a function', () => {
    expect(HydrationRepository).to.be.a('function');
  });

  it('should be an instance of Hydration', () => {
    expect(hydrationRepository).to.be.an.instanceof(HydrationRepository);
  });

  it('should hold all hydration objects', () => {
    expect(hydrationRepository.usersHydration).to.deep.equal([hydration1, hydration2, hydration3]);
  })
})
