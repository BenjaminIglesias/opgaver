//Syntax of Promise

let myPromise = new Promise(function(resolve,reject){
    resolve(); //when successful
    reject(); // when error
})

myPromise.then(
    function(value){/* code if succesful*/},
 
).catch((err) => {/*handle error*/})

//example 

const fs = require('fs');

const getFile = (fileName) => {
    return new Promise((resolve,reject)=>{
        fs.readFile(fileName,(err,data)=>{
            if(err){
                reject(err)
                return
            }
            resolve(data)
        })
    })
}

getFile('C:\\Users\\')
.then(data => console.log(data))
.catch(err => console.error(err))