const products = [
  {
    name: " laptop",
    price: 1000,
    count: 5,
  },
  {
    name: "desktop",
    price: 1500,
    count: 2,
  },{
    name: "phone",
    price: 500,
    count: 10,
  },
];
const totalProductsValue = products.map((item) => item.price * item.count);
console.log(totalProductsValue);



const str = ['1','2','3','a',]
console.log(str);
const Numbers = str.map(Number)
console.log(Numbers);