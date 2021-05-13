const {getTitle,getTable,inputBillAmount,inputTip} = require("./view")
const {realTip,total} = require("./update")



async function app(billAmount,tip,valueRealTip,valueTotal){
    console.clear();
    console.log(getTitle());
    getTable(billAmount,tip,valueRealTip,valueTotal)
    billAmount = inputBillAmount(billAmount)
    tip = inputTip(tip)
    valueRealTip =realTip(billAmount,tip)
    valueTotal = total(billAmount,valueRealTip)
    app(billAmount,tip,valueRealTip,valueTotal)
    
}

app(0,0,0,0)