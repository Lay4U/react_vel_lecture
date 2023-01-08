const getFakePerson = async () => {
  let res = await fetch('https://api.randomuser.me?nat=US&result=1');
  let { results } = res.json();
}
const string = "Restaurants in Hanalei";
const urlFriendly = string.replace(/ /g, "-");

console.log(urlFriendly);

const invokeIf = (condition, fnTrue, fnFalse) =>
  (condition) ? fnTrue() : fnFalse()

const showWelcome = () => console.log("Welcome!!!");
const showUnauthorized = () => console.log('Unauthorized!!!');

invokeIf(true, showWelcome, showUnauthorized)
invokeIf(false, showWelcome, showUnauthorized)

const userLogs = userName => message =>
  console.log(`${userName} -> ${message}`)

const log = userLogs('grandpa23');
log('attempted to load 20 fake members')

getFakeMembers(20).then(
  member => log(`successfully loades ${member.length} members`),
  error => log("encountered an error loading members")
);

const compose = (...fns) => (arg) =>
  fns.reduce((composed, f) => f(composed), arg)

setInterval(logClockTime, 1000);

function logClockTime(){
  var time = getClockTime();
  console.clear();
  console.log(time);
}

function getClockTime() {
  var date = new Date();
  var time = '';

  var time = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    apmp: 'AM',
  }

  if (time.hours == 12) {
    time.ampm = 'PM';
  }else if (time.hours > 12) {
    time.ampm = 'PM';
    time.hours -= 12
  }

  if (time.hours < 10) {
    time.hours = 0+time.hours;
  }

  if(time.minutes < 10){
    time.minutes = '0' + time.minutes;
  }

  if(time.seconds < 10){
    time.seconds = '0' + time.seconds;

    return time.hours + ":" + time.minute + ":" + time.seconds + " " + time.ampm;
  }
}

const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear =  () => console.clear();
const log = message => console.log(message);

const abstractClockTime = date => ({
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds()
});

const civilianHours = clockTime => ({
  ...clockTime,
  hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours
})

const appendAMPM = clockTime => ({
  ...clockTime,
  ampm: clockTime.hours >= 12 ? "PM" : "AM"
})

const display = target => time => target(time);

const formatClock = format => time =>
  format.replace("hh", time.hours)
    .replace("mm", time.minutes)
    .replace("ss", time.seconds)
    .replace("tt", time.ampm)

const prependZero = key => clockTime => ({
  ...clockTime,
  [key]: (clockTime[key] < 10) ? '0' + clockTime[key] : clockTime[key]
});


const convertToCivilianTIme = clockTime =>
  compose(
    appendAMPM,
    civilianHours
  )(clockTime)

const doubleDigits = civilianTime =>
  compose(
    prependZero("hours"),
    prependZero("minutes"),
    prependZero("seconds"),
  )(civilianTime)

const startTicking = () =>
  setInterval(
    compose(
      clear,
      getCurrentTime,
      abstractClockTime,
      doubleDigits,
      formatClock("hh:mm:ss tt"),
      display(log)
    ),
    oneSecond()
  );


