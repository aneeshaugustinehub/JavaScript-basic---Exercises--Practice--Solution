let str = 'hi'
let str2 = "";
for (i = 0; i <= str.length; i++) {
  let tstr = str.charAt(str.length - i);
  str2 = str2 + tstr;
}
console.log(str2);
