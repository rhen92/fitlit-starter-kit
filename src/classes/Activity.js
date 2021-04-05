class Activity {
  constructor(userActivityData) {
    this.userID = userActivityData.userID;
    this.date = userActivityData.date;
    this.numSteps = userActivityData.numSteps;
    this.minutesActive = userActivityData.minutesActive;
    this.flightsOfStairs = userActivityData.flightsOfStairs
  }
  
  reachStepGoal(goal) {
    let goalMet = (this.numSteps >= goal) ? true : false;
    return goalMet;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
