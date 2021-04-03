const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../classes/Hydration');
const HydrationRepository = require('../classes/HydrationRepository');

describe('Hydration Repository', () => {
  let hydration1, hydration2, hydration3, hydrationRepository

  beforeEach(() => {
    hydration1 = new Hydration({ userID: 1, date: '2021/03/29', numOunces: 50});
    hydration2 = new Hydration({ userID: 1, date: '2021/03/30', numOunces: 36});
    hydration3 = new Hydration({ userID: 3, date: '2021/03/24', numOunces: 74});
    hydrationRepository = new HydrationRepository([hydration1, hydration2, hydration3]);
  });

  it('should be a function', () => {
    expect(HydrationRepository).to.be.a('function');
  });

  it('should be an instance of Hydration', () => {
    expect(hydrationRepository).to.be.an.instanceof(HydrationRepository);
  });

  it('should hold all hydration objects', () => {
    expect(hydrationRepository.usersHydration).to.deep.equal([hydration1, hydration2, hydration3]);
  });

  it('should return numOunces for specific day', () => {
    expect(hydration.getNumOunces(1, '2021/03/29')).to.equal(50);
  });

  it('should get average fluid ounces consumed per day for all time', () => {
    const avgFluidOuncesAllTime = hydrationRepository.getFluidOuncesAllTime();
    expect(avgFluidOuncesAllTime).to.equal(53);
  });

  it('should get fluid ounces per day for week', () => {
    const ouncesForWeek = hydrationRepository.getFluidOuncesWeek(1, '2021/03/30');
    expect(ouncesForWeek).to.deep.equal({ '2021/03/29': 50, '2021/03/30': 36 });
  });
})
