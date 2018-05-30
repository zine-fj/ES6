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

// promise
readFile('data/a.txt').then(res=>{
    console.log(res.toString());
    return readFile('data/b.txt');
}).then(res=>{
    console.log(res.toString());
})











