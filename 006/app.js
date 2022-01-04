// 파일이름 : 006_fs(file_system)\app.js

// 공식문서 링크  : https://nodejs.org/dist/latest-v16.x/docs/api/fs.html
const fs = require('fs');

// rename, readFile, writeFile, appendFile, copyFile, mkdir

// 1
// let 변수 = '이호준' // 사용자 이름
// let 날짜 = new Date()
// fs.rename('./test.txt', `./${변수}${날짜.getMilliseconds()}.txt`, (err) => {
//     console.log(err);
// })
//파일 이름 바꾸었다!!

// 2
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//     console.log(err);
//     console.log(data);
// })
// 파일 내용을 읽었다

// 3
// fs.readdir('./', (err, data) => {
//     console.log(err);
//     console.log(data);
// })
// 경로에 있는 파일목록을 알려줬다

//4
// fs.writeFile('./test2.txt', 'hello world 2', (err)=>{
//     console.log(err)
// });
//파일에 내용을 바꿔준다!

// 5
// fs.appendFile('./test4.txt', 'hello world 3', (err)=>{
//     console.log(err)
// });
//해당파일을 만들기도 함과 동시에 내용 추가를 해주겠다!!

// 6
// fs.copyFile('./test2.txt', './test3.txt', (err)=>{
//     console.log(err)
// });
//카피한 것!!

// 7
// fs.mkdir('./yoyo', (err)=>{
//     console.log(err)
// });
//폴더생성!!