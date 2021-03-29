const greeting = document.querySelector('#greeting');
const todaySteps = document.querySelector('#todaySteps');
const userStepGoal = document.querySelector('#userStepGoal');
const averageStepGoal = document.querySelector('#averageStepGoal');

window.addEventListener('load', greetUser);
// window.addEventListener('load', displaySteps);

function greetUser() {
  let currentUser = new User(userData[0]);
  greeting.innerText = `Welcome ${currentUser.getFirstName()}!`;
  displayStepGoal(currentUser);
}

function displayStepGoal(currentUser) {
  let totalUsers = new UserRepository(userData);
  console.log(totalUsers);
  userStepGoal.innerText = `Your step goal: ${currentUser.dailyStepGoal}`;
  averageStepGoal.innerText = `Average goal among users: ${totalUsers.getAverageStepGoal()}`
}