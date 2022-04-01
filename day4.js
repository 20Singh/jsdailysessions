// normal function
// f1();

// function f1() {
//     console.log('normal function definition')
// }

// f2()

// var f2 = function () {
//     console.log('anonymous function')
// }

// console.log(f2) //function definition

// f2()

// var f3 = () => {
//     console.log('arrow function')
// }
// f3()
// console.log(f3)


// arrow functions and anonymous functions are NOT hoisted.


// function add(a, b) {
//     return a + b
// }

// var add = (a, b) => {
//     return a + b
// }

// var add = (a, b) => a + b //implicit return; ONLY when the single statement inside the function is return statement

// console.log(add(4, 5))

// function multiplyBy2 (n) {
//     return n * 2
// }


// var multiplyBy2 = n => n * 2 //in case of one parameter, the parenthesis can also be removed

// console.log(multiplyBy2(5))


// ---------shadowing


// var x = 10

// function a() {
//     console.log(x)
// }

// a()


// var x = 10

// function a() {
//     var x = 20
//     function b() {
//         var x = 30
//         console.log(x, 'b') //30
//     }
//     b()
//     console.log(x, 'a') //20
// }
// console.log(x, 'global') //10
// a()




// ----------Arrays
// var arr = [1, 2, 3, 4]

// var arr = [1, 2, 'hi', 'bye', [4, 5, 6]]
// console.log(arr)


// console.log(arr[4][1]) //5

// console.log(arr[4].length)


// ----------array methods

// push - adds elements to the END of the array; secondly, it returns the new length of the array

// let arr = [1, 2, 3, 4]
// console.log(arr)

// let result = arr.push(5, 6, 7, 8)
// // arr.push([5, 6, 7])

// console.log(arr)
// console.log(result) //length of new array



//pop - deletes the last element from the array; secondly, it returns the popped element

// let arr = [1, 2, 3, 4]

// console.log(arr, 'before pop')

// let result = arr.pop()

// console.log(arr, 'after pop')
// console.log(result, 'result')


// let fruits = ['apple', 'banana', 'orange', 'kiwi']

// fruits.pop();
// console.log(fruits)
// console.log(fruits.pop())
// console.log(fruits)
// console.log(fruits.push('strawberry'))
// console.log(fruits.push('melon'))
// console.log(fruits)


// console.log(fruits.shift()) //apple
// console.log(fruits) //banana, orange, kiwi


// let result = fruits.unshift('first')

// console.log(fruits) //first, apple, banana, orange, kiwi
// console.log(result) //5



// ------indexOf, returns the first index at which a given element occurs

// let fruits = ['apple', 'banana', 'orange', 'kiwi', 'banana', 'jackfruit', 'cheeku', 'banana']

// let result = fruits.indexOf('banana')
// // let result = fruits.indexOf('banana', 4)

// console.log(result)







// --------------SLICE 
// let fruits = ['apple', 'banana', 'orange', 'kiwi', 'melon', 'tomato', 'grapes']
// let result = fruits.slice(1, 5) //ending index is NOT included
// let result = fruits.slice(4)
// let result = fruits.slice(-4)
// console.log(fruits, 'FRUITS')
// console.log(result, 'sliced fruits in result')

// let fruits = ['apple', 'banana', 'orange', 'kiwi', 'melon', 'tomato', 'grapes']

// console.log(fruits.push('strawberry', 'papaya', 'pear'))
// console.log(fruits.pop())
// console.log(fruits.shift())
// console.log(fruits.unshift('jackfruit'))
// let result = fruits.slice(0, 3)
// console.log(result)



var multiplyBy2 = (n)=>{
    return n*2;
   }
   console.log(multiplyBy2(5))
   var x = 10
   
   function a() {
      var x = 20
      function b() {
          var x = 30
          console.log(x, 'b') //30
      }
      b()
      console.log(x, 'a') //20
   }
   console.log(x, 'global') //10
   a()
   //var arr=[1,2 , 'hi', 'bye' ,[4,5,6]]
    //console.log(arr[4][0])
   //console.log(arr.length)\\
   let arr=[1,2,3,4,5]
   console.log(arr,'before pop')
   
   
   
   //fruits = ['apple', 'banana', 'orange', 'kiwi']
   
   //fruits.pop();
   //console.log(fruits)
   //console.log(fruits.pop())
   //console.log(fruits)
   //console.log(fruits.push('strawberry'))
   //console.log(fruits.push('melon'))
   //console.log(fruits)
   
   let fruits = ['apple', 'banana', 'orange', 'kiwi', 'melon', 'tomato', 'grapes']
   
   console.log(fruits.push('strawberry', 'papaya', 'pear'))
   console.log(fruits.pop())
   console.log(fruits.shift())
   console.log(fruits.unshift('jackfruit'))
   let result = fruits.slice(0, 3)
   console.log(result)

// //using array literals
// let arr = [1,2,3,4,5]; //empty array
// console.log("value of arr is",arr);

// //using constructor function
// let anotherArr = new Array(1,2,3,4,5,6,7,8);
// console.log("value of anotherArr is",anotherArr);
//console.log(arr[3]);

//push,pop,shift,unshift
// let values = ["a","e","i","o","u"];

// //length of the array
// console.log(values.length);
// values[10]=12; //assigning the index 10 to value of 12

// console.log(values[6]);

// values.push(1); //add last
// console.log(values);
// values.pop();  //removes from end
// console.log(values);
// values.shift(); //removes from start
// console.log(values);
// values.unshift("a"); //add first
// console.log(values);

//function to find out how many numeric/string values in an array
// function countString(arr){
//     let count = 0;
//     for (let i=0;i<arr.length;i++){
//         const element = arr[i];
//         if(typeof(element)=="string")count++
//     }                        or "number"
//     return count;
// }
// const result = countString["a","e","i","o","u",1,2,3,4,5,6]
// console.log(result);

// let arr=[1,2,3,4,5,6];

// //some and every are the two functions

// const value1=arr.some(element=>element>2); // => - call back functions
// const value2=arr.every(element=>element>2);
// console.log(value1,value2);   //output is true false