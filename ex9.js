// const fs=require("fs");
// const file = fs.readFileSync("test.txt");

// console.log(file);
// console.log(file.toString());

// const fs = require('fs');
// fs.writeFile('test.txt', '잘자!', (error)=>{
//     console.log("완료!");
// })

// 예제9-13
// const request = require("request");

// request("https://naver.com", (error,response, body)=>{
//     console.log(body);
// });
//예제 9-14
const request = require("request");
const cheerio = require("cheerio");

const url = "https://naver.com";

request(url, (error, response, body) =>{
    const $ = cheerio.load(body);
    console.log($("strong.new").text());
});