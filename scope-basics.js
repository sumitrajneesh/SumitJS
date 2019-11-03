let a = "first";
//it has citizinship to use inside the block
function scopeTest() {
  console.log(a);
  let b = "second";
  a = "changed";
  if (a != "") {
    console.log(a);
    console.log("inside if " + b);
    let c = "third";
  }

  //console.log(c);
}
scopeTest();

//console.log(b);

console.log(a);
