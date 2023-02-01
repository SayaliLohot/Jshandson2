
//Q.1 Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype
const parent ={
details(){
    console.log(`My name is ${this.name} and I am from ${this.location} and my age is ${this.age}`)
}
}
const firstchild = Object.create(parent);
firstchild.name ="Sayali";
firstchild.location="Maharashtra";
firstchild.age= 23;

firstchild.details();

const secondChild= Object.create(parent)
secondChild.name="Shruti"
secondChild.location="Pune"
secondChild.age="22"

secondChild.details()

//Q.2 Write code to explain prototype chaining
const grandFather={
    name:"Sudhir",
    age:80
}
const father=Object.create(grandFather)
console.log(father.name)//it will gives result as sudhir as name property is not to fater hence it will look for it in parent chain
const son = Object.create(grandFather)
son.name="Yogesh"
console.log(son.name)//as we declase value of son.name hence it shows resullt as yogesh

//Q.3 Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays
let arr = new Array(1,2,3,4,5)
arr.__proto__.sum=function(givenArray){
    let count = 0;
    for(let i =0;i<arr.length;i++){
        count +=arr[i];
    }
    return count;
}
let result =arr.sum(arr)
console.log("The sum of given array's element is ", result)
//output-15

//Q.4  Write a JavaScript function to retrieve all the names of object's own and inherited properties.

function DisplayData(name,age,college){
    this.name = name,
    this.age = age,
    this.college=college
}
DisplayData.prototype.passyrear ="2023"
 const data = new DisplayData("Sayali", 23 , "Prepbytes")
 console.log(data)
 console.log("The name is ",data.name);//output-Sayali
 console.log("The passyrear is ",data.passyrear)//output -2023
 console.log("The age is ",data.age)
 console.log("The college is ",data.college)