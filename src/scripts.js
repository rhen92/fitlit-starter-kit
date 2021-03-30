const greeting = document.querySelector('#greeting');
const todaySteps = document.querySelector('#todaySteps');
const userStepGoal = document.querySelector('#userStepGoal');
const averageStepGoal = document.querySelector('#averageStepGoal');
const infoName = document.querySelector('#infoName');
const infoEmail = document.querySelector('#infoEmail');
const infoStride = document.querySelector('#infoStride');
const infoFriends = document.querySelector('#infoFriends');

let currentUser = new User(userData[0]);
let { id, name, email, strideLength, dailyStepGoal, friends } = currentUser;

window.addEventListener('load', greetUser);

function greetUser() {
  greeting.innerText = `Welcome ${currentUser.getFirstName()}!`;
  displayStepGoal();
  displayInfoCard();
}

function displayStepGoal() {
  let totalUsers = new UserRepository(userData);
  userStepGoal.innerText = `Your step goal: ${dailyStepGoal}`;
  averageStepGoal.innerText = `Average goal among users: ${totalUsers.getAverageStepGoal()}`
}

function displayInfoCard() {
  infoName.innerText = `${name}`;
  infoEmail.innerText = `${email}`;
  infoStride.innerText = `${strideLength}`;
  infoFriends.innerText = `${friends}`;
}