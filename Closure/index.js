//Q.1
/*
function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
console.log(counter());//1
console.log(counter());//2
console.log(counter());//3
console.log(counter());//4
*/
//Q.2
/*
let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged? count=1
  }
  console.log(count); // What is logged? count=0
})();
*/

//Q.3
/*
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  };//bcoz of var result is 3 3 3
  */


//Q.4 Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

/*
(function outer(length) {
    (function inner(breadth) {
    let area = length * breadth
    console.log( `Area of Rectangle of length ${length} and breadth ${breadth} is = ${area}`);
    
    })(30);
})(12);
//Output =Area of Rectangle of length 12 and breadth 30 is = 360
*/
//Q.5 Take a variable in outer function and create an inner function to increase the counter every time it is called
function outerFunc() {
    var count = 1;
     return function innerFun() {
        count++;
      return count;
    }
  }


  const result = outerFunc();
  console.log(result()); // Output: 2
  console.log(result()); // Output: 3
  console.log(result());// Output: 4
  console.log(result()); // Output: 5


//Q.6
/*
var a = 12;
(function () {
  console.log(a);
})();//output = 12
*/
//Q.7
/*
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    console.log(a);
  };
})();
x();//output =12
*/
//Q.8
/*
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);
//output -

// outerArg = 123
// innerArg = 456
// outerVar = a
// innerVar = b
// globalVar = xyz
*/