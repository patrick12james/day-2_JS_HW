console.log('Hello I am an array method file!')


let names = ['Jim', 'Andy', 'Dwight', 'Pam', 'Angela'];

// Standard Loop
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}

for (let n of names){
    console.log(n);
}

// Array Methods
// Array.prototype.forEach(callback)

function callBack(el, i, arr){
    console.log(el, i, arr)
}

names.forEach(callBack);

// As an arrow function
names.forEach((e, i, a)=>{console.log(e, i, a)})


///////////////////////////
// Array.prototype.map() //
///////////////////////////

let myNumbers = [2, 4, 6, 8, 10]

function squareOrCubeNum(x, idx, arr){
    console.log(arr)
    if (idx % 2 === 0){
        return x ** 2
    } else {
        return x ** 3
    }
}

myNumsSquared = myNumbers.map(squareOrCubeNum);
console.log(myNumsSquared);

// As an arrow function
let exponentNums = myNumbers.map((v, i) => i%2===0 ? v**2 : v**3);
console.log(exponentNums);


console.clear();



//////////////////////////////
// Array.prototype.filter() //
//////////////////////////////

let cities = ['Chicago', 'Charlotte', 'Boston', 'Columbus', 'Austin'];

function isCName(city){
    return city[0] === 'C'
}

let cNameCities = cities.filter(isCName);
console.log(cNameCities);

// Arrow Function
let oCities = cities.filter(city => (city.includes('o')));
console.log(oCities);

console.clear();
//////////////////////////////
// Array.prototype.reduce() //
//////////////////////////////

let newNums = [5, 10, 15, 20, 25, 30]
console.log(newNums);

function myReducer(prev, curr){
    console.log(prev, curr, "=", prev+curr);
    return prev + curr
}

let numsReduced = newNums.reduce(myReducer);

console.log(numsReduced);

let totalSum = 0;
for (let n of newNums){
    totalSum += n
}
console.log(totalSum);

console.clear();
/////////////////////////////
// Array.prototype.slice() //
/////////////////////////////

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

console.log(colors);
console.log(colors.slice(2));
console.log(colors.slice(2, 6));
console.log(colors.slice(1, -2));
console.log(colors.slice(-4));
console.log(colors.slice(10));

console.clear()

//////////////////////////////
// Array.prototype.splice() //
//////////////////////////////
console.log(colors);

let deletedColors = colors.splice(2, 3, 'pink', 'black', 'turquoise')

console.log(colors);
console.log(deletedColors);


// Array.pop()

let lastColor = colors.pop();
console.log(colors);
console.log(lastColor);

// Array.push()
let newLength = colors.push('magenta');
console.log(colors);
console.log(newLength);
