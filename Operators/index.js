let x = 5;
let y = "5";
// loosely equal
let looselyEquality = x == y? true: false;

console.log({looselyEquality})

let strictlyEquality = x === y? true: false;

console.log({strictlyEquality})

//unary operator
console.log(typeof x)

//compound Assignment

let b = 6;
b +=5;
console.log({b})

//INcrement and decrement
b++
console.log({b});
b--
console.log({b})

//comparison

let c= 5;
let d = 10;
let morethanOrEqualIsTo = (c >= d)? true: false
console.log({morethanOrEqualIsTo })

//logical operators
let logicalAND = x == y && c <= d? true: false;
console.log({logicalAND})

let logicalOR = x == y || c <= d? true: false;
console.log({logicalOR})

//note operator
let userONline = false;
let logicalNOT = !userONline? true: false;
console.log({logicalNOT})

//implicity coercion
let num = "5"
num*= 5
console.log({num})

let e = +"65";
console.log({e})

//explicity
let item = 5;
console.log(typeof item)
item = String(item);
console.log({item})
item = Array(item);
console.log({item})

let obj = Object(5)
console.log({obj})

let copy = "haha\n"
console.log(copy.repeat(4))

