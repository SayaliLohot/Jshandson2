//Q.1 Write one example explaining how you can write a callback function?
function add(a,b){
    return a+b;
}//add is function that gives sum of two number
function check(string, addition){
    console.log(string, addition);
}
check("Sum of 5 and 6 is",add(5,6));//here we passing argument as callback function add
//Output -Sum of 5 and 6 is 11


//Q.2 
/*"Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

Explain callback hell.
Numbers
1
2
3
4
5
6
7"
*/
//code -
function printnumber(){
    setTimeout(function(){
      console.log("After 1 second ",1)
       
      setTimeout(function(){
        console.log("After 2 second ",2)

        setTimeout(function(){
            console.log("After 3 second ",3)
    
            setTimeout(function(){
                console.log("After 4 second ",4)
        

                setTimeout(function(){
                    console.log("After 5 second ",5)
            

                    setTimeout(function(){
                        console.log("After 6 second ",6)

                        setTimeout(function(){
                            console.log("After 7 second ",7)
                    
                          },7000) 
                
                      },6000) 

                  },5000) 

              },4000) 

          },3000) 

      },2000)   

  },1000)
}
// printnumber()
/*output -
1-after 1 second
2-after 2 second
3-after 3 second
4-after 4 second
5-after 5 second
6-after 6 second
7-after 7 second
*/


//Q.3
/*"Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

Numbers
1
2
3
4
5
6
7"*/

let promise = new Promise((resolve,reject) => {
    resolve()
})

promise.then(() => {
    setTimeout(() => {
        console.log(1);
    },1000);
}).then(() => {
    setTimeout(() => {
        console.log(2);
    },2000);
}).then(() => {
    setTimeout(() => {
        console.log(3);
    }, 3000);
}).then(() => {
    setTimeout(() => {
        console.log(4);
    }, 4000);
}).then(() => {
    setTimeout(() => {
        console.log(5);
    }, 5000);
}).then(() => {
    setTimeout(() => {
        console.log(6);
    }, 6000);
}).then(() => {
    setTimeout(() => {
        console.log(7);
    }, 7000);
})
//output 1 2 3 4 5 6 7
//Q.4
////Q4. Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 

let promiseYes = (str) =>
    new Promise((resolve,reject) => {
        if(str === "yes"){
            resolve();
        }
        else{
            reject();
        }
    })

promiseYes("yesays").then(()=>{
    console.log("Promise resolved");
}).catch(()=>{
    console.log("Promise is rejected")
})
//Output for "yesays" is Promise is rejected


// Q5. Create examples to explain callback function?
//callback function is we are passing argument of one fucntion as function here sq(a) is one function which is argument of checksq() function.
function sq(a){
    return a*a;
}
function checksq(string, square){
    console.log(string, square);
}
checksq('The square '+ sq(5));

//Q.6 Create examples to explain callback hell function?
// The phenomenon which happens when we nest multiple callbacks within a function is called a callback hell. 
//The shape of the resulting code structure resembles a pyramid and hence callback hell is also called the “pyramid of the doom”. 
//It makes the code very difficult to understand and maintain.
//In Q.2 we create nesterd setTimeout function one inside another, its difficult to read the code and also cause the error.


// Q7. Create examples to explain promises function?
//Promises are used to handle asynchronous operations in JavaScript.
//They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.
//Promise function are the solution to callback hell 

//promise-to handle asynchronous code of js
//1.pending
//2.complete/resolved
//3.rejected
/*
  const promiseFunc = new Promise((resolve,reject) =>{
  let count = 2
  if(count === 1){
    resolve("Yes, it's right. Count value is 1")
  }
  else{
    reject("No, it's wrong. Count value different")
  }
})
promiseFunc.then((x) =>console.log( "Resolve part =", x)).catch((err) => console.log("Reject part =",err));

*/

/*
const prom2 = new Promise((resolve, reject) =>{
    let num = 10;
    if(num%2===0){
        resolve("It's even number")
    }
    else{
    reject("It's odd numer")
    }
})
prom2.then((x) =>console.log( "Resolve part =", x)).catch((err) => console.log("Reject part =",err));
*/
/*
// method 2
function OddEven(num){
    return new Promise((resolve, reject) =>{
        if(num%2===0){
            resolve("It's even number")
        }
        else{
        reject("It's odd numer")
        }
    })
}
OddEven(11).then((x) =>console.log( "Resolve part =", x)).catch((err) => console.log("Reject part =",err));
*/


// Q8. Create examples to explain async await function?
function main() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Resolved');
      }, 1000);
    });
  }
  
  async function asyncCall() {
    console.log('wait for some time...');
    const result = await main();
    console.log(result);
  }
  
  asyncCall();
  //output-wait for some time...
  //after 1 sec -Resolved

  //Q.9  Create examples to explain promise.all function
  
    p1 = Promise.resolve(50);
    p2 = 200
    p3 = new Promise(function(resolve, reject) {
        setTimeout(resolve, 100, 'geek');
    });
 
    Promise.all([p1, p2, p3]).then(function(values) {
        console.log(values);
    });

    //Output - Array [50, 200, 'geek']