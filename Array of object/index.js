console.log("Answers");

//Que-1.
console.log("")
let studentRecords = [{name:"Sayali",id:123,marks:98},
    {name:"Komal",id:101,marks:23},
    {name:"Sameer",id:200,marks:45},
    {name:"Nehal",id:115,marks:75}
];

let arr = studentRecords.map(x => x.name.toUpperCase());

console.log( "1.Names of the students in caps. :");
console.log(arr);

//Que-2.

let arr1 = studentRecords.filter(x => x.marks > 50);
console.log( "2.Details of students who scored more than 50 marks:");
console.log(arr1);

//Que-3.

let arr2 = studentRecords.filter((x) => x.marks > 50 && x.id > 120);
console.log( "3.Details of students who scored more than 50 marks and have id greater than 120.:");
console.log(arr2);

//Que-4.

let arr3 = studentRecords.reduce((accu, curr) => accu + curr.marks,0);
console.log( "4.Sum total of the marks of the students.:");
console.log(arr3);

//Que-5.
console.log( "5.Names of the students who scored more than 50 marks :");
let arr4 = studentRecords.filter(x => x.marks > 50);
for(let i = 0; i<arr4.length; i++){
    console.log(arr4[i].name);
}

//Que-6.
console.log( "6.Print the sum of marks of the students with id > 120:");
let arr5 = studentRecords.filter(x => x.id > 120);
let arr6 = arr5.reduce((accu, curr) => accu + curr.marks,0);
console.log(arr6);

//Que-7.

for(let x of studentRecords){
    if(x.marks < 50){

        x.marks = x.marks + 15;
    }
}
console.log( "7.Print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50:");

let arr7 = studentRecords.filter(x => x.marks > 50);
let arr8 = arr7.reduce((accu, curr) => accu +curr.marks,0);
console.log(arr8);

//Que-8.
console.log("8.Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects.");

let student1 = {
    name : "Shreya Singh",
    class : 11,
    roll_no : 10055
}

let student2 = {
    name : "Saurabh Chopra",
    class : 12,
    roll_no : 10066
}
let student3 = {
    name : "Rohit sharma",
    class : 13,
    roll_no : 10077
}

let student4 = {
    name : "Ishan Joshi",
    class : 14,
    roll_no : 10088
}
let student5 = {
    name : "Raj Thorat",
    class : 15,
    roll_no : 10099
}

let student6 = {
    name : "Pradnya Modi",
    class : 16,
    roll_no : 100111
}
let student =[{...student1},{...student2},{...student3},{...student4},{...student5},{...student6}];
console.log(student);
