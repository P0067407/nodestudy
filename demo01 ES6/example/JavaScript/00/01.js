console.log('x')
let arr =[1,2,3,4,5]
console.log(arr.push(5))
console.log(arr)

console.log(arr.pop())
console.log(arr)

console.log(arr.shift())
console.log(arr)

console.log(arr.unshift(2))
console.log(arr)

console.log(arr.splice(2,2))    
console.log(arr)     

console.log(arr.concat([1,2]))   
console.log(arr)   

arr = [2,10,6,1,4,22,3]
//console.log(arr.sort())   // [1, 10, 2, 22, 3, 4, 6]

arr = arr
.sort((a, b) =>a-b)
.filter ( (i, v) => i < 4) 
//.find((value, index, array) =>value > 2)
.includes(3)

console.log(arr)
