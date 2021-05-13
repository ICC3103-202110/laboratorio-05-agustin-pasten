

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


module.exports = {
    billAmount,
    tip,
    realTip,
    total

}