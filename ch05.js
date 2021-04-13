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
function print(name="민호", count=1){

    console.log(`${name}이 ${count}개 있습니다.`);
}
print("사과",10);
print("사과");
print();
