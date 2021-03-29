const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../classes/hydration-class');

describe('Hydration', () => {
  let hydration

  beforeEach(() => {
    hydration = new Hydration();
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', () => {
    expect(hydration).to.be.an.instanceof(Hydration);
  });
})
