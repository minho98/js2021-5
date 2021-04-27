// code 5-1함수
// let foo = function(){
//     console.log("첫번줄");
//     console.log("두번째 줄");
// };

// foo();
// console.log(foo);

//code 5-2선언적 함수
// function foo(){
//     console.log("첫번줄");
//     console.log("두번째 줄");
// };

// foo();
// console.log(foo);

//code 5-3화살표함수
// let foo = () =>{
//     console.log("첫번줄");
//     console.log("두번째 줄");
// };

// foo();
// console.log(foo);
//예제 5-1
// function power(x){
//     return x * x;
// }
// console.log(power(10));

// function foo(x){
//     let bar = x * x;
//     return bar;
// }
// let foobar = foo(10);
// console.log(foobar);

//
// function multiply(x,y){
//     return x * y;
// }
// console.log(multiply(2,200));
// console.log(multiply(100,32));

//
// function print(name, count){
//     if(!count){
//         count = "입력하시오!";
//     }
//     console.log(`${name}이 ${count}개 있습니다.`);
// }
// print("사과",10);
// print("사과");
//
// function print(name="민호", count=1){

//     console.log(`${name}이 ${count}개 있습니다.`);
// }
// print("사과",10);
// print("사과");
// print();
//
// function tenTimes(foo){
//     for(let i =0; i <10;i++){
//         foo();
//     }
// }

// tenTimes(function(){
//     console.log("함수 호출");
// });

//
// let inputA = '52';
// let inputB = '52.273';
// let inputC = '1403동';

// console.log(parseInt(inputA));
// console.log(parseFloat(inputA));
// console.log(parseInt(inputB));
// console.log(parseFloat(inputB));
// console.log(parseInt(inputC));
// console.log(parseFloat(inputC));

// console.log(Number(inputA));
// console.log(Number(inputB));
// console.log(Number(inputC));

//
// setTimeout(()=> {
//     console.log("1초 경과!!!");
// }, 1000)

// setInterval(()=> {
//     console.log("인터벌1초 경과!!!");
// }, 1000)

// let foo= setInterval(()=>{
//     console.log("인터벌 1초 경과!!!");
// }, 1000)

// setTimeout(()=>{
//     clearInterval(foo);
// },6000)

// let foo;
// foo=10;
// foo=20;
// console.log(foo);

// let foo;
// foo=() => { console.log("1st");}
// foo=() => { console.log("2nd");}
// foo();

let name = "dong"
foo = () => {
    let name = "synn";
    console.log(this.name);
};
function () {
    console.log("this.name");
};
foo();