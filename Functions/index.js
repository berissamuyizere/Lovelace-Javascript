//add
function add(num1, num2){
    return num1 + num2
}

 console.log(add(3,6))
 let a = 50
 let b = 20
 function subtract(num1, num2){
    let b = 60;
    console.log(b)
    const result = num1 - num2;
    console.log(result)
    console.log({aInside: a})
    return result
 }

 console.log(subtract(20,10))
 console.log({aOutside: a})
 console.log({bOutside: b})

 const greet = function(name){
    return `Hello ${name}`;

 }
 console.log(greet("Berissa"))

 const personAge = (birthYear) =>{
    const age = new Date().getFullYear() - birthYear;
    return {age};
 }
 console.log(personAge(2002))

 //IIF

//  (function(){
//     const a = 30;
//     console.log(a);
//  })();

let nums = [1,3,4,5,6]
const total = nums.reduce((prev, curr, index) =>{
    console.log({"ola": index })
    const item = prev[curr] = curr
    console.log(item)
}) 


