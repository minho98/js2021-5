let output = "";

for(let i =0; i<10; i++){
    for(let j=0; j<10-i;j++){
        output += " ";
    }
    for(let j =0; j<i+1; j++){
        output += "*"; 
}
for(let j=1; j<i+1;j++){
    output += "*";
}
    output += "\n";
}
console.log(output);
// -----------------------------------------
// let output = "";

// for(let i =0; i<10; i++){
//     for(let j =10; j>i+1; j--){
//         output += "*";
//     }
//     output += "\n";
// }
// console.log(output);
// ----------------------------------------------------
// let i =0;
// let foo = [2,3,4,5,10];
// while (true){
//     if(foo[i] %2==0){
//         bar = foo[i];
//         break;
//     }
//     i=i++;
// }
// console.log(`처음 발견한 짝수는 ${bar}입니다.`)
// -----------------------------------------

// bar=[0];
// console.log("\n push");
// foo.push("자료구조", 1, 0.5);
// bar.push(1,2,3);
// console.push(foo);

// console.log("\n shift");
// foo.shift();
// bar.shift();
// console.log(foo);
// console.log(bar);

// --------------------------------------------
// for (let i=1; i<10; i++){
//     if(i%2 == 0){
//         continue;
//     }
//     console.log(i);
// }
// ------------------------------------

// {
//     let a= 10;
//     console.log(a);
// }
// ----------------------------------
