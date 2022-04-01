// let user = {
 //     'name': 'Rahul',
 //     age: 25,
 //     isAdmin: false
 // }
 
 
 // console.log(user.name)
 
 // console.log(user['name'])
 
 // let user = {} //object literal syntax
 // // user.name = 'Agni'
 // // user['name'] = 'Agni'
 // console.log(user)
 
 
 // let user = new Object() //object constructor syntax
 // user.name = 'Rahul'
 // console.log(user)
 
 // delete user.name
 
 // console.log(user)
 
 
 
 // let user = {
 //     'name': 'Rahul',
 //     age: 25,
 //     isAdmin: false,
 //     'like birds': true
 // }
 
 // console.log(user['like birds'])
 
 
 
 // let fruit = 'apple'
 
 
 // let obj = {
 //     [fruit]: true
 // }
 
 // console.log(obj)
 
 // let fruit = 'apple'
 
 
 // let obj = {
 //     [fruit + 'Computers']: true //computed properties
 // }
 
 // console.log(obj.name)
 
 
 // let user = {
 //     name: 'Rahul',
 //     age: 24
 // }
 
 // console.log("age" in user) // boolean value
 
 
 // looping in object
 // for in loop
 
 
 // let user = {
 //     name: 'Rahul',
 //     age: 24,
 //     isAdmin: true
 // }
 
 // for (let key in user) {
 //     //print keys
 //     console.log(key, user[key])
 // }
 
 
 // let salaries = {
 //     John: 100,
 //     Ann: 160,
 //     Peter: 130
 // }
 
 // let sum = 0
 
 // for (let item in salaries) {
 //     sum += salaries[item]
 // }
 
 // console.log(sum)
 
 
 
 // Multiply ONLY the numeric values with 2
 // let menu = {
 //     width: 200,
 //     height: 300,
 //     title: 'My menu'
 // }
 
 // for (let key in menu) {
 //     if (typeof menu[key] === 'number') {
 //         menu[key] = menu[key] * 2
 //     }
 // }
 
 // console.log(menu)
 
 
 
 // -------Object referencing and copying
 
 // let message = "hello"
 // phrase = message + "world"
 
 // console.log(message)
 // console.log(phrase)
 
 
 // let user = {
 //     name: 'rahul'
 // }
 
 // admin = user
 
 // console.log(user)
 // console.log(admin)
 
 // admin.name = 'Pooja'
 
 // console.log(user, 'user')
 // console.log(admin, 'admin')
 
 
 
 
 // let user = { name: 'Rahul' }
 // let admin = { name: 'Aarti' }
 
 // admin.name = 'Shruti'
 // // console.log(admin === user)
 // console.log(user)
 // console.log(admin)
 
 
 
 // let user = {
 //     name: 'Rahul',
 //     age: 23,
 //     isHappy: true
 // }
 
 // let duplicate = {}
 
 
 // // for (let key in user) {
 // //     duplicate[key] = user[key]
 // // }
 
 // Object.assign(duplicate, user)
 // let clone = Object.assign({}, user)
 // clone.isHappy = false //to show that duplicate is independent
 
 // console.log(user)
 // console.log(clone)
 
 
 
 // SPREAD OPERATOR ...
 
 // let user = {
 //     name: 'rahul',
 //     age: 23
 // }
 
 // let clone = { ...user, lastName: 'Sharma' }
 
 // console.log(user)
 // console.log(clone)
 
 // let arr1 = [0, 1, 2]
 // let arr2 = [3, 4, 5]
 
 // // make arr3 which combines all values from arr1 and arr2
 
 // let arr3 = [...arr1, ...arr2]
 
 // console.log(arr3)
 
 
 // let obj1 = { name: 'Rahul', x: 42 }
 // let obj2 = { name: 'Shyam', y: 13 }
 
 // let obj3 = { ...obj1, ...obj2 }
 
 // console.log(obj3)

















/*
console.log("hello world");
let arr1=['a','b','c','d','e','f','g','h','i','j','k','l']
console.log(arr1);                                       //['a','b','c','d','e','f','g','h','i','j','k','l']
arr1.push(z);                                               //push z
console.log(arr1);                                   //[ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'z' ]
console.log(arr1.push());                            //13
arr1.pop();                                          // pop z
console.log(arr1);                                  // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l' ]
console.log(arrl.pop());                           //l
arr1.shift();                                     // remove 1st element 
console.log(arr1);                                 //[ 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k' ]
console.log(arr1.shift());                         //b
arr1.unshift('x');                                     // add x at start
console.log(arr1);                                     //[ 'x', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k' ]
console.log(arr1.unshift());                           //10
console.log(arr1.slice(1,6));                         //[ 'c', 'd', 'e', 'f', 'g' ]
console.log(arr1.slice(2,7));                         //   [ 'd', 'e', 'f', 'g', 'h' ]
console.log(arr1.slice(1,-1));                        //[ 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' ]
*/  // concat array
//let arr1=['a','b','c','d','e','f','g','h','i','j','k','l']
//console.log(arr1);

//let arr2=['z','x','y']
//let result=arr1.concat(arr2);
//console.log(result);


