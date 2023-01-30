
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