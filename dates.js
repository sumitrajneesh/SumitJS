let today = new Date();
let sumit = new Date("March 22, 1994 -0:01:23");

// let sumit = new Date('1994-03-07T7:01:23');
// let sumit = new Date(1994,11,6);
// let sumit = new Date(1994, 22,6,7,1,23);

var elapseTime = today - sumit;
console.log(elapseTime);

//get parts
console.log(sumit.getDate()); //Moday = 1, sunday = 7
console.log(sumit.getTime());

/* getMonth();
getDay();
getHours();
getMinutes();
getSeconds();
getMilliseconds(); */
