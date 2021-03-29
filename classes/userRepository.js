class UserRepository {
  constructor(data) {
    this.users = data;
  }

  getUserData(userId) {
    return this.users.find(user => user.id === userId);
  }

  getAverageStepGoal() {
    const stepGoal = this.users.map(user => user.dailyStepGoal);
    const totalSteps = stepGoal.reduce((total, step) => {
      return total + step
    }, 0);
    const averageGoal = totalSteps / stepGoal.length;
    return Math.round(averageGoal);
  }
}

if(typeof module !== 'undefined') {
  module.exports = UserRepository;
}
