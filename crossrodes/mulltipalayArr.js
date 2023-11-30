let arr = [1,2,3,4,5]
let mulArr =[]
for (let i = 0; i < arr.length-1; i++) {
    mulArr += arr[i]*arr[i+1]
}
console.log(mulArr);