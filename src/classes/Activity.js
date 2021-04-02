class Activity {
  constructor(userActivityData) {
    this.userID = userActivityData.userID;
    this.date = userActivityData.date;
    this.numSteps = userActivityData.numSteps;
    this.minutesActive = userActivityData.minutesActive;
    this.flightsOfStairs = userActivityData.flightsOfStairs
  }

  getMilesWalked(stride) {
    let stepsPerMile = Math.round(5280 / stride);
    let miles = Math.round(this.numSteps / stepsPerMile);
    return { [this.date]: miles };
  }
  getMinutesActive() {
    return { [this.date]: this.minutesActive };
  }

  eachStepGoal(goal) {
    let goalMet = (this.numSteps >= goal) ? true : false;
    return goalMet;
  }
}
if (typeof module !== 'undefined') {
  module.exports = Activity;
}





