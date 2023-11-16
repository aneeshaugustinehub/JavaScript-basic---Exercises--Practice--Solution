let date = new Date();
let year = date.getFullYear();
year = 2400;
//Array = []
function isleapyear(year) {
  if (year % 100 == 0 && year % 400 == 0) {
    console.log(year,"leap year");
  } else if (year % 4 == 0) {
    console.log(year,"leap year");
  } else {
    //console.log(year,"not a leap year");
  }
}
for (i = 100; i <= 2023; i++) {
  isleapyear(i);
}
