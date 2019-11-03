/*
setTimeout(function() {
  console.log("i waited 2 seconds");

}, 2000);
*/
/*
let counter = 0;
function timeout() {
  setTimeout(function() {
    console.log("hi" + counter++);
    timeout();
  }, 2000);
}
*

timeout();
//ctrl + c
*/

(function() {
  console.log("Immediately Invoked Function expression (IIFE)");
})();
