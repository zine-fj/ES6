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

function * gen() {
    yield readFile('data/a.txt');
    yield readFile('data/b.txt');
}
let g1 = gen();

g1.next().value.then(res=>{
    console.log(res.toString());
    return g1.next().value;
}).then(res=>{
    console.log(res.toString());
})