// indexof
//let arr1=['a','b','c','d','e','f','g','h','i','j','k','l']
//let result=arr1.indexOf('c');
//console.log(result);
/*
let arr2=[1,3,4,3,6,7,8,9]
let result=arr2.indexOf(3,2);
console.log(result);
*/
/*  // tostring
let arr1=['a','b','c','d','e','f','g','h','i','j','k','l']
let result=arr1.toString();
console.log(arr1);
console.log(result);
*/
/*  //Join
let arr1=['a','b','c','d','e','f','g','h','i','j','k','l']
let result=arr1.join(" and ");
console.log(arr1);
console.log(result);
*/
// include method
/*
let arr1=['a','b','c','d','e','f','g','h','i','j','k','l']
let result=arr1.includes("z");
let ans=arr1.includes('a');
console.log(ans);
console.log(result);
*/
/* // lastindexof
let arr=[1,2,3,4,5,5,3,2,1]
console.log(arr);
let result=arr.lastIndexOf(2);
console.log(result);
*/
// entries
/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
const f = fruits.entries();
console.log(f);
*/

/*
// every() return true if all test case pass
let arr=[19,12,34,56]
function greaterthan10(item)
{
    return item>10;
}
let result=arr.every(greaterthan10);
console.log(result);
function lessthan100(element)
{
    return element<100;
}
let ans=arr.every(lessthan100);
console.log(ans);
function greaterthan20(n)
{
    return n>20;
}
let answer=arr.every(greaterthan20);
console.log(answer);
// filter return a new array which pass the test case
let arr=[19,12,34,56]
function greaterthan10(item)
{
    return item>10;
}
let result=arr.filter(greaterthan10);
console.log(result);
function greaterthan20(n)
{
    return n>20;
}
let answer=arr.filter(greaterthan20);
console.log(answer);
// Like map , the forEach() method receives a function as an argument and executes it once for each array element. However, 
//instead of returning a new array like map, it returns undefined.
let arr=[10,15,12,10,3,9]
function oddcheck(item)
{
    return item%2!==0;
}
let result= arr.every(oddcheck);
console.log(result);
let ans=arr.forEach(oddcheck);
console.log(ans);
let arr = ["I", "go", "home"];
delete arr[1]; // remove "go"
alert( arr[1] ); // undefined
// now arr = ["I",  , "home"];
alert( arr.length ); // 3
console.log(arr);
let arr = ["I", "study", "JavaScript"];
console.log(arr.slice(1,1));
console.log(arr);
// splice  add /remove array element
let arr = ["I", "study", "JavaScript", "right", "now"];
// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");
console.log(arr);
var fruits = ["Banana", "Orange", "Apple", "Mango","kiwi"];
// At position 2, add 2 elements, remove 1 item: 
let result=fruits.splice(2, 1, "Lemon", "Kiw"); //banana,Orange,Lemon,Kiw,Mango,kiwi
console.log(result);
console.log(fruits)
// At position 2, add 2 elements: remove nothing 
fruits.splice(2, 0, "Lemon", "Kiwi"); //Banana,Orange,Lemon,Kiwi,Apple,Mango
console.log(fruits);
// At position 2, remove 2 items: 
fruits.splice(2, 2);  //Banana,Orange,Kiwi
console.log(fruits);
// remove 2 first elements
 arr.splice(0, 2);
 console.log(fruits);
//  The find method looks for a single (first) element that makes the function return true.
If there may be many, we can use arr.filter(fn).
The syntax is similar to find, but filter returns an array of all matching elements:
let user=[
    {
        id:1 ,name:"shivam"} ,
       { id:2 , name:"kumar"},
       { id:3 , name:"shiv"}
    
];
function people(item)
{
return item.id==1;
}
let student=user.find(people);
console.log(student);
function printid(element)
{
    return element.id<=3;
}
console.log(user.filter(printid));
let arr = [1, 2, 3, 4, 5];
console.log(arr.reverse());
let str = "test";
console.log(str.split(''));
// Reduce method
// acumulator ,current,initial
let arr=[1,3,5,8];
let initialvalue=1;
let result=arr.reduce(function(accumulator,current)
{
    accumulator=accumulator*current; //product=product*arr[i];
    return accumulator;
},initialvalue);
console.log(result);
// chainable map chain
let salary=[100,200,300,400,500]
let result= salary.filter(item=>item>300).map(item=>item*2);
console.log(result);
// sum of evensquare array
let arr = [1, 2, 3, 4, 5];
let result=arr.map(item=> item*item).filter(item=>item%2===0).reduce((acc,curr)=>
{
    acc+=curr;
    return acc;
} , 0);
console.log(result);
*/

//Array methods
//includes()
// let arr = [1,2,3,4,5]
// console.log(arr.includes(2));   // it prints true becoz it searches for 2

//Indexof()
// let fruits =['banana','orange','apple','banana','kiwi','banana']
// console.log(fruits.lastIndexOf('banana'));  //it prints 5

//findIndex
// let arr =[1,2,3,4,5]
// //returns the index of the first element in the array that satisfies the provided testing function

