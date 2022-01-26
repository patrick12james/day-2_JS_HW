// console.log('Hello this is closures.js')

// Refresh on Scope
{
  const test = 'Hello'
}
// console.log(test);


let subject = 'JavaScript';

function homework(){
  let student = 'Brian'; // local block level variable
  console.log(`${student} has finished the ${subject} homework`);
}


homework();

// console.log(student); // Error - student is undefined


// Nesting Scopes
// function outer(){
//     let outerMessage = "This is the outer message!";
//     function inner(){
//         let innerMessage = outerMessage + " and this is inner"
//         console.log(innerMessage)
//     }

//     inner()
// }


// outer();

// Return a function from a function
function outer(){
  let outerMessage = "This is the outer message!";
  function inner(){
      let innerMessage = outerMessage + " and this is inner"
      console.log(innerMessage)
  }

  return inner
}


let outerReturn = outer();

console.log(outerReturn);


// outerReturn (which is a reference to the function inner() ) is the closure
// A closure is a function that preserves the outer scope in its inner scope

// More practical example

function multiplier(x){
  function times(y){
      return x * y
  }
  return times
}


const double = multiplier(2);
console.log(double);

console.log(double(3));
console.log(double(5));

const triple = multiplier(3);
console.log(triple);

console.log(triple(3));
console.log(triple(5));

// For this example, we will update the value of the outer function scope variable via closure

function counter(step=1){
  let counter = 0;
  console.log('Counter Hit!')
  function closureFunc(){
      counter += step
      console.log(`closureFunc has been executed. Counter: ${counter}`)
  }
  return closureFunc
}

const stepByOne = counter();

console.log(stepByOne);


stepByOne();
stepByOne();
stepByOne();
stepByOne();
stepByOne();
stepByOne();
stepByOne();
stepByOne();
stepByOne();
stepByOne();

const stepByFive = counter(5);
console.log(stepByFive);

stepByFive();



// IIFE - immediately invoked function express

const stepCounter = (function(step=1){
  let counter = 0;
  const insideFunc = function(){return counter += step}
  return insideFunc
})(5)

console.log(stepCounter);
console.log(stepCounter());
console.log(stepCounter());
console.log(stepCounter());
console.log(stepCounter());
console.log(stepCounter());
console.log(stepCounter());
