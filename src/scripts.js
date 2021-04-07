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
const todaySleep = document.querySelector('#todaySleep');
const avgSleep = document.querySelector('#avgSleep')
const todayActivity = document.querySelector('#activityPara');

const currentUser = new User(userData[0]);
const currentHydration = new HydrationRepository(hydrationData);
const currentSleep = new SleepRepository(sleepData);
const currentActivity = new ActivityRepository(activityData);
let { id, name, email, strideLength, dailyStepGoal, friends } = currentUser;

let hydroBarChart = new Chart(hydroChart, {
  type: 'bar',
  data: {
    datasets: [{
      data: displayWeeksHydration(),
      backgroundColor: [
        'rgba(255, 99, 132, .8)',
        'rgba(54, 162, 235, .8)',
        'rgba(255, 206, 86, .8)',
        'rgba(75, 192, 192, .8)',
        'rgba(153, 102, 255, .8)',
        'rgba(255, 159, 64, .8)',
        'rgb(48, 142, 161, .8)'
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
    }]
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        color: "#FFFFFF",
        text: 'Weekly Water'
      },
    },
  }
});
let sleepLineChart = new Chart(sleepChart, {
  type: 'line',
  data: {
    datasets: [{
      label: 'Hours Slept',
      data: displayWeekSleepHours(),
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
    },
    {
      label: 'Sleep Quality',
      data: displayWeekSleepQuality(),
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

let activityLineChart = new Chart(activityChart, {
  type: 'line',
  data: {
    datasets: [{
      label: 'Number of Steps',
      data: displayWeekNumSteps(),
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
    },
    {
      label: 'Minutes Active',
      data: displayWeekMinsActive(),
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
    },
    {
      label: 'Flights of Stairs',
      data: displayWeekFlightStairs(),
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
let numStepsCircleChart = new Chart(activityDoughnutChart, {
  type: 'doughnut',
  data: {
    labels: ['Your Steps Today', 'Avg Users Steps'],
    datasets: [{
      data: displayNumStepsComparison(),
      backgroundColor: [
        'rgba(255, 99, 132, .5)',
        'rgba(54, 162, 235, .5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      hoverOffset: 4
    }]
  },
});
let minsActiveCircleChart = new Chart(minsDoughnutChart, {
  type: 'doughnut',
  data: {
    labels: ['Your Minutes Active', 'Avg Users Minutes'],
    datasets: [{
      data: displayMinutesActiveComparison(),
      backgroundColor: [
        'rgba(255, 206, 86, .5)',
        'rgba(28, 28, 145, .5)',
      ],
      borderColor: [
        'rgba(255, 206, 86, 1)',
        'rgba(28, 28, 145, 1)',
      ],
      hoverOffset: 4
    }]
  },
});
let flightStairsCircleChart = new Chart(stairsDoughnutChart, {
  type: 'doughnut',
  data: {
    labels: ['Your Flights Climbed', 'Avg Users Flights Climbed'],
    datasets: [{
      data: displayStairsClimbedComparison(),
      backgroundColor: [
        'rgba(153, 102, 255, .5)',
        'rgb(0, 212, 205, .5)',
      ],
      borderColor: [
        'rgba(153, 102, 255, 1)',
        'rgb(0, 212, 205, 1)',
      ],
      hoverOffset: 4
    }]
  },
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
  displayTodaySteps();
  displayActivity();
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
  return currentHydration.getFluidOuncesWeek(id, getDate());
}

function displayWaterDrank() {
  const waterToday = currentHydration.getNumOunces(id, getDate());
  todayOz.innerText = `${waterToday} oz today!`
}

function displayTodaySleep() {
  const sleepHoursToday = currentSleep.getSleepByDay(id, getDate());
  const sleepQualityToday = currentSleep.getSleepQualityByDay(id, getDate());
  todaySleep.innerText = `Hours Slept: ${sleepHoursToday} | Quality: ${sleepQualityToday}`;
}

function displayAvgSleep() {
  const sleepHoursAvg = currentSleep.getAvgHoursSlept(id);
  const sleepQualityAvg = currentSleep.getAvgSleepQuality(id);
  avgSleep.innerText = `Avg Hours Slept: ${sleepHoursAvg} | Quality: ${sleepQualityAvg}`;
}

function displayWeekSleepHours() {
  return currentSleep.getHoursSleptByWeek(id, getDate());
}

function displayWeekSleepQuality() {
  return currentSleep.getSleepQualityByWeek(id, getDate());
}

function getTodayInfo() {
  let activityPerUser = currentActivity.findUser(id);
  let activityPerDate = activityPerUser.find(weekDay => weekDay.date === getDate());
  return activityPerDate;
}

function displayNumStepsComparison() {
  return [getTodayInfo().numSteps, currentActivity.getAvgInfo(getDate(), 'numSteps')];
}

function displayMinutesActiveComparison() {
  return [getTodayInfo().minutesActive, currentActivity.getAvgInfo(getDate(), 'minutesActive')];
}

function displayStairsClimbedComparison() {
  return [getTodayInfo().flightsOfStairs, currentActivity.getAvgInfo(getDate(), 'flightsOfStairs')];
}

function displayTodaySteps() {
  todaySteps.innerText = `Today's Steps: ${getTodayInfo().numSteps}`;
}

function displayActivity() {
  let activityPerUser = currentActivity.findUser(id);
  let minutesMoving = currentActivity.getMinutesActive(id, getDate());
  let milesWalked = currentActivity.getMilesWalked(strideLength, id, getDate());
  todayActivity.innerText = `Minutes Active: ${minutesMoving} | Miles Walked: ${milesWalked}`;
}

function displayWeekNumSteps() {
  return currentActivity.getActivityTotalWeekForUser(id, getDate(), 'numSteps');
}

function displayWeekMinsActive() {
  return currentActivity.getActivityTotalWeekForUser(id, getDate(), 'minutesActive');
}

function displayWeekFlightStairs() {
  return currentActivity.getActivityTotalWeekForUser(id, getDate(), 'flightsOfStairs');
}
