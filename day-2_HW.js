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
  constructor(name, age){
      this.name = name;
      this.age = age;
  }

  newAge(){
      newAge = age += 1;
      console.log(`${this.name} is now ${newAge}.`);
  }
}


const patrick = new Person('Patrick', 27);
const snoopy = new Person('Snoopy', 15);

console.log(patrick);
console.log(snoopy);


// create the printInfo method

// Create another method for the addAge method




//=======Exercise #2=========//

/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */
let theseNames = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];
let thoseNames = ["even index","Baseball","even index","Goku","even index","Rodger"];


function replaceEvens(arr){
  for(n in theseNames.legth){

  }
};



//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
