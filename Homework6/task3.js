function checkOrder(available,ordered){
    if (available<ordered & ordered!=0){
        return "Your order is too large, we don’t have enough goods."
    }else if (ordered==0){
        return  "Your order is empty"
    }else if (available>=ordered){
        return "Your order is accepted"
    }
}
console.log(checkOrder(10,9))
console.log(checkOrder(10,10))
console.log(checkOrder(9,10))
console.log(checkOrder(9,0))
