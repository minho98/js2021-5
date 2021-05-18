# 김민호 [201740204]

## [5월 18일]

* 전역변수<br>
    __filename : 현재실행 중인코드의 파일 경로<br>
    __dirname : 현재 실행중인 코드의 폴더경로<br>

* process 객체의 속성<br>
    env : 컴퓨터의 환경 정보를 나타낸다<br>
    version : node.js 버전을 나타낸다<br>
    versions : node.js와 종속된 프로그램 버전을 나타낸다<br>
    arch : 프로세서의 아키텍처를 나타낸다<br>
    platform : 플랫폼을 나타낸다<br>

* os 객체생성<br>
    const foo = require("os");<br>

* url 모듈 추출<br>
    cost url = require('url);<br>

* fs 모듈 추출<br>
    const fs = require("fs");<br>

* 비동기적으로 파일 읽어 들이기<br>
    const fs = require("fs");<br>

    fs.readFile('textfile.txt', (error, file) => {<br>
        console.log(file);<br>
        console.log(file.toString());<br>
    });<br>

* naver body태그 읽어오기<br>
    const request = require("request");<br>

    request("https://naver.com", (error,response, body)=>{<br>
        console.log(body);<br>
    });<br>
* naver 홈페이지에서 stron태그값 추출해오기<br>
    const request = require("request");<br>
    const cheerio = require("cheerio");<br>

    const url = "https://naver.com";<br>

    request(url, (error, response, body) =>{<br>
        const $ = cheerio.load(body);<br>
        console.log($("strong.new").text());<br>
    });<br>
-------------------------------------------------------------------------------  
## [5월 11일]

* sort(), pop(), push() 등 array 객체의 메소드들은 저장된 값의 변화를 줄수있는 메소드들이다.
* index값이 필요하면 foreach()문을 사용하고 필요없으면 map()을 사용하면 된다 <br>
let foo = [55, 65, 75, 400, 550];<br>

foo.forEach((item,index) => {<br>
    console.log(`${index} - ${item}`);<br>
})<br>
let bar =foo.map((item, index)=>{<br>
    return item +10;<br>
})<br>
console.log(bar);<br>
foreach를 사용하면 인덱스 값과 배열순서가 같이 출력이 되고 map을 사용하면 배열안에 있는 값만 출력이 된다.<br>
* pop () 과 push() 를 사용해서 배열에 추가 또는 추출하기<br>
 let foo = [<br>
    {  <br>
        name : '고구미',<br>
        price : 1000<br>
    },<br>
    {  <br>
        name : '감자',<br>
        price : 500<br>
    },<br>
    {  <br>
        name : '바나나',<br>
        price : 1500<br>
    },<br>
];<br>
let popped = foo.pop();<br>
console.log(popped);<br>
console.log(foo);<br>
foo에 고구마 감자 바나나를 주었고 먼저 마지막값인 바나나를 출력하면 foo에는 바나나값이 빠진 감자와 고구마 값만 남게된다<br>
-------------------------------------------------------------------------------------------
## [5월4일]
* toFixed이용해서 소수점자리 까지 출력하기 : toFixed() 안에 숫자 값에 따라서 소수점몇번째 까지 출력할껀지가 정해진다.<br>

    let foo = 25.123;<br>

    console.log(foo.toFixed(1));  >>>>  값 : 25.1<br>
    console.log(foo.toFixed(5));  >>>>  값 : 25.12300<br>

* indexOf 이용하여 출력하기 :indexOf() 안에 값에 따라 조건문을 사용하여 조건을 충족 불충족 할경우 닶을 얻을수있다.<br>

let foo = "좋은 아침입니다."<br>

if(foo.indexOf('아침') >= 0){<br>
    console.log("굿모닝.");<br>
}<br>
else {<br>
    console.log("굿나잇");<br>
}<br>

* strig 객체들마다 출력하기 : strig 객체들은 원본 데이터를 건들지않는다<br>

let foo = "abcdefg";<br>
let bar = foo.toUpperCase();<br>
let foobar = bar.toLowerCase();<br>

console.log(foo);<br>
console.log(bar);<br>
console.log(foobar);<br>

foo값 : 소문자로  출력이된다<br>
bar값 : 대문자로  출력이된다<br>
foobar값 : 다시 소문자로 출력이 된다<br>

* Product를 이용해서 물건의 이름과 가격 출력하기<br>
function Product(name,price) {<br>
    this.name = name;<br>
    this.price = price;<br>
}

let product = new Product("바나나", 1200);<br>

console.log(product);<br>

값 : Product { name: '바나나', price: 1200 }<br>

## [4월27일]

* 배열은 뒤에있는것 기준으로 출력
let foo;<br>
 foo=10;<br>
 foo=20;<br>
 console.log(foo);<br>

 let foo;<br>
 foo=() => { console.log("1st");}<br>
 foo=() => { console.log("2nd");}<br>
 foo();<br>
 * 1초마다 메세지 출력하기
  let foo= setInterval(()=>{<br>
     console.log("인터벌 1초 경과!!!");<br>
 }, 1000)<br>

 setTimeout(()=>{<br>
     clearInterval(foo);<br>
 },6000)<br>
## [4월 13일]
*가장 편한매개변수 초기화 방법 직접적으로 값을 주면된다
function print(name="민호", count=1){<br>

    console.log(`${name}이 ${count}개 있습니다.`);  <br>
}
print("사과",10); <br>
print("사과"); <br>
print(); <br>
## [04월 6일]
* 배열에서 문자열과 변수를 같이 출력하고 싶을때는 ``을 사용한다
* for in / for of 의 차이점은 for in은 인덱스(문자)값+값까지 출력을 하고 for of는 값만 표시해준다
* \n 을사용하면 한줄을 띄어줌 한줄 빈칸처리
* *로 삼각형 찍는법 

let output = "";

for(let i =0; i<10; i++){ <br>
    for(let j=0; j<10-i;j++){ <br>
        output += " ";
    }

    for(let j =0; j<i+1; j++) {  <br>
        output += " * "; 
}

for(let j=1; j<i+1;j++){  <br>
    output += " * ";
}

    output += "\n";
}

console.log(output);

## [03월 30일]
* 조건문이 특정범위를 표현할때는 if 특정값은 표현할때는 swich 를 사용한다<br>
* 조건문을 사용할때 case가 많이 들어가면 범위설정이 맞는지 확인해보기<br>
* Ctrl + Shift + Alt 랑 방향키를 누르면 커서범위가 커지고 tab키누르면 한칸뒤로 Shift+tab누르면 한칸 앞으로 당겨진다 (단락정리할때 필요) > 나갈때나 필요없어지면 ESC<br>
* 삼항연산자 <불 표현식> ? <참> : <거짓>  : console.log(number % 2 == 0?"짝수":"홀수");<br>
* 반복문중에 몇번 반복해야되는지 모르는 경우에 while 문을 사용한다<br>
* for in 과 for of 의 차이점은 인덱스값이 필요할때는 for in 인덱스가 필요없을때는 for of를 사용한다<br>


***
## [03월 23일]

*   이스케이프 문자 "" , '' 를 계속 사용하고싶을때는 \사용해주면 중복으로 사용가능 원래는 "민호의'숙제일기'"이리써야되는데 "민호의\"숙제일기\"" 이리쓰면 사용가능<br>
*   C언어에서 "[]" =  "배열" 생각하면됨 let a = "hello world"; 입력후 a[4]; 입력하면 4번째o가 출력됨 (0부터시작) <br>
*   `를 계산식에 사용하면 계산되어서사용됨 `52+273 = ${52+273}` 하면 계산된 식이 나옴 ${} 써주어야함<br>
*   표현 불가능한 수치형 결과를 나타내는 값 "NaN"<br>



***
## [03월 16일]

<!-- > 오늘 배운 내용 요약 <br /> -->
<!-- > 여러줄 요약<br> -->
<!-- > 3번 -->
<!-- *** -->
배운내용<br>
*   consol.log와 alert의 차이점<br>
    -alert("hello world...!");  >> 팝업창으로 "hello world" 라고 나옴<br>
    -console.log("hello world...!");  >> 콘솔창 (f12)에 "hello world" 라고 나옴<br>



***
*전문가 용어*<br>
三 햄버거 메뉴 / ... 케밥 메뉴 <br>

<table>
</tabla>

