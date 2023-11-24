const letters=['a','b','c','d','a','b','a','a']
let count ={} ;
letters.forEach(item =>{
if (count[item]) {
count[item]++;
} else {
count[item]=1;
}})

console.log(count);