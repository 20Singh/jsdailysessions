//using literals

// let arr = [];  //empty array

// console.log("arr", arr);

// //using constructor function

// let anotherArr = new Array();

// console.log("anotherArr",anotherArr);


// let arr =[1,2,3,4,5,6];
// console.log("arr",arr);

// let anotherArr = new Array(1,2,5,7,8,4,8);
// console.log("anotherArr", anotherArr);

// //push,pop,shift,unshift

// let values =["a","e","i","o","u"];

// console.log(values);
// values.push(1);//add value
// console.log(values);
// values.pop();//remove value
// console.log(values);
// values.shift();//remove first value
// console.log(values);
// values.unshift("a");//add fisrt value
// console.log(values);


// function countString (arr){
//     let count = 0;
//     let tempArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (typeof(element)==="string") count++;
//          if (typeof(element)==="string") tempArr.push(element)
//     }
//     return tempArr;
// }

// const result = countString(["a", "b", "c", 1, 3, 5]);
// console.log(result);

// let arr =[1,2,3,4,4,5,5];

// const value1 =arr.some(element =>element>2);
// const value2 =arr.every(element =>element>2);

// console.log(value1, value2); //true false










// var a;
// console.log(a);
// a=10;
// console.log(a);

//functions are reuseable block of codes
//to run the block of code inside the function we need to execute the function
// function abc(){
//     //code block for the function
//     console.log("inside abc");
// }
// abc();//function execution or function call

// function add(a,b){
//     console.log(a+b);;
// }
// add(4,5);

//for returning the function we should assign the variable outside the function
// function add(a,b){
//     return a+b;  //return keyword will let u out of the function after execution
// }
// var result = add(4,6);
// console.log(result);
// // or
// console.log(add(4,6));

// function abc(){
//     var a=10;
//     var b=20;
//     console.log(a,b,"iniside abc")
// }
// var x=10;
// console.log(a,b,"inside global")- it throws error as a and b is not defined

// function abc(){
//     var a=10;
//     var b=20;
//     console.log(a,b,"iniside abc")
//     console.log(x);-//it looks for the parents lexical scope as there is no var inside the function so it prints 10
// }
//var x=10;
//abc();

// var x = 10

// var x = 10;
// function a() {
//     var y = 20;
//     function b() {
//     console.log(x, y);
// }
// b();
// }
// a();