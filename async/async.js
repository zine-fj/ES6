const fs = require('fs');

// 简单封装 fs封装成一个promise
const readFile = function (filePath) {
    return new Promise((resolve,reject)=>{
        fs.readFile(filePath,(err,data)=>{
            if (err) reject (err);
            resolve(data);
        })
    })
}

// async 0
async function fn() {
   let f1 = await readFile('data/a.txt');
   console.log(f1);
}

fn();

// async 1
async function fn1() {
    let [a,b,c] = await Promise.all([
        readFile('data/a.txt'),
        readFile('data/b.txt'),
        readFile('data/c.txt'),
    ]);
    console.log(a.toString());
    console.log(b.toString());
    console.log(c.toString());
 }
 
 fn1();







