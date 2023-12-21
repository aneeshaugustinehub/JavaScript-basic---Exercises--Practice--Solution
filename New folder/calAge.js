


let yob = 2008;
let mob = 6;

function calulateAge(yob, mob) {
  let date = new Date();

  console.log(
    date.getFullYear() - yob,
    "year and",
    date.getMonth() - mob,
    "month"
  );
}

calulateAge(yob, mob);
