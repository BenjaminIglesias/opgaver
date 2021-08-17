const crypto = require('crypto');
const { get } = require('http');

const randomStrings = {
    "title": "6 Secure Randoms",
    "randoms": [
        { "length": 48, "random": "A string with 48 random hex-characters" },
        { "length": 40, "random": "A string with 40 random hex-characters" },
        { "length": 32, "random": "A string with 32 random hex-characters" },
        { "length": 24, "random": "A string with 24 random hex-characters" },
        { "length": 16, "random": "A string with 16 random hex-characters" },
        { "length": 8, "random": "A string with 8 random hex-characters" }
    ]
}
const makeSecureRandom = (size) => new Promise(function (resolve, reject) {
    return crypto.randomBytes(size, function (err, buffer) {
        if (err) {
            reject(new Error(err))
        }
        let secureHex = buffer.toString('hex');
        resolve(secureHex)
    })
})
const getRandomsByArraySize = async (array) => {
    
    const arrToReturn = []

    array.map((ele) => {
        arrToReturn.push(makeSecureRandom(ele))
    })
     
    return Promise.all(arrToReturn)    

}

const makeSixRandom = async () => {
    sizeDeterminatingArray = [(48/2),(40/2),(32/2),(24/2),(16/2),(8/2)]
    tempArray = []

    await getRandomsByArraySize(sizeDeterminatingArray).then((e) => {
        e.forEach((n)=>{tempArray.push({"length": n.length, "random": n})
    })
    })

    const myObject = {
        title: "6 secure randoms",
        randoms: tempArray
    }
return myObject
}

//makeSixRandom().then((n)=>{console.log(n)});
//getRandomsByArraySize(arr).then((n)=>{console.log(n)})

module.exports = {makeSecureRandom,getRandomsByArraySize,makeSixRandom};