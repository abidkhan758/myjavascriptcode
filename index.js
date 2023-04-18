// // console.log("hello");

// // function f(a, b, c) {
// //   m = ["1", "2", "3"];
// //   a = 3;
// //   b[0] = "x";
// //   c.first = false;
// // }

// // var x = 4;
// // var y = ["A", "B", "C"];
// // var z = { first: true};

// // f(x, y, z);

// // console.log( "value of x y x",x, y, z);

// // const nums ={numb: 10}

// // function changeNum(a){
// //   return  a.numb= 100
// // }

// // changeNum(nums)

// // console.log("num",nums)

// // const num = 10

// // function changeNum(a){
// //    a= 100
// // }

// // changeNum(num)

// // console.log("num",num)

// // let sum = 50;
// // console.log(sum);

// // function cal() {
// //   let sum = 10;

// //   function cupute() {
// //     console.log(sum);
// //   }
// //   cupute();
// //   console.log(sum);
// // }

// // cal();

// // let a = 5;
// //  a = 6;
// //  console.log(a)

// //  console.log(window)

// // let a = 5;
// // let b = "hello";

// // let c = a + b;
// // let d = a - b;
// // let e = a * b;
// // let f = a / b;

// // console.log(c); // type coercion
// // console.log(typeof c); // c will become string

// // console.log(d); // type coercion
// // console.log(typeof d);
// // console.log(e); // type coercion
// // console.log(typeof e);
// // console.log(f); // type coercion
// // console.log(typeof f);

// // console.log(isNaN("Hello")); // Returns true
// // console.log(isNaN(345)); // Returns false
// // console.log(isNaN("1")); // Returns false, since '1' is converted to Number type which results in 0 ( a number)
// // console.log(isNaN(false)); // Returns false, since true converted to Number type results in 1 ( a number)
// // console.log(isNaN(false)); // Returns false
// // console.log(isNaN(undefined));
// // // Returns true

// // //IIFE

// // function foo() {
// // var name = "abid";
// // }
// // foo();
// // // console.log(name)

// // const personName = {
// //   firstName: "abid",
// //   lastName: "khan",
// // };

// // function printFullName(address,city) {
// //   console.log(this.firstName + " " + this.lastName+" "+address+" "+city);
// // }

// // const personName2 = {
// //   firstName: "sachin",
// //   lastName: "tendulkar",
// // };

// // const personName3 = {
// //   firstName: "abid",
// //   lastName: "khan",
// // };

// // printFullName.call(personName2,"amkho vijay nagar", "gwalior");

// // printFullName.apply(personName2,["amkho vijay nagar", "gwalior"]);

// // let myFullName=printFullName.bind(personName2,"amkho vijay nagar", "gwalior");

// // myFullName()//bind method keep copy that can be called any time where we want

// // // printFullName.call(personName3);

// // function fisrtfun(sum){
// //   console.log(Math.floor(sum / 2));}

// // function secondfun(sum){
// //   console.log(sum*2)
// // }

// // function calculation(num1,num2,opration){
// //   console.log("i am first function")
// //   var sum =num1+num2
// //   opration(sum)
// //   // console.log("i am first function")
// // }

// // calculation(3,3,fisrtfun)
// // calculation(5,5,secondfun)

// // function addFourNumbers(num1,num2,num3,num4){
// //   return num1 + num2 + num3 + num4;
// // }

// // let fourNumbers = [5, 6, 7, 8];

// // addFourNumbers(...fourNumbers);
// // // Spreads [5,6,7,8] as 5,6,7,8

// // let array1 = [3, 4, 5, 6];
// // let clonedArray1 = [...array1];
// // // Spreads the array into 3,4,5,6
// // console.log(clonedArray1); // Outputs [3,4,5,6]

// // let obj1 = {x:'Hello', y:'Bye'};
// // let clonedObj1 = {...obj1}; // Spreads and clones obj1
// // console.log(obj1);

// // let obj2 = {z:'Yes', a:'No'};
// // let mergedObj = {...obj1, ...obj2};

// // console.log(mergedObj)

// // a=1;
// // alert(`a=${a}`);
// // console.log(a)
// // var a;

// // hoistedVariable = 3;
// // console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized
// // var hoistedVariable;

// // function result()
// // {const a = 10;}

// // result()

// // {const a= 10
// // }

// // console.log(a)

// // var a = 4
// // var b = "hello"

// // var c = a/b
// // console.log(c);
// // console.log(typeof(c));

// // var x = 0;
// // var y = 23;

// // if(x) { console.log(x) }   // The code inside this block will not run since the value of x is 0(Falsy)

// // if(y) { console.log(y) }    // The code inside this block will run since the value of y is 23 (Truthy)

// console.log(isNaN("Hello") ) // Returns true
// console.log(isNaN(345)  ) // Returns false
// console.log(isNaN('0') ) // Returns false, since '1' is converted to Number type which results in 0 ( a number)
// console.log(isNaN(true) )// Returns false, since true converted to Number type results in 1 ( a number)
// console.log(isNaN(false)) // Returns false
// console.log(isNaN(undefined)) // Returns true

// //immediately invoke function

// (function () {
//   console.log("i am immediately invoke function");
// })();

// //higher order function

// function display() {
//   return function () {
//     console.log("i am a higher order function");
//   };
// }

// var x = display();

// x();

// //call apply bind method

// const obj1 = {
//   firstName: "abid",
//   lastName: "khan",
// };

// const obj2 = {
//   firstName: "shoib",
//   lastName: "ali",
// };

// function fullName(address, city) {
//   console.log(
//     this.firstName + " " + this.lastName + " " + address + " " + city
//   );
// }

// fullName.call(obj1, "delhi", "New Delhi"); //call

// fullName.apply(obj1, ["delhi", "New Delhi"]); //apply

// let bindMethd = fullName.bind(obj1, "delhi", "New Delhi"); //bind

// bindMethd(); // bind

// //function currying

// function curr(a) {
//   return function (b) {
//     let sum = a + b;
//     console.log(sum);
//   };
// }

// curr(3)(1);

// // call back function

// function multiplyBy2(sum) {
//   console.log(sum * 2);
// }

// function dividedBy2(sum) {
//   console.log(sum / 2);
// }

// function oprationSum(a, b, opration) {
//   let sum = a + b;
//   opration(sum);
// }

// oprationSum(4, 2, multiplyBy2);
// oprationSum(4, 2, dividedBy2);

// function result(...rest) {
//   console.log(rest);
// }

// result(1, 1, 1);

// ab = 100;

// var ab;

// console.log(ab);


// // const xa = 1;
// // {
// //   console.log(xa); // ReferenceError
// //   const xa = 2;
// // }

// // console.log(khan)

// // let khan =9 // hoisting 



// var a= 2
// var b= "hello"

// console.log(a-b) type coercion


function higherOder(a){
  return function(b){
    return console.log(a+b)
  }
}

higherOder(10)(2)// funtion curring and higher oder function both