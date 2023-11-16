var date = new Date();
console.log(date);

var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day1 = date.getDay();
console.log("today is", days[day1]);

/* let time = date.getTime()
console.log(time);
 */
var n = date.toLocaleTimeString();
console.log(n);

let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();

if (h > 12) {
  ampm = "pm";
} else {
  ampm = am;
}
if (h >= 12){
    h=h - 12
}
console.log(h,':', m,':', s,':', ampm);

//my program end
console.log(".........");

var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';
  } 
  else
  { 
  hour=12;
  prepand=' PM';
  } 
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  } 
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);
