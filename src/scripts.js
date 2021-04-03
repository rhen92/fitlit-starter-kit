const greeting = document.querySelector('#greeting');
const todaySteps = document.querySelector('#todaySteps');
const userStepGoal = document.querySelector('#userStepGoal');
const averageStepGoal = document.querySelector('#averageStepGoal');
const infoName = document.querySelector('#infoName');
const infoEmail = document.querySelector('#infoEmail');
const infoStride = document.querySelector('#infoStride');
const infoFriends = document.querySelector('#infoFriends');
const date = document.querySelector('#todayDate');
const todayOz = document.querySelector('#todayOz');
const hydroChart = document.getElementById('hydroChart');
const todaySleep = document.querySelector('#todaySleep');
const avgSleep = document.querySelector('#avgSleep')
const sleepChart = document.getElementById('sleepChart');


const currentUser = new User(userData[0]);
const currentHydration = new HydrationRepository(hydrationData);
const currentSleep = new SleepRepository(sleepData);
let { id, name, email, strideLength, dailyStepGoal, friends } = currentUser;
let hydroBarChart = new Chart(hydroChart, {
  type: 'bar',
  data: {
    //labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [{
      label: 'Water Drank',
      data: displayWeeksHydration(),
      backgroundColor: [
        'rgba(255, 99, 132, .5)',
        'rgba(54, 162, 235, .5)',
        'rgba(255, 206, 86, .5)',
        'rgba(75, 192, 192, .5)',
        'rgba(153, 102, 255, .5)',
        'rgba(255, 159, 64, .5)',
        'rgb(48, 142, 161, .5)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgb(48, 142, 161, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

let sleepBarChart = new Chart(sleepChart, {
  type: 'bar',
  data: {
    //labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [{
      label: 'Water Drank',
      data: [],
      backgroundColor: [
        'rgba(255, 99, 132, .5)',
        'rgba(54, 162, 235, .5)',
        'rgba(255, 206, 86, .5)',
        'rgba(75, 192, 192, .5)',
        'rgba(153, 102, 255, .5)',
        'rgba(255, 159, 64, .5)',
        'rgb(48, 142, 161, .5)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgb(48, 142, 161, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

window.addEventListener('load', loadInfo);

function loadInfo() {
  greeting.innerText = `Welcome ${currentUser.getFirstName()}!`;
  displayStepGoal();
  displayInfoCard();
  displayDate();
  displayWaterDrank();
  displayTodaySleep();
  displayAvgSleep();
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

function getDate() {
  const dateForUser = currentHydration.usersHydration.filter(user => user.userID === 1);
  const lastDate = dateForUser.length - 1;
  const finalDate = dateForUser[lastDate].date;
  return finalDate;
}

function displayDate() {
  date.innerText = dayjs(getDate()).format('MM/DD/YYYY');
}

function displayWeeksHydration() {
  return currentHydration.getFluidOuncesWeek(currentUser.id, getDate());
}

function displayWaterDrank() {
  const waterToday = currentHydration.getNumOunces(currentUser.id, getDate());
  todayOz.innerText = `${waterToday} oz today!`
}

function displayTodaySleep() {
  const sleepHoursToday = currentSleep.getSleepByDay(currentUser.id, getDate());
  const sleepQualityToday = currentSleep.getSleepQualityByDay(currentUser.id, getDate());
  todaySleep.innerText = `Hours Slept: ${sleepHoursToday} | Quality: ${sleepQualityToday}`;
}

function displayAvgSleep() {
  const sleepHoursAvg = currentSleep.getAvgHoursSlept(currentUser.id);
  const sleepQualityAvg = currentSleep.getAvgSleepQuality(currentUser.id);
  console.log(sleepHoursAvg, sleepQualityAvg);
  avgSleep.innerText = `Avg Hours Slept: ${sleepHoursAvg} | Quality: ${sleepQualityAvg}`;
}
