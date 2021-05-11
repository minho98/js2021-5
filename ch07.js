//예제 7-10
let foo = [55, 65, 75, 400, 550];

foo.forEach((item,index) => {
    console.log(`${index} - ${item}`);
})
let bar =foo.map((item, index)=>{
    return item +10;
})
console.log(bar);
let foobar=foo.filter((item,index)=>{
    return item % 2 ==1;
})
console.log(foobar);

//예제 7-8
// let foo = [
//     {  
//         name : '고구미',
//         price : 1000
//     },
//     {  
//         name : '감자',
//         price : 500
//     },
//     {  
//         name : '바나나',
//         price : 1500
//     },
// ];
// let popped = foo.pop();
// console.log(popped);
// console.log(foo);
// console.log();

// foo.push(popped);
// foo.push(
//     {
//         name : "사과",
//         price : 2000
//     },
//     {
//         name : "귤",
//         price : 2000
//     }
// );
// console.log(foo);

//예제 7-7
// let now = new Date();
// let before = new Date("Dec 9, 2020");

// let interval = now.getTime() - before.getTime();
// interval = Math.floor(interval/ (1000 * 60 * 60 * 24));

// console.log(interval);

//예제 7-5
// let foo = new Date();
// console.log(foo);
// //예제 7-6
// foo.setFullYear(foo.getFullYear() +1);
// foo.setMonth(foo.getMonth() +1);
// foo.setDate(foo.getDate() +1);

// console.log(foo);
//예제 7-3
// let foo = "좋은 아침입니다."

// if(foo.indexOf('아침') >= 0){
//     console.log("굿모닝.");
// }
// else {
//     console.log("굿나잇");
// }




//코드 7-12
// let foo = "abcdefg";
// let bar = foo.toUpperCase();
// let foobar = bar.toLowerCase();
// console.log(foo);
// console.log(bar);
// console.log(foobar);

//예제 7-2
// let foo = Number.MAX_VALUE;
// let bar = Number.MAX_VALUE+1;

// console.log(foo);
// console.log(bar);

//코드 7-8
// function Construtor(){}
// Construtor.foo = 273;
// Construtor.bar = function(){};

// console.log(Construtor.foo);
// console.log(Construtor.bar);

//예제 7-1
// let foo = 25.123;

// console.log(foo.toFixed(1)); //25.1
// console.log(foo.toFixed(5));

//코드 7-5
// let foo = 273;
// let bar = 512;
// Number.prototype.method = function(){
//     return "hello";
// }
// console.log(foo.method);
// console.log(bar.method);

// 코드 7-1
// let foo = false;
// let bar = 123;

// console.log(typeof foo);
// console.log(typeof bar);


