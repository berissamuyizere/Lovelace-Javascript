let students = ["Jane", "Amanda", "Hellen"];

//Reassigning a value

students[1] = "Tom";
console.log({students});
//add an item to  an array at the end

students.push("Susan");
console.log({students});

//add an  item at the beginning of the array

students.unshift("Anne");
console.log({students});
// Remove the last item
students.pop();
console.log({students});

//remove the first element
students.shift();
console.log({students});

//Double each item
let nums = [10,20,30,40];
let doubled = nums.map(item => {return item *2 })
console.log(doubled)

let count = 0;
nums.forEach(item => {
    count += item
})
console.log(count)
const total = nums.reduce((acc, item) => acc + item, 0);
console.log({total})

//for loop
let multiples = [];
for(let i =0; i < nums.length; i++){
    multiples.push(nums[i] * nums[i]);
}
console.log({multiples});

//filter
const items = [5,2,8,9,1,12,15];
const even = items.filter(item => item %2 === 0);
console.log({even});
//find
const discover = items.find(item => item === 1);
console.log(discover);

// Destructuring
// const [a,b,...c] = nums;
// console.log({a});
// console.log({b});
// console.log({c});

let a = 4
let b = 8

if(a <b){
    console.log(`${a} is less than ${b}`)
} else if(a>b){
    console.log(`${a} is less than ${b}`)
}