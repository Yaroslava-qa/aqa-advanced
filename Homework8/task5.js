const firstArray = new Set([1, 2, 3])
const secondArray = new Set([4, 5, 6])

const newArray = new Set([...firstArray, ...secondArray])

console.log(newArray)