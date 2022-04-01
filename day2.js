//for loop
//we can declare the initialization outside for loop but we have to use semicolon inside for loop.
//we can declare the inc/dec outside the loop but only after the console.log statement
// let i=0;
// for(;i<=10;){
//     console.log("value of i is",i);
//     i++;
// }

// for (let i=0; i<=10; i++){
//     console.log("value of i is",i);
// }

//while loop
//condition should be given properly
//inc/dec should be given after the connsolelog statement
// let i = 0;
// while(i<=10){
//     console.log("value of i is",i);
//     i++;
// }
// console.log("outside loop");

//do-while loop
// let i=0;
// do{
//     console.log("value of i is",i);
//     i++; 
// }while(i<=10)

//nested loop
// for (let i=0; i<5; i++){
//     for(let j=0; j<2;j++){
//         console.log("value of i is:",i ,"value of j is:",j);
//     }
// }

//function
//basic
// function add(){-(function definition)
//     console.log(a+b);
// }
// add();-function declaration

//function with parameters(a,b)
//function arguments(10,20 / 20,20/etc): the values which we pass to a variable
//function parameters(a,b):the value which the function to do the operation

// function addtwonumbers(a,b){
//     console.log(a+b);
// }
// addtwonumbers(10,20);
// addtwonumbers(20,20);
// addtwonumbers(30,20);
// addtwonumbers(40,20);

//function with return statement
// function addnumbers(x,y){
//     return x*y;  // any code written after return is not accessible
// }
//const result=addnumbers(12,2);
//console.log("result");

//functions which exist only in JS
// const add= function(){
//     console.log("value")
// }
// add();

//arrow function
// const a=() =>{   //=>denotes the function

// }
// a();


// -------------------------------------------




// let a= 17;
// switch(true){
//     case a<10:
//         console.log("smaller than 10");
//         break;
//     case a>10:
//         console.log("greater than 10");
//         break;
//     default:
//         console.log("Default");
//         break;        
// }


// let a= 17;
// switch(a){
//     case a<10:
//         console.log("smaller than 10");
//         break;
//     case a>10:
//         console.log("greater than 10");
//         break;
//     default:
//         console.log("Default");
//         break;        
// }


// switch case

// first type of scenario
// // we will compare the value of the variable directly

// let a = 17;

// switch (a){
//     case 10:
//         console.log("Value is 10");
//         break;  //breaks the flow
//     case 15:
//         console.log("Value is 15");
//         break;
//     default:
//         console.log("default case");
//         break;
// }

// switch (a){
//     case a>0:
//         console.log("Positive");
//         break;
//     case a<0:
//         console.log("Negative");
//         break;
//     default:
//         console.log("Zero Value");
//         break;
// }

// let i=0;
// for(; i<10;){
//   console.log("the value of i is " + i);
//   i++;
// }

// let i=0;
// while(i<10){
//     console.log("Value of i is "+ i);
//     i++;
// }
// console.log("Outside the While loop");


// let i=0;
// do{
//     console.log("Value of i is "+ i);
//     i++;
// }while(i<10)
// console.log("Outside the While loop");


// for(let i=1;i<5;i++){
//   for( let j=0;j<2;j++){
//     console.log("the value of i is "+ i +" and value of j is "+ j);
//   }
// }

// let a=3;
// let b=4;
// function add(){
//   console.log(a+b);
// }

// function sub(a,b){
//   console.log(a-b);
// }

// function mul(a,b){
//   return a*b;
// }

// const div = (a,b) => {
//   return a/b;
// }


// add();
// sub(8,5);
// console.log(mul(4,8));
// console.log(div(9,3));

--------------------

// switch case

// first type of scenario
// we will compare the value of the variable directly

// let a = 17;

// switch (a){
//     case 10:
//         console.log("Value is 10");
//         break;  //breaks the flow
//     case 15:
//         console.log("Value is 15");
//         break;
//     default:
//         console.log("default case");
//         break;
// }

// switch (a){
//     case a>0:
//         console.log("Positive");
//         break;
//     case a<0:
//         console.log("Negative");
//         break;
//     default:
//         console.log("Zero Value");
//         break;
//     }

    //for loops
   // let i=0;
    //for( ; i<10  ;){
       // console.log("value of i is",i);
       // i++;
    //}

    //while loops
    // let i=0;
    // while(i<10){
    //     console.log("value of i is", i);
    //     i++;
    // }
    // console.log("outside")
    
    //do while loops
    // let i=0;

    // do{
    //     console.log("value of i is", i);
    //     i++;
    // }while(i<10)

    //nested loops

    // for(let i=0;i<5;i++){
    //     for(let j=0;j<2;j++){
    //         console.log("value of is is:", i, "value of j is:", j);
    //     }
    // }


    //functions
    // let a=10;
    // let b=20;
    // function addtwonumbers(a,b){
    //     console.log(a+b);
    // }

    // addtwonumbers(30,40);

    //functions with return statement

    // function addtwonumbers(x,y){
    //     return x*y;
    //     console.log("heeyyy")
    // }
    // const result=addtwonumbers(12,12);
    // console.log(result);

    //function which exist only in js

    // const add =function(){
    //     console.log("value");

    // }
     
    // add();
    


