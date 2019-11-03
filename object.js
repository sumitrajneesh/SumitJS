let car = {
  make: "bmw",
  model: "8900li",
  year: 2010,
  getPrice: () => {
    //calc the price
    return 5000;
  },
  getDiscription: function() {
    console.log(this.make + " " + this.model);
  }
};

car.getDiscription();
console.log(car.model);
/**
 * Don't use this technique
 */
// console.log(car["year"]);
// console.log(car[1]);
/*

var anotherCar = {}; //empty object

(anotherCar.sumit = "learning javascript"), console.log(anotherCar.sumit);
*/
//object contain a object as property

/** 
var a = {
  anotherProperty: { b: "hi" }
};

console.log(a.anotherProperty.b);
**/
/** 
//object contain array of object
var c = {
  myProperty: [
    {d:"bwm"},
    {e:"marceries"},
    {f:"i Love car"}
  ]
}
*/

let carLot = [
  { year: "1996", make: "Toyata", model: "7889" },
  { year: "2001", make: "bmw", model: "699i" },
  { year: "2013", make: "mercieres", model: "67778" }
];

let contacts = {
  cusotomer: [
    {
      firstName: "sumit",
      lastName: "choudhary",
      phoneNumber: ["900083039", "90083030"]
    },
    {
      firstName: "Ankita",
      lastName: "khandelwaal",
      phoneNumber: ["88998482839"]
    }
  ],
  employees: [
    {
      firstName: "Sumita",
      lastName: "Jha",
      phoneNumber: ["895383939", "938922829"]
    }
  ]
};
