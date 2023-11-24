var date = new Date();
//console.log(date.getDate());
let dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let yeardays = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];

let daysaftr = yeardays[date.getMonth()];

let yearday = daysaftr - (dayInMonth[date.getMonth()] - date.getDate());
if (yearday > 359) {
  hhh = 365 -yearday
  lol = hhh + 359

  console.log(lol, "day to go 😒");
} else if (yearday < 359) {
  console.log(359 - yearday, "day to go 😎");
} else {
  console.log("its christmas time 😍😍");
}
