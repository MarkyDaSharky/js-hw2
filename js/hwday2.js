// console.log('Test');

//=======Exercise #1=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years.
*/

// Create our Person Prototype (Person class)
class Person{
    constructor (name, age){
        this.name=name;
        this.age=age;
}
    // create the printInfo method
    printInfo = function PrintInfo() {
        console.log(`${this.name} is ${this.age} years old`);
        };
    // Create another method for the addAge method
    addAge = function addAge(amount){
        this.age += amount
        };
}

const mark = new Person('Mark', 25);
const sam = new Person('Sam', 21);

console.log(mark);
console.log(sam);

mark.printInfo();
sam.addAge(3);
sam.printInfo();


//=======Exercise #2=========//

/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */


function replaceEvens(arr){
    for(let i=0; i < arr.length; i++){
        if(arr[i] %2 === 0  ){
            arr.splice(i, 'even index')
        }
    }
    return arr
}


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]


console.log(replaceEvens(arr))