// //whenever u give a function as an arguement to the function that is known as a callback function
// function cb(){   //callback function---it either returns true or false (i.e)boolean values
//          //conditions
// }
// let result = arr.findIndex(cb);

// function greaterthan4(element){
//     return element > 4;
// }
// let result =arr.findIndex(greaterthan4);
// console.log(result);  // it returns 4 becox it checks all the element one by one and executes the index value until it satisfies


// let arr = [1,2,3,4,5]
// let result = arr.findIndex(element => element > 3);
// console.log(result);  //3


//concat
//let arr1=[a b c]
//let arr2=[d e]
// let arr3 = arr1.concat(arr2);
// console.log(arr3);  // it prints [a b c d e]

//tostring
// const arr = [1,2,'a','b']
// let result = arr.toString();
// console.log(result);  // it prints [1,2,3,a,b]

//join
// let fruits = ['apple','banana','orange']
// let result = fruits.join('-'); //apple-banana-orange
// let result1 = fruits.join(' '); //apple banana orange
// let result1 = fruits.join(''); //applebananaorange
// let result2 = fruits.join();  //apple,banana,orange
// console.log(result);

//some
// let arr = [1,2,3,4,5]
// function isEven (element){  //if element is even or not
//     if(element % 2 === 0){
//         return true;
//     }
//     return false;
// }

//element % 2 === 0  // returns true or false

// function isEven(element){
//     return element % 2 === 0
// }

// let result = arr.some(isEven)
// console.log(result);  //it returns true becoz it checks all the element of the array

// let result =  arr.some(element => element % 2 === 0)
// console.log(result);

//every
// let arr = [2,4,6,8]
// let result = arr.every(element => element % 2 === 0)
// console.log(result);

// let arr = [1,2,3,4,5]

// console.log(arr.some(y => y <2)); //true
// console.log(arr.every(y => y > 5)); //false

//let str = "string"
//console.log(str.length) 

// let fruits = ['apple','orange','banana','pear']
// console.log(fruits.some(item => item.length < 5));  // true

//filter - it returns a new array with the elements that satisfy the given condition
// let arr = [1,2,3,4,5]
// function isGreaterthan3(element){
//     return element > 3
// }
// let resultarray = arr.filter(isGreaterthan3)
// console.log(resultarray);  //[4,5]

//arrow function
// let resultarray = arr.filter(element => element > 3)
// console.log(resultarray);

//filter out odd elements
// 

//Map---returns a new array populated with the results of the callbackfunction
//normal way 
// let arr = [1,2,3,4,5]
// let newarr=[]
// for(let i = 0 ;i < arr.length ; i++){
//   newarr.push(arr[i]*2)
// }
// console.log(newarr) //[2,4,6,8,10]

//using map()
// function double(item){
//     return item * 2
// }
// let newarr = arr.map(double)
// console.log(newarr);  //doubles the array elements

// let newarr = arr.map(item => item * 2)
// console.log(newarr);  //doubles the array elements --arrow function

//que---adds 5 to each element
// let newarr = arr.map(item => item+5)
// console.log(newarr);

//foreach --executes a provided function once for each element in the array
// let arr = [1,2,3,4,5]
// for(let i=0;i<arr.length;i++){
//     console.log (arr[i]*2);
// }

//foreach ---if u dont want new array but want to double the elements of the array
// arr.foreach(item => {
//     console.log(item*2)
// } )

//using foreach calculate the sum of elements in arr
// let sum = 0;
// for(let i = 0; i<arr.length ;i++){
//     sum+=arr[i];
// }
// console.log(sum); //sum of the elements of array

//another method

// let arr = [1,2,3,4,5];
// let sum=0;
// arr.forEach(element => {
//     sum+=element;
// });
// console.log(sum);

// reduce----returns a single value(executing the array in a single value e.g:sum/product of elements)
//accumulator,current,initial value
//reduce takes two arguments 1)callback function
                           //2)initial value
//callback function has 2 arguments --1.accumulator--it accumulates all the elements of the array  2.current it is similar to item/element

// let arr = [1,2,3,4,5];
// let initialvalue=0;
// let result = arr.reduce(function(accumulator,current){
//     accumulator+=current;
//     return accumulator;
// },initialvalue)
// console.log(result);


//practice
// let arr = [1,2,3,4,5];
// let squaredarr = arr.map(item => item * item);
// let evensquares = squaredarr.filter(item => item % 2 === 0);
// let sumofevensquares = evensquares.reduce((acc,curr)=>{
//     acc+=curr;
//     return acc;
// },0)
// console.log(sumofevensquares);

//map filter reduce are so called chainable means we can use one after another
// let sumofevensquares = arr.map(item =>item * item).filter(item => item % 2 === 0).reduce((acc,curr)=>{
//     acc+=curr;
//     return acc;
// },0)
// console.log(sumofevensquares);

//question---filter our salaries greater than 300, double the filtered salaries, find out the total salary

// let arr = [100,200,300,400,500,600];
// let sum = arr.filter(item => item > 300).map(item => item * 2).reduce((acc,curr)=>{
//     acc+=curr;
//     return acc;
// },0)
// console.log(sum);

















