const fs = require('fs')
const aPromise = new Promise((resolve, reject) => {
    fs.readFile('a.txt', 'utf-8', function(err, data){
        if (err) return reject(err)
        resolve(data)
    })
})

const bPromise = new Promise((resolve, reject) => {
    fs.readFile('b.txt', 'utf-8', function(err, data){
        if (err) return reject(err)
        resolve(data)
    })
})

const cPromise = new Promise((resolve, reject) => {
    fs.readFile('c.txt', 'utf-8', function(err, data){
        if (err) return reject(err)
        resolve(data)
    })
})

let content = ''
aPromise
    .then(aContent => {
        content += aContent
        return bPromise
    })
    .then(bContent => {
        content += bContent
        return cPromise
    })
    .then(cContent => {
        console.log(content + cContent)
    })
	
console.log("我已经运行完成了")