// var name = "jacky";
// var name = "Queen"
// console.log(name)
// var name = "Berissa";

//Global scope
// const globalVariable = "Hello";

// function myFunction() {
//   console.log(globalVariable);
// }

// myFunction();
// console.log(globalVariable); 




// Local scope
// function myname(){
//     var greeting = "hi"
//     console.log(greeting);
// }

// myname();
// console.log(myname)

// console.log(number)
// let number = 2;

// var number;
// console.log(number)
// number = 2

// names = "jackcy"
// console.log(names)

// let x = "15"
// console.log(Number(x))
//  let y = 45
//  let z = Boolean(y)
//  console.log(z)
//  console.log(typeof(z))


//  let name = "12"
//  let name2 = ""
//  let num = 13
//  console.log(num + name)

//  let str = "I am from Rwanda"
//  let str2 = str.slice(-5, -1)
//  console.log(str2)
//  console.log(str.substring(2,5))
//  console.log(str.replaceAll("a", "o"))
//  console.log(str.split(" ").join(" "))

//  let myName = "rissa"
//  console.log(myName.padStart(7, "Be"))
//   let myName2 = "Beri"
//   console.log(myName2.padEnd(7, "ssa"))
//   let repeated = (myName + " ").repeat(3).trim()
//  console.log(repeated) 

// let str = "extravaganza"
// console.log(str.slice(8))

// const food = "The quick fox jumped over the lazy dog"
// const newFood = food.split(" ")
// console.log(newFood.splice(4,0,"eat").join(" "))

let story = "the brown fox jumpes over the lazy dog"
//  console.log(story.count("the"))
//  console.log(story.count(" brown"))

let splittedstr = story.split(" ")

// let theCount = 0
// let brownCount = 0
//  splittedstr.forEach((word) => {
//     if( word === "the"){
//         theCount++
//     }
//     else if(word === "brown"){
//         brownCount++
//     }
//  })
// console.log(theCount)
// console.log(brownCount)

// using filter to count the occurences

let theCount = splittedstr.filter( (word) => word === "the").length
let brownCount = splittedstr.filter((word) => word === "brown").length
console.log({theCount})
console.log({brownCount})


// console.log( `the occurrence of "the" is ${theCount}`)
// console.log(`the occurrence of "brown" is ${brownCount}`)

// let string = "undERneath world"
// let splittedstring = string.split(" ")

// splittedstring.forEach((word, index) =>{
//    splittedstring[index] =  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
// })
// console.log(splittedstring.join(" "))

// const arr = ["orange", "apple", "mango", "pawpaw", "orange", "pawpaw"]
// console.log(arr.indexOf("mango"))
// console.log(arr.at(0))
// console.log(arr.lastIndexOf("orange"))
// console.log(arr.toString())

// console.log(arr.push("kiwi"))
// console.log(arr)
// console.log(arr.pop())
// console.log(arr)
// console.log(arr.unshift("banana"))
// console.log(arr)
// console.log(arr.shift())
// console.log(arr)

// console.log(arr.splice(2, 0, "grapes"))
// console.log(arr)
const arr = ["orange", "apple", "mango", "pawpaw", "orange", "pawpaw"]
// const nums = [12,34,23,65,23]
//  let newNums = nums.map((num) => {
//     return num*num
// })
// console.log(newNums)

// const array = ["keza", "queen","carine"]
// const newArr = array.map((word) => {
//     return word[0].toUpperCase() + word.slice(1).toLowerCase()
// })
// console.log(newArr)

arr.forEach((word, index) =>{
    arr[index] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
})
console.log(arr)
// let myPet = ["cow", "Bird", "Snake"]
// console.log(myPet.join(""))

// var arr3 = [-5,9,5,7,68,]
// let newArr = arr3.map((a,b) =>{
//     return a-b
// })
// console.log(arr3.sort())

// let arr = ["food", "fruits"]

let newarr = arr.find((item) =>{
   return item === "food"
})

if(newarr !== undefined){
    console.log("found", newarr)
}
else console.log("not found")

// let string = ["boy", "man","girl","man"]
// str.forEach((item,index) =>{
//     if()
// })

// let unique = str.filter((item, index) =>{
//     return str.indexOf(item) === index
// })
// console.log(unique)

// let duplicate = str.filter((item,index) =>{
//     return str.indexOf(item) !== index
// })

// console.log(duplicate)

// console.log(str.splice(2,1, "child"))
// console.log(str)
 let str = [2,5,6,7,8,5]
let newstring = str.map((number) =>{
    return number * 2
})
console.log(newstring)

let string2= string.map((word)=>{
    return word.repeat(3)
})
console.log(string2)

string.forEach((word)=>{
    console.log(word.repeat(3))
})

let capitals = string.map((word) =>{
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
})
console.log(capitals)

const finding = str.filter((a)=>{
    if (a%2 === 0){
        console.log("even")
    }
    else console.log("not even")
})
