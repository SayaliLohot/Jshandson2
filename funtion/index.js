//ques 1 -Create one function with zero parameter having a console statement;
function empty(){
    console.log("This is function without parameter");
}
empty() 
//output-This is function without parameter
//ques2 -Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

function sum(a,b){
    a+b;
   console.log(`Sum of ${a} and ${b} is ${a+b}`);
}
sum(3,4)
//output-Sum of 3 and 4 is 7

//ques3-Create one arrow function

arrowFun = () => {
    console.log("Hello World!");
  }
arrowFun()
//output-Hello World!

// ques4 -"Print output: 
// var x = 21;
// var girl = function () {
//     console.log(x);
//     var x = 20;
// };
// girl ();
//output-undefined
//it gives undefined error coz girl is variable and we calling is as function

//ques -5"Print output: 
// var x = 21;
// girl ();
// console.log(x)
// function girl() {
//     console.log(x);
//     var x = 20;
// };
//output-undefined, 21

//ques 6-"Print output

// var x = 21;
// a();
// b();

//   function a() {
    
//    x = 20;
//   console.log(x);
// };
//  function b() {
    
//     x = 40;
//    console.log(x);
// };
//output-20,40

//ques7-Write a function that accepts parameter n and returns factorial of n
//while loop-
/*
function factorialize(num) {
    var result = num;
    if (num === 0 || num === 1) 
      console.log(1); 
    while (num > 1) { 
      num--;
      result *= num;
    }
    console.log(result);
  }
  factorialize(5);
//output-120


//for loop-
  function factorialize(num) {
    if (num === 0 || num === 1)
      console.log(1);
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
   console.log(num);
  }
  factorialize(4);
  //output-24
  */

  //Day-2
//Q.1
/*
function FindSum(a, b){
    return a + b;
}

function DisplayData(data, batch){
    console.log(`I am from ${data} and My batch is EA${batch}`)
}
DisplayData("PrepBytes", FindSum(10, 9));
//output- I am from PrepBytes and My batch is EA19
*/

//Q.2
/*
Abc();
const Abc = function(){
    let value = 20;
    console.log(value);
};
//output- Uncaught ReferenceError: Cannot access 'Abc' before initialization
*/
//Q.3
/*
var a = 10;
(function (){
    console.log(a);
    var a = 20;
})();
//Output -undefined
*/
//Q.4 "Guess the Output

const greet =  function(name){
  return function(m){
  
      console.log(`Hi!! ${name}, ${m}`);
  }
}

const greet_message = greet('EA19');
greet_message("Welcome To PrepBytes");
//Output-Hi!! EA19, Welcome To PrepBytes
