// let arr = [1, 2, 3, 4, 5]

// -----------------includes()

// console.log(arr.includes(2))


// -----------------lastIndexOf

// let fruits = ['banana', 'orange', 'apple', 'banana', 'kiwi', 'banana']
// console.log(fruits.lastIndexOf('banana'))


// ------------findIndex
// let arr = [1, 5, 3, 4, 5, 6, 7, 8]
// // returns the index of the first element in the array that satisfies the provided testing function

// // whenever you give a function as an argument to a function, that is known as a callback function

// // function cb() { //callback function
// //     // conditions
// // }
// // let result = arr.findIndex(cb)

// function greaterThan4(element) { //returns a boolean value
//     return element > 4
// }

// let result = arr.findIndex(greaterThan4)

// console.log(result)


// -----------CONCAT
// let arr1 = ['a', 'b', 'c']
// let arr2 = ['d', 'e']

// let arr3 = arr1.concat(arr2)

// console.log(arr3)



// -------------toString

// const arr = [1, 2, 'a', '1a'];

// let result = arr.toString()

// console.log(result)



// -------JOIN

// let fruits = ['apple', 'banana', 'orange']

// let result = fruits.join('-')
// // let result = fruits.join('')
// // let result = fruits.join(' ')
// // let result = fruits.join()

//  console.log(result)



// -----------SOME

// let arr = [1, 2, 3, 4, 5]

// function isEven (element) { //if the element is even or not
//     if(element % 2 === 0 ) {
//         return true
//     }
//     return false
// }

// element % 2 === 0 -----> True, False

// function isEven(element) { //testing condition
//     return element % 2 === 0
// }

// let result = arr.some(isEven)
// let result = arr.some(function (element) {
//     return element % 2 === 0
// })
// let result = arr.some((element) => {
//     return element % 2 === 0
// })

// let result = arr.some(element => element % 2 === 0)
// console.log(result)


// -------------EVERY - returns true if EVERY element of the array satisfies the given condition
// let arr = [2, 4, 6, 8]

// let result = arr.every(item => item % 2 === 0)
// console.log(result)

// let arr = [1, 2, 3, 4, 5,]

// console.log(arr.some(y => y < 2)) //true
// console.log(arr.every(y => y < 6)) //true


// let str = 'string '
// console.log(str.length)


// let fruits = ['apple', 'orange', 'banana', 'pear', 'kiwi','orange']

// console.log(fruits.some(item => item.length < 5)) //true



// ------------FILTER - returns a new array WITH the elements that satisfy the given condition

//let arr = [1, 2, 3, 4, 5]

// function isGreaterThan3(element) {
//     return element > 3
// }

// //let resultArray = arr.filter(isGreaterThan3)

// let resultArray = arr.filter(element => element >= 3)

// console.log(resultArray)

// filter out odd elements

// let oddElems = arr.filter(item => item % 2 !== 0)
// console.log(oddElems)


// ----------Map(each and every element apply the condition)

// returns a new array populated with the results of the callback function

//   let arr = [1, 2, 3, 4, 5]

// //-------- normal way
// let newArr = []; //doubled values
// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] * 2)
// }
// console.log(newArr)

// --------using map()

// function double(item) {
//     return item * 2
// }

//let newArr = arr.map(double)
// let newArr = arr.map(element => element * 2)

// console.log(newArr)



// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [10, 9, 8]

// let newArr1 = arr1.map(item => item * item)
// let newArr2 = arr2.map(item => item * item)

// console.log(newArr1, newArr2)



// let arr = [1, 2, 3, 4, 5] //Question - return a new array which adds 5 to each element

// let newArr = arr.map(e => e + 5)

// console.log(newArr)


// -------FOREACH - executes a provided function once for EACH element in the array

// let arr = [1, 2, 3, 4, 5]

// using for loop
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i] * 2)
// }

// forEach

// arr.forEach(item => {
//     console.log(item * 2)
// })

// using forEach calculate the sum of elements in arr
// let arr = [1, 2, 3, 4, 5]

// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }
// console.log(sum)

// let sum = 0
// arr.forEach(item => {
//     sum += item //sum = sum + item
// })

// console.log(sum)


// ---------------REDUCE ----- returns a single value
// accumulator, current, initial value


// let arr = [1, 2, 3, 4, 5]

// let initialValue = 0
// let result = arr.reduce(function (accumulator, current) {
//     accumulator = accumulator + current //accumulator += current
//     return accumulator
// }, initialValue)

// console.log(result)



//let arr = [1, 2, 3, 4, 5]

// let squaredArr = arr.map(item => item * item) //squaring arr

// let evenSquares = squaredArr.filter(item => item % 2 === 0) //filtering out even values

// let sumOfEvenSquares = evenSquares.reduce((acc, curr) => {
//     acc += curr
//     return acc
// }, 0)

// console.log(sumOfEvenSquares)

// FILTER MAP AND REDUCE ARE CHAINABLE
// let sumOfEvenSquares = arr.map(item => item * item).filter(item => item % 2 === 0).reduce((acc, curr) => {
//     acc += curr
//     return acc
// }, 0)

// console.log(sumOfEvenSquares)

// let salary = [100, 200, 300, 400, 500, 600]

// filter out salaries greater than 300

// double the filtered salaries

// find out the total salary



































