/* Question 2. For which value of x the results of the following statements are not the same? */

// Answer: NaN

// if(x<= 100){}

// if(!(x>100)){}

/* Questions 3.

What is the drawback of declaring methods directly in JavaScript objects? */

/* One of the drawback of declaring methods directly in JavaScript objects is that they are very memory inefficient. When you do that, a new copy of the method is created for each instance of an object. Let's see it on example: */

/* var Employee = function(name, company, salary) {
  (this.name = name || ""),
    (this.company = company || ""),
    (this.salary = salary || ""),
    (this.formatSalary = function() {
      return "$" + this.salary;
    });
};

Employee.prototype.formatSalary2 = function() {
  return "$" + this.salary;
};

//creating objects
var emp1 = new Employee("sumit", "Cloudpannel", 1000000);
var emp2 = new Employee("sumit", "Cloudpannel", 2000000);

console.log(emp1.formatSalary());
console.log(emp2.formatSalary()); */

/* Here each instance variable emp1, emp2, emp3 has own copy of formatSalary method. However the formatSalary2 will only be added once to an object Employee.prototype. */

/* Question 4. What is “closure” in javascript? Can you provide an example? */

/* Answer:
A closure is a function defined inside another function (called parent function) and has access to the variable which is declared and defined in parent function scope.

The closure has access to the variable in three scopes:

Variable declared in his own scope
Variable declared in parent function scope
Variable declared in the global namespace */

/* var globalVar = "abc";

//parent self invoking function
(function parentFunction(parentArg) {
  var parentFunVar = "x";

  //Closure self-invoking function
  (function closurefunction(closureArg) {
    var closureFuncVar = "y";

    console.log(
      "parentArg = " +
        parentArg +
        "\n" +
        "parentFunVar = " +
        parentFunVar +
        "\n" +
        "closureArg" +
        closureArg +
        "\n" +
        "closureFuncVar" +
        closureFuncVar +
        "\n" +
        "globalVar" +
        globalVar
    );
  })(5);
})(7); */

/* 
innerFunction is closure which is defined inside outerFunction and has access to all variable which is declared and defined in outerFunction scope. In addition to this function defined inside the function as closure has access to the variable which is declared in global namespace. */

/* Question 5. Write a mul function which will work properly when invoked with following syntax. 

console.log(mul(2)(3)(4));
console.log(mul(4)(3)(4));
*/

/* Answer */

/* function mul(x) {
  return function(y) {
    return function(z) {
      return x * y * z;
    };
  };
}

console.log(mul(2)(3)(4));
console.log(mul(4)(3)(4)); */

/* Here the mul function accepts the first argument and returns the anonymous function which takes the second parameter and returns the anonymous function which takes the third parameter and returns the multiplication of arguments which is being passed in successive

In Javascript function defined inside has access to outer function variable and function is the first class object so it can be returned by the function as well and passed as an argument in another function.

A function is an instance of the Object type
A function can have properties and has a link back to its constructor method
A function can be stored as variable
A function can be pass as a parameter to another function
A function can be returned from another function */
/* 
Question 6. How to empty an array in JavaScript? 
For instance:
var arrayList = ['a','b','c','d','e','f'] */

/* Answer
There are a couple of ways by which we can empty an array, So let's discuss all the possible way by which we can empty an array.

Method 1 */

/* arrayList = []

The code above will set the variable arrayList to a new empty array. This is recommended if you don't have references to the original array arrayList anywhere else because It will actually create a new empty array. You should be careful with this way of empty the array, because if you have referenced this array from another variable, then the original reference array will remain unchanged, Only use this way if you have only referenced the array by its original variable arrayList. 

For instance: */

/* var arrayList = ["a", "b", "c", "d", "e", "f"];
var anotherArrayList = arrayList; //Referenced arrayList by another variable
arrayList = []; //Empty the array

console.log(anotherArrayList); //output ['a','b','c','d','e','f'] */

// Method 2:

/* arrayList.length = 0;

The code above will clear the existing array by setting its length to 0. This way of emptying an array will also update all the reference variables that point to the original array.

For instance: */

/* var arrayList = ["a", "b", "c", "d", "e", "f"];
var anotherArrayList = arrayList;
arrayList.length = 0;
console.log(anotherArrayList); */

/* 
Method 3
arrayList.splice(0,arrayList.length);
Above implementation will also work perfectly. This way of empty the array will also update all the references of the original array. */
/* 
var arrayList = ["a", "b", "c", "d", "e", "f"];
var anotherArrayList = arrayList; //Referenced arrayList by another variable
arrayList.splice(0, arrayList.length); //Empty the array will also update all the references of the original

console.log(anotherArrayList); */
/* 
Method 4
while(arrayList.length){
    arrayList.pop();
}

Above implementation can also empty the array. But not recommended to use often */

/* Question 7. How to check if an object is an array or not? */

//Answer

/* The best way to find whether an object is instance of a particular class or not using toString method from Object.prototype    
var arrayList = [1,2,3] 
*/

/* One of the best use cases of type checking of an object is when we do method overloading in JavaScript. To understand this, let's say we have a method called greet which can take a single string and also a list of strings. To make our greet method workable in both situation we need to know what kind of parameter is being passed: is it single value or list of values?


function greet(param) {
    if(){
        //here have to check whether param is array or not
    }
    else {

    }
}

However, in the above implementation it might not necessary to check the type of the array, we can check for single value string and put array logic code in else block, let see below code for the same.


function greet(){
    if(typeof param === 'string'){

    }
    else {
        //If param if of type array then this block of code would execute
    }
}

Now it's fine we can go with the previous two implementations, but when we have a situation like a parameter can be single value, array, and object type then we will be in trouble.

Coming back to checking the type of an object, As we mentioned that we can use Object.prototype.toString

if(Object.prototype.toString.call(arrayList) === '[object Array]'){
    console.log('Array !')
}

If you are using jQuery then you can also used jQuery isArray method:

if($.isArray(arrayList)){
    console.log('Array');
}else {
    console.log('Not an array');
}

FYI jQuery uses Object.prototype.toString.call internally to check whether an object is an array or not.

In modern browser, you can also use:

Array.isArray(arrayList);
Array.isArray is supported by Chrome 5, Firefox 4.0, IE 9, Opera 10.5 and Safari 5 */

/* Question 8. What will be the output of the following code? */

/* var output = (function(x) {
  delete x;
  return x;
})(0);

console.log(output);

Answer
The code above will output 0 as output. delete operator is used to delete a property from an object. Here x is not an object it's local variable. delete operator doesn't affect local variables */

/* Question 9. What will be the output of the following code? */
