/* let hi = () => {
  console.log("Hi sumit");
};
hi(); */
/* 
let hi = name => {
  console.log(`hi sumit ${name}`);
};
hi("sumit"); */
/* 
let add = (a, b) => {
  return a + b;
};
console.log(add(7, 3)); */

/* let names = ["sumit", "amit", "anjali", "suman"];
names.map(name => console.log(name));
 */
/* let names = ["sumit", "amit", "anjali", "suman"];
let i = 0;
names.map(name => {
  i++;
  console.log(`name ${i} `);
}); */

let names = ["sumit", "amit", "anjali", "suman"];

var transformed = names.map(name => {
  return `howdy ${name} !`;
});
console.log(transformed);