function f1(){
    console.log("normal function")
   }
   f1();                                            // normal function
   
   
   f1();                                           // normal function
   function f1(){
    console.log("normal function")
   }
   
   
   var f2 = function (){
    console.log("anonymous function")
   }
   f2();                                           // anonymous function
   
   // console.log(f2)       // function defination 
   
   
   // f2();                                             // TypeError : f2 is not a function
   // var f2 = function (){
   //     console.log("anonymous function")
   // }              
   
   
   var f3 = () =>{
    console.log("arrow function")
   }
   f3();                                             // arrow function
   
   
   // arrow function and anonymous functions ar NOT hoisted.
   
   
   // Que. : convert this to an arrow function
   
   function add(a, b) {
    return a + b
   }
   
   // ans :
   // 1.
   var add = (a,b) => {
    return a + b
   }
   console.log(5,4);
   
   // 2.
   var add = (a, b) => a + b            // implicit return; ONLY when the single statement inside the function is return statement.
   
   console.log(add(4, 5))
   
   
   // using 1 parameter :
   var multiplyBy2 = n => n*2           // In case of one parameter inside function, the paranthesis() can also be removed.
   
   console.log(multiplyBy2(5));
   
   
   
   // -----------------shadowing-----------------------
   
   var x = 10
   
   function a(){
    console.log(x)
   }
   
   a()                        //  10      
   
   
   var x = 10
   
   function a(){
    var x = 40;
    console.log(x);
   }
   
   a()                          // 40
   var x = 10
   
   function a() {
       var x = 20
       function b() {
           var x = 30
           console.log(x, 'b')     //30
       }
       b()
       console.log(x, 'a')         //20
   }
   console.log(x, 'global')        //10
   a()
   
   // 10 'global
   // 30 'b'
   // 20 'a'
   
   





















//this is so called anonymous function assigning with the variable f1.
// var f1 = function(){
//     console.log("anonymous function");
// }
// f1();  //it executes anonymous function
//when we try to put f1() above the function it will throw f1 isnt function.

//arrow function
// var f2=() =>{
//     console.log("arrow function");
// }
// f2();





//arrow and anonymous function are not hoisted when we put the f1() above the function definition

//convert this to an arrow function
 // question
//     function add(a, b) {
//     return a + b;
// }
// console.log(add(4,5));

// // answer
// var add=(a,b)=>{
//     return a + b;
// }

// var add = (a,b) => a+b //implicit return:only when the single statement inside the function is return statement

// conversion from:
// var multiplyBy2 = (n){
//     return n*2;
// }
// To:
// var multiplyBy2 = n => n*2 //in case of one parameter,the paranthesis can also be removed

// var x=10;
// function a(){
//     var x=20;
//     function b(){
//         var x=30;
//         console.log(x); //30
//     }
//     b();
//     console.log(x); //20
// }
// console.log(x); //10
// a();

//Arrays
// var arr =[1,2,3];

// var arr = [1,2,'hi','bye',[4,5,6]];
// console.log(arr);
// console.log(arr[4][1]); //output is 5

// console.log(arr.length); //5
// console.log(arr[4].length); //3

//array methods
//push ----- adds elements to the end of the array; secondly it returns the new length of the array.
// let arr = [1,2,3,4];
// console.log(arr);

// arr.push(5) //or (5,6,7) to add multiple items or (5,6,[7,8,9]) it adds 3 elements
// console.log(arr)

//pop ----deletes the last element from the array; secondly it returns the popped element

//shift----deletes the first element from the array;secondly it returns the shifted element

//unshift----adds the element at first in the array;secondly it returns the new length of the array

//practice question:
// let fruits = ['apple', 'banana', 'orange', 'kiwi']

// fruits.pop();       //removes kiwi
// console.log(fruits)  //[apple banana orange]
// console.log(fruits.pop()) //orange---it removes the last element and returns the last element
// console.log(fruits)  //[apple banana]
// console.log(fruits.push('strawberry')) //3---it returns the element length
// console.log(fruits.push('melon')) //4---it returns the element length
// console.log(fruits) //[apple banana strawberry melon]

// console.log(fruits.shift()) // apple

// let result = fruits.unshift('first')
// console.log(fruits) //fruits apple banana orange kiwi
// console.log(result); //5

//-----indexof -returns the first index at which a given element occurs
// let fruits = ['apple', 'banana', 'orange', 'kiwi','banana','jackfruit','cheeku','banana']
// let result = fruits.indexOf('banana');  //index value is 1   //it prints becoz it took the index value as 1 at first
// let result1 = fruits.indexOf('banana',5); //index value is 7  //it will look after the index 5 for banana
//console.log(result);


//-----SLICE-----it slices the elements according to the index value
//slice works with negative index value.(starting from last element as -1 to first element as-8)
// let fruits = ['apple', 'banana', 'orange', 'kiwi','melon','jackfruit','cheeku']
// let result = fruits.slice(1,5) //starting position and ending position but ending index is not included
// console.log(result);   // [banana orange kiwi melon]
// console.log(4); //[melon jackfruit cheeku]
// fruits.slice(-4); //[ kiwi melon jackfruit cheeku]
//             (1,-2)

// let fruits = ['apple', 'banana', 'orange', 'kiwi', 'melon', 'tomato', 'grapes']

// console.log(fruits.push('strawberry', 'papaya', 'pear')) //total element 10 so it prints that
// console.log(fruits.pop()) //removes the pear at last and prints pear
// console.log(fruits.shift()) //removes apple at first and prints apple
// console.log(fruits.unshift('jackfruit')) //add jackfruit at first and prints the total length of the array
// let result = fruits.slice(0, 3)
// console.log(result)  //jackfruit banana orange

//to print the pattern            //*
// var str="";                      * *
// for(let i=0;i<5;i++){            * * *
//     for(let j=i;j<=i;j++){       * * * *
//       str=str +"*";              * * * * *
//     }
//     console.log(str);
// }