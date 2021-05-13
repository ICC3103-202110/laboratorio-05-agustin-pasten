const {getTitle,getTable,inputBillAmount,inputTip,afterInputBillAmount,afterInputTip} = require("./view")
const {realTip,total} = require("./update")



async function app(billAmount,tip,valueRealTip,valueTotal){
    console.clear();
    console.log(getTitle());
    getTable(billAmount,tip,valueRealTip,valueTotal)
    preBillAmount = billAmount
    preTip =tip
    prevalueRealTip = valueRealTip
    preValueTotal = valueTotal

    billAmount = inputBillAmount(billAmount)

    console.clear()
    console.log(getTitle())
    getTable(preBillAmount,preTip,prevalueRealTip,preValueTotal)
    console.log(afterInputBillAmount(billAmount))

    tip = inputTip(tip)
    console.clear()
    console.log(getTitle())
    getTable(preBillAmount,preTip,prevalueRealTip,preValueTotal)
    console.log(afterInputBillAmount(billAmount))
    console.log(afterInputTip(tip))
    
    valueRealTip =realTip(billAmount,tip)
    valueTotal = total(billAmount,valueRealTip)
    app(billAmount,tip,valueRealTip,valueTotal)
    
}

app(0,0,0,0)