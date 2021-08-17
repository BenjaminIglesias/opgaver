var basket = [85.99 ,50.50 , 26.00]

console.log("before " + basket.join(" , "))

const  checkoutTotal= (accumulator, currentVal) => {
return accumulator + currentVal
}

basket = basket.reduce(checkoutTotal);

console.log("after " + basket);


 const findCommon = (...arr) => {
    return arr.reduce((accumulator,currentVal) => {
    
        return accumulator.filter(el => currentVal.includes(el));
   
    })
  }

  console.log(findCommon([1,4,6,5,3], [1,4,3,6,9], [1,9,7,4,6,2]))

