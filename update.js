

function billAmount(value){
    return value
}

function tip(value){
    return value
}

function realTip(amount,tip){
    return amount*tip/100
}

function total(amount, realTip){
    return amount + realTip
}

/*
console.log(billAmount(100));
console.log(tip(10));
console.log(realTip(100,10));
let a = realTip(100,10);
console.log(total(100,a));
*/

module.exports = {
    billAmount,
    tip,
    realTip,
    total

}